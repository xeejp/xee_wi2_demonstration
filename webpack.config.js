module.exports = {
  devtool: 'eval',
  entry: {
    host: ["babel-polyfill", "./host/index.js"],
    participant: ["babel-polyfill", "./participant/index.js"],
  },
  output: {
    path: "./",
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel"
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  resolve: {
    extensions: [
      "", ".js"
    ],
    modulesDirectories: [
      "node_modules", "./"
    ]
  },
  plugins: [
    function () {
      this.plugin('watch-run', (watching, callback) => {
        console.log('\033[36m' + 'Begin compile at ' + new Date() + ' \033[39m')
        callback()
      })
    }
  ]
};
