/*
 * @Author: 李凡
 * @Email: 535536456@qq.com
 * @Date: 2020-07-21 13:14:03
 * @LastEditors: 李凡
 * @LastEditTime: 2020-07-21 13:14:22
 * @Description:
 */

module.exports = {
  entry: {
    main: "./main.js",
  },
  mode: "development",
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                { pragma: "ToyReact.createElement" },
              ],
            ],
          },
        },
      },
    ],
  },
};
