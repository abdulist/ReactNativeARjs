const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Customize the config before returning it.
  config.module.rules.push({
    test: /\.html$/,
    use: ['file-loader'],
  });

  return config;
};
