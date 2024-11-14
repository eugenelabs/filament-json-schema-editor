import JsonSchemaEditorAlpinePlugin from './components/json-schema-editor';

document.addEventListener('alpine:init', () => {
    window.Alpine.plugin(JsonSchemaEditorAlpinePlugin);
})