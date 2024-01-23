
/** @type {import('next').NextConfig} */
const stylexPlugin = require('@stylexjs/nextjs-plugin');
const webpack = require('webpack');
const babelrc = require('./.babelrc.js');
const { env } = require('process');
const path = require("path");
const plugins = babelrc.plugins;
const [_name, options] = plugins.find(
    (plugin) => Array.isArray(plugin) && plugin[0] === '@stylexjs/babel-plugin',
);
const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname;
const { NormalModule, Compilation } = webpack;
class mywebpack {
    apply(compiler) {
        console.log("Custom plugin");

        compiler.hooks.make.tap("MYPLUGIN", (compilation) => {
            // Apply loader to JS modules.
            NormalModule.getCompilationHooks(compilation).loader.tap(
                "MYPLUGIN",
                (loaderContext, module) => {

                    const relative = path.relative(__dirname + "/src", module.resource);
                    if (relative.startsWith('..'))
                        return;


                    if (
                        // JavaScript (and Flow) modules
                        /\.jsx?/.test(path.extname(module.resource)) ||
                        // TypeScript modules
                        /\.tsx?/.test(path.extname(module.resource))
                    ) {
                        console.log(module.resource);

                        // We use .push() here instead of .unshift()
                        // Webpack usually runs loaders in reverse order and we want to ideally run
                        // our loader before anything else.
                        //module.loaders.push({
                        //    loader: "babel-loader",
                        //    options: {
                        //        babelrc: false,
                        //        presets: ['next/babel'],
                        //        plugins: [["./babel-stylex-breakpoints", { resource: module.resource }]],
                        //    }
                        //});

                        module.loaders.push({
                            loader: path.resolve("./loaders/breakpoint-loader.js"),
                            options: {
                                resource1: module.resource
                            }

                        });


                        // console.log(module.loaders.map(x => x.loader));
                    }


                },
            );
        });
    }
}

function applylast(nextConfig) {


    return {
        ...nextConfig,
        webpack(config, options) {

            if (typeof nextConfig.webpack === 'function') {
                config = nextConfig.webpack(config, options);
            }

            const { buildId, dev, isServer } = options;

            if (isServer) {
                console.log("Running WebPack");

            }

            config.plugins.push(new mywebpack());


            const preprocessLoader = {
                test: /\.json/,
                use: [
                    {
                        loader: path.resolve("./loaders/strip-json-comments-loader.js"),
                    },
                ],
            };
            config.module.rules.push(preprocessLoader);

            //const preprocessLoader = {
            //    test: /\.tsx$/,
            //    use: [
            //        {
            //            loader: 'webpack-preprocessor-loader',
            //            options: {
            //                debug: true,
            //                params: {
            //                    EXPORTS_FOR_BUILD: env.NODE_ENV === "production" ? 'SSG' : 'SSR', // or "SSG", to be set via environment variables.
            //                },
            //                verbose: true
            //            },
            //        },
            //    ],
            //};
            //config.module.rules.push(preprocessLoader);

            return config;
        }
    }
}

module.exports = applylast(stylexPlugin({
    rootDir: rootDir,
    useCSSLayers: false,
    babelConfig: {
        // presets: ['next/babel'],
        plugins: [

            //  ["./babel-stylex-breakpoints"],
            //[
            //    '@stylexjs/babel-plugin',
            //    {
            //        dev: process.env.NODE_ENV === 'development',
            //        genConditionalClasses: true,
            //        treeshakeCompensation: true,
            //        unstable_moduleResolution: {
            //            type: 'commonJS',
            //            rootDir: path.join(__dirname, '../..'),
            //        },
            //    },
            //],
        ],
        babelrc: false
    }
})({
    output: 'export',
    transpilePackages: ['@stylexjs/open-props'],
    staticPageGenerationTimeout: 300,
    trailingSlash: true,
    reactStrictMode: false,
     
    experimental: {

    },
    env: {
 
    },

}));




