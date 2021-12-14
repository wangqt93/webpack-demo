const path = require('path')
// const webpack = require('webpack')

module.exports = {
    entry: {   //打包入口的文件位置
        index: './src/index.js',
        hello: './src/hello.js'
    },
    output: {  //打包完成后，文件信息
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
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
                    'style-loader', //先解析style-loader
                    'css-loader',
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader', //先解析style-loader
                    'css-loader',
                    'less-loader'
                ]
            },
            // {   //图片解析
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // },
            {  //字体解析
                test: /\.(woff | woff2 | eot | ttf | oft)$/,
                use: 'file-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240
                    }
                }]
            }
        ]
    },
    mode: 'production',
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()  //热更新
    // ],
    // devServer: {
    //     static: './dist'
    // },
    // performance: {
    //     "maxEntrypointSize": 10000000,
    //     "maxAssetSize": 30000000
    // }
}