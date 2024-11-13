<?php

namespace Eugenelabs\FilamentJsonSchemaEditor\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Eugenelabs\FilamentJsonSchemaEditor\FilamentJsonSchemaEditor
 */
class FilamentJsonSchemaEditor extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \Eugenelabs\FilamentJsonSchemaEditor\FilamentJsonSchemaEditor::class;
    }
}
