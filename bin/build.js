const esbuild = require('esbuild');
const shouldWatch = process.argv.includes('--watch');

esbuild.build({
    define: {
        'process.env.NODE_ENV': shouldWatch ? `'production'` : `'development'`,
    },
    entryPoints: [
        'resources/js/index.js'
    ],
    outfile: 'dist/filament-plugin.js',
    bundle: true,
    watch: shouldWatch,
}).catch(() => process.exit(1));