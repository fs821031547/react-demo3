const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin") //生成html
const autoprefixer = require("autoprefixer") //css自动添加浏览器后缀
// const ExtractTextPlugin = require("extract-text-webpack-plugin") //css单独打包
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js",
    chunkFilename: "[name].[chunkhash:5].min.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "src"),
        options: {
          plugins: [["import", [{ style: "css", libraryName: "antd-mobile" }]]], //按需加载antd
          presets: ["es2015", "react", "stage-0"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: "style-loader" },
          {
            // 开启了CSS Module功能，避免类名冲突问题
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [autoprefixer]
              }
            }
          }
        ]
      },
      // use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]","postcss-loader"]
      {
        test: /\.(jpe?g|png|gif|mp4|webm|otf|webp)$/,
        use: ["url-loader?limit=10240"]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias:{
      'comp':path.resolve(__dirname,"src/components/"),
      'route':path.resolve(__dirname,"./src/route/"),
      'reduce':path.resolve(__dirname,"./src/reduce/"),
      'style':path.resolve(__dirname,"./src/style/"),
      'util':path.resolve(__dirname,"./src/util/"),
      'json':path.resolve(__dirname,"./src/json/"),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      //根据模板插入css/js等生成最终HTML
      template: "./index.html", //html模板路径
      hash: false
    }),
    new CopyWebpackPlugin([
      { from: "src/static/login.html", to: "login.html" }
    ])
  ],
  devServer: {
    compress: true, // enable gzip compression
    open: true,
    port: 7070,
    inline: true,
    contentBase: path.join(__dirname, "src/static"),
    proxy: {
      "/sys": {
        target: "http://dev.op110.com.cn/",
        pathRewrite: {
          "^/sys": "/sys"
        },
        // ignorePath: true,
        changeOrigin: true,
        secure: false,
        logLevel: "debug"
      }
    }
    // ...
  }
}
