const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './script.js', // （assets/js/script.js の場合は適宜そのパス）
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: {
        target: 'http://wordpress', // プロキシ先
        reqHeaders: function () {
          return {
            // WordPressに対して「自分は localhost:8081 からアクセスしているよ」と偽装して転送を防ぐ
            host: 'localhost:8082',
          };
        },
      },
      host: '0.0.0.0',
      open: false,
      files: ['**/*.php', '*.css', '*.js'],
      reloadDelay: 100,
    }),
  ],
};
