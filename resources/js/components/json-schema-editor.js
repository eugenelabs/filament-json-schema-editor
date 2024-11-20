import { JSONEditor } from '@json-editor/json-editor/dist/jsoneditor.js';

export default (Alpine) => {
    Alpine.data('jsonSchemaEditorFormComponent', ({ customSchema, initialValue, pollInterval = 2000 }) => ({
        state: initialValue,
        editor: null,
        intervalId: null,

        init() {
            this.render();

            this.$watch('state', (value) => {
                if (this.editor) {
                    const editorValue = this.editor.getValue();
                    if (JSON.stringify(editorValue) !== JSON.stringify(value)) {
                        console.log(`[Watch] Syncing editor value with state...`);
                        this.editor.setValue(value || {});
                    }
                }
            });

            this.startPolling();
        },

        render() {
            this.editor = new JSONEditor(this.$refs.jsonschemaeditor, {
                schema: customSchema,
                startval: this.state || {},
                show_errors: 'always',
                compact: true,
                disable_edit_json: true,
                form_name_root: "Report",
            });

            this.editor.on('change', () => {
                this.syncState();
            });
        },

        syncState() {
            const newValue = this.editor.getValue();

            // If this.state is empty, set it to newValue
            if (Object.keys(this.state).length === 0) {
                this.state = newValue;
            }
        
            // Update Alpine.js state and trigger Livewire sync
            if (JSON.stringify(newValue) !== JSON.stringify(this.state)) {
                this.state = newValue;
        
                if (typeof this.$wire !== 'undefined') {
                    this.$wire.snapshotUpdated(newValue);
                }
            }
        },

        startPolling() {
            this.intervalId = setInterval(() => {
                if (this.editor) {
                    this.syncState();
                }
            }, pollInterval);
        },

        stopPolling() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        },

        destroy() {
            this.stopPolling();
            if (this.editor) {
                this.editor.destroy();
                this.editor = null;
            }
        },
    }));
};
