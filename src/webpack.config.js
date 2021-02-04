
const  path  =  require('path');
const  webpack  =  require ( 'webpack' );
const  HtmlWebPackPlugin  =  require ( 'html-webpack-plugin' );
const  MiniCssExtractPlugin  =  require ( 'mini-css-extract-plugin' );

module.exports = {
    entry: './src/index.js' ,
    output : {
      path: path.resolve ( __dirname , 'dist' ),
      filename: './dist/main.js',
    } ,
    devServer : {
      historyApiFallback : true ,
      contentBase : path.resolve ( __dirname ,  '/ dist' ) ,
        } ,
      module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/ ,
          use: {
            loader: 'babel-loader' ,
          } ,
        } ,
        {
          test: /\.html$/ ,
          use: [
            {
              loader: 'html-loader' ,
            } ,
          ] ,
        } ,
        {
          test: /\.css$/ ,
          use: [
            MiniCssExtractPlugin.loader,  'css-loader',
          ] ,
        } ,
      ] ,
    } ,

plugins:[
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    }),
    new  MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename : '[id].css',
      }) 
    ] ,
  } ;
