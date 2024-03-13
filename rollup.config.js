import path from 'node:path';
import deepmerge from 'deepmerge';
import { defineConfig } from 'rollup';
import rollupPluginBabel from '@rollup/plugin-babel';
import rollupPluginCommonJS from '@rollup/plugin-commonjs';
import rollupPluginTerser from '@rollup/plugin-terser';
import rollupPluginTypeScript from '@rollup/plugin-typescript';

function configureMain() {
    const baseConfig = () => {
        return defineConfig({
            input: path.resolve('./src/index.ts'),

            plugins: [
                rollupPluginBabel({
                    babelHelpers: 'bundled',
                    extensions: ['.js', '.ts'],
                    exclude: /[\\/]node_modules[\\/]/
                }),

                rollupPluginCommonJS(),

                rollupPluginTypeScript({
                    tsconfig: path.resolve('./tsconfig.json')
                }),

                rollupPluginTerser()
            ]
        });
    };

    return [
        // dist/index.cjs.js
        deepmerge(
            baseConfig(),
            defineConfig({
                output: {
                    format: 'cjs',
                    dir: path.resolve('./dist'),
                    exports: 'named',
                    preserveModules: true,
                    entryFileNames: '[name].cjs.js'
                }
            })
        ),
        // dist/index.esm.js
        deepmerge(
            baseConfig(),
            defineConfig({
                output: {
                    format: 'esm',
                    dir: path.resolve('./dist'),
                    exports: undefined,
                    preserveModules: true,
                    entryFileNames: '[name].esm.js'
                }
            })
        )
    ];
}

export default [...configureMain()];
