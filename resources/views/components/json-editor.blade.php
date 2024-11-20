@php
    $schema = $getSchema();
    $value = $getValue();
@endphp

<x-dynamic-component :component="$getFieldWrapperView()" :field="$field" :label-sr-only="$isLabelHidden()">
    <div x-data="jsonSchemaEditorFormComponent({
        state: $wire.entangle('{{ $getStatePath() }}').defer,
        customSchema: @js($schema),
        initialValue: @js($value),
    })">
        <div wire:ignore
             class="w-full border rounded-lg overflow-hidden border-gray-300 dark:border-gray-600"
             x-ref="jsonschemaeditor"
             style="min-height: 150px;">
        </div>
    </div>
</x-dynamic-component>
