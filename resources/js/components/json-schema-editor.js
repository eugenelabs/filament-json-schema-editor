import '@json-editor/json-editor';

alert('hello from json-schema-editor.js');

export default (Alpine) => {
    Alpine.data('jsonSchemaEditorFormComponent', ({
        state,
    }) => {
        return {
            state,
            init: function () {
                this.render();
            },
            render() {

                var editor = new JSONEditor(document.getElementById('editor_holder'), {
                    schema: {
                        type: "object",
                        title: "Car",
                        properties: {
                            make: {
                                type: "string",
                                enum: [
                                    "Toyota",
                                    "BMW",
                                    "Honda",
                                    "Ford",
                                    "Chevy",
                                    "VW"
                                ]
                            },
                            model: {
                                type: "string"
                            },
                            year: {
                                type: "integer",
                                enum: [
                                    1995, 1996, 1997, 1998, 1999,
                                    2000, 2001, 2002, 2003, 2004,
                                    2005, 2006, 2007, 2008, 2009,
                                    2010, 2011, 2012, 2013, 2014
                                ],
                                default: 2008
                            },
                            safety: {
                                type: "integer",
                                format: "rating",
                                maximum: "5",
                                exclusiveMaximum: false,
                                readonly: false
                            }
                        }
                    }
                });

                // Hook up the submit button to log to the console
                document.getElementById('submit').addEventListener('click', function () {
                    // Get the value from the editor
                    console.log(editor.getValue());
                });


                // this.editor = null

                // this.editor = new EditorView({
                //     state: EditorState.create({
                //         extensions: [
                //             basicSetup,
                //             keymap.of([indentWithTab]),
                //             javascript(),
                //             php(),
                //             json(),
                //             css(),
                //             html(),
                //             EditorView.updateListener.of((v) => {
                //                 if (v.docChanged) {
                //                     this.state = v.state.doc.toString();
                //                 }
                //             }),
                //         ],
                //         doc: this.state,
                //     }),
                //     parent: this.$refs.codeeditor,
                // })
            },
        }
    });
}