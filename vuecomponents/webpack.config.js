const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
        },
        {
            test: /\.css$/,
            use: [ 'vue-style-loader', 'css-loader' ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                    imit: 8192, 
                    name:'[hash:8].[ext]'
                }
              }
            ]
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
        }
      ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: './src/public/index.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new CopyPlugin([
      {
        from:path.resolve(__dirname,'src/public'),
        to:path.resolve(__dirname,'dist'),
        ignore:['index.html']
      }
    ])
  ],
  // mode:'delvelopment',
  devServer: {
    port: 8080,
    open:true,
    quiet:true
  },
  devtool:'cheap-module-eval-source-map',
  resolve:{
    extensions: [".js", ".json",".vue"],
    alias:{
      "@":path.resolve(__dirname,'src')
    }
}
};