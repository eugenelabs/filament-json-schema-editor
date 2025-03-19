<?php

namespace Eugenelabs\FilamentJsonSchemaEditor;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;

class FilamentJsonSchemaEditorServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        $package->name('filament-json-schema-editor')->hasViews();
    }

    public function bootingPackage(): void
    {
        FilamentAsset::register([
            Js::make('json-schema-editor', __DIR__ . '/../dist/filament-plugin.js')->defer(true),
        ]);
    }
}
