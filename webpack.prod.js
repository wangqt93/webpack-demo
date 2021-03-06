const MiniCssExtractPlugin = require('mini-css-extract-plugin')   //用于抽取css成单独文件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')  //用于压缩css
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const cssnano =  require('cssnano')
const path = require('path')
console.log('sdf')
module.exports = {
    entry: {   //打包入口的文件位置
        index: './src/index.js',
        hello: './src/hello.js'
    },
    output: {  //打包完成后，文件信息
        path: path.join(__dirname,'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    module: {   //配置loaders
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    // 'style-loader', //先解析style-loader ,单独抽取css成文件，需要使用 MiniCssExtractPlugin
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /.less$/,
                use: [
                    // 'style-loader', //先解析style-loader
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {   //图片解析
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ]
            },
            {  //字体解析
                test: /\.(woff | woff2 | eot | ttf | oft)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ]
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 10240
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({  //提取css成文件
            filename: '[name]_[contenthash:8].css'
        }),
        new OptimizeCssAssetsWebpackPlugin({  //压缩css
            assetNameRegExp: /\.css$/g
        }),
        new HtmlWebpackPlugin({ //压缩html
            template: path.join(__dirname,'src/hello.html'),
            filename: 'hello.html',
            chunks: ['hello'],
            inject: true,
            minify: {
                html5:true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments:false
            }
        }),
        new HtmlWebpackPlugin({ 
            template: path.join(__dirname,'src/index.html'),
            filename: 'index.html',
            chunks: ['index'],
            inject: true,
            minify: {
                html5:true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments:false
            }
        }),
        new CleanWebpackPlugin(),  //自动清理output打包目录
    ],
    mode: 'production',
}