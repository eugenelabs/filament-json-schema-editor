<?php

namespace Eugenelabs\FilamentJsonSchemaEditor\Commands;

use Illuminate\Console\Command;

class FilamentJsonSchemaEditorCommand extends Command
{
    public $signature = 'filament-json-schema-editor';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
