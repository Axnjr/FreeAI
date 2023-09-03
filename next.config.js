/** @type {import('next').NextConfig} */
const nextConfig = {
}
module.exports = nextConfig
/**
 *  module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
    },
    webpack:function(config, options) {
        console.log("WEBPACK CONFIG :",options.webpack.version); // Should be webpack v5 now
        config.experiments = {};
        return config;
    },
 */