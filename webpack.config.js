const merge = require("webpack-merge");
const expoConfig = require("@expo/webpack-config");

module.exports = (env, argv) => {
  return merge(expoConfig(env, argv), {
    /* your extended config */
    resolve: {
      extensions: [".ts", ".tsx"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "babel-loader"
        }
      ]
    }
  });
};
