<?php

namespace EugeneLabs\FilamentJsonSchemaEditor\Components;

use Exception;
use Filament\Forms\Components\Field;
use Illuminate\Support\Collection;

class FilamentJsonSchemaEditor extends Field
{
    protected string $view = 'filament-json-schema-editor::components.json-editor';

    public array $jsonSchema = [];

    public array $value = [];

    /**
     * Set the JSON schema for the editor, this is used to create the form fields.
     *
     * @param string|array|Collection $jsonSchema
     */
    public function setSchema(string|array|Collection $jsonSchema): static
    {
        if ($jsonSchema instanceof Collection) {
            $this->jsonSchema = $jsonSchema->toArray();
        } elseif (is_array($jsonSchema)) {
            $this->jsonSchema = $jsonSchema;
        } else {
            $decoded = json_decode($jsonSchema, true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new Exception('Invalid JSON schema provided: ' . json_last_error_msg());
            }
            $this->jsonSchema = $decoded;
        }

        return $this;
    }

    /**
     * Set the initial value for the editor.
     *
     * @param string|array|Collection $value
     */
    public function setValue(string|array|Collection $value): static
    {
        if ($value instanceof Collection) {
            $this->value = $value->toArray();
        } elseif (is_array($value)) {
            $this->value = $value;
        } else {
            $decoded = json_decode($value, true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new Exception('Invalid JSON initial value provided: ' . json_last_error_msg());
            }
            $this->value = $decoded;
        }

        return $this;
    }

    /**
     * Get the JSON schema for the editor.
     */
    public function getSchema(): array
    {
        return $this->jsonSchema;
    }

    /**
     * Get the value of the editor.
     */
    public function getValue(): array
    {
        return $this->value;
    }
}
