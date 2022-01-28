// /**
//  * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
//  * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
//  */

// 'use strict';

// /* eslint-env node */

// const path = require( 'path' );
// const webpack = require( 'webpack' );
// const { bundler, styles } = require( '@ckeditor/ckeditor5-dev-utils' );
// const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
// const TerserPlugin = require( 'terser-webpack-plugin' );

// module.exports = {
// 	node: {
// 		fs: 'empty',
// 		child_process: 'empty'
// 		// fs: 'empty', // if unable to resolve 'fs'
// 	},
// 	devtool: 'source-map',
// 	performance: { hints: false },
// 	entry: path.resolve( __dirname, 'src', 'ckeditor.js' ),
// 	output: {
// 		// The name under which the editor will be exported.
// 		library: 'InlineEditor',

// 		path: path.resolve( __dirname, 'src' ),
// 		filename: 'ckeditor.js',
// 		libraryTarget: 'umd',
// 		libraryExport: 'default'
// 	},
// 	optimization: {
// 		minimizer: [
// 			new TerserPlugin( {
// 				sourceMap: true,
// 				terserOptions: {
// 					output: {
// 						// Preserve CKEditor 5 license comments.
// 						comments: /^!/
// 					}
// 				},
// 				extractComments: false
// 			} )
// 		]
// 	},
// 	plugins: [
// 		new CKEditorWebpackPlugin( {
// 			// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
// 			// When changing the built-in language, remember to also change it in the editor's configuration (src/ckeditor.js).
// 			language: 'en',
// 			additionalLanguages: 'all',
// 			allowMultipleJSOutputs: true
// 		} ),
// 		new webpack.BannerPlugin( {
// 			banner: bundler.getLicenseBanner(),
// 			raw: true
// 		} )
// 	],

// 	module: {
// 		rules: [
// 			{
// 				test: /\.svg$/,
// 				use: [ 'raw-loader' ]
// 			},
// 			{
// 				test: /\.css$/,
// 				use: [
// 					{
// 						loader: 'style-loader',
// 						options: {
// 							injectType: 'singletonStyleTag',
// 							attributes: {
// 								'data-cke': true
// 							}
// 						}
// 					},
// 					{
// 						loader: 'postcss-loader',
// 						options: styles.getPostCssConfig( {
// 							themeImporter: {
// 								themePath: require.resolve(
// 									'@ckeditor/ckeditor5-theme-lark'
// 								)
// 							},
// 							minify: true
// 						} )
// 					}
// 				]
// 			}
// 		]
// 	}
// };

// webpack.config.js

const webpack = require( 'webpack' );
const path = require( 'path' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );

module.exports = {
    entry: path.resolve( __dirname, 'app.js' ),

    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: [ 'raw-loader' ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [ '@babel/react' ]
                }
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                            attributes: {
                                'data-cke': true
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: styles.getPostCssConfig( {
                            themeImporter: {
                                themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                            },
                            minify: true
                        } )
                    }
                ]
            }
        ]
    },

    // Useful for debugging.
    devtool: 'source-map',

    // By default webpack logs warnings if the bundle is bigger than 200kb.
    performance: { hints: false }
};
