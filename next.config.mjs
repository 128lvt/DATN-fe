/** @type {import('next').NextConfig} */
import webpack from "webpack";
const nextConfig = {
  webpack: (config) => {
    // Cấu hình Webpack để cung cấp jQuery
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery", // Cung cấp jQuery cho toàn cục
      })
    );
    return config;
  },
};

export default nextConfig;
