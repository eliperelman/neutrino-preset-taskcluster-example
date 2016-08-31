const preset = require('neutrino-preset-node');
const path = require('path');

const babel = {
  presets: [
    require.resolve('babel-preset-es2015')
  ],
  plugins: [
    require.resolve('babel-plugin-transform-runtime'),
    require.resolve('babel-plugin-transform-async-to-generator'),
    require.resolve('babel-plugin-transform-strict-mode')
  ]
};

preset.module.preLoaders[1].query = babel;
preset.module.loaders[1].query = babel;
preset.eslint.configFile = path.join(__dirname, 'eslint.js');

module.exports = preset;
