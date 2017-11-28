const path = require("path");
const ROOT_PATH = path.resolve(__dirname);
const HtmlWebpackPlugin = require("html-webpack-plugin"); //生成html

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: path.resolve(ROOT_PATH, "src"),
        options: {
          presets: ["react"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]"]
      },
      {
        test: /\.(jpe?g|png|gif|mp4|webm|otf|webp)$/,
        use: ['url-loader?limit=10240']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      //根据模板插入css/js等生成最终HTML
      template: "./index.html", //html模板路径
      hash: false
    })
  ]
};
