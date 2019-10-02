const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'wikitooltip.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

module.exports = config;