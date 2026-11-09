const path = require('path');
const rspack = require('@rspack/core');

module.exports = {
  entry: {
    main: './src/index.tsx', // .jsx から .tsx に変更
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // ビルド前に dist ディレクトリをクリーンアップ
  },
  resolve: {
    // import時に拡張子を省略できるように追加
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        // 対象を .ts, .tsx に変更
        test: /\.(ts|tsx|js|jsx)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript', // ここをtypescriptに変更
                  tsx: true, // tsxを有効化
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                  },
                },
              },
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './public/index.html', // ひな形を指定
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
  },
};
