// module.exports = {
//   webpack: config => {
//     config.module.rules.push({
//       test: /\.md$/,
//       use: "raw-loader"
//     });

//     return config;
//   }
// };

const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
module.exports = withCSS(
  withSass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader"
      });
      return config;
    }
  })
);
