<x-dynamic-component :component="$getFieldWrapperView()" :field="$field" :label-sr-only="$isLabelHidden()">
    <div x-data="jsonSchemaEditorFormComponent({
        state: $wire.{{ $applyStateBindingModifiers('entangle(\'' . $getStatePath() . '\')') }},
    })">
        <div wire:ignore class="w-full border rounded-lg overflow-hidden border-gray-300 dark:border-gray-600"
            x-ref="jsonschemaeditor" style="min-height: 150px;">
            This is the JSON Schema Editor
        </div>
    </div>
</x-dynamic-component>
