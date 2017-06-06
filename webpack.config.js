var path = require('path')

module.exports = {
  entry: './ws_client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
