/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// eslint-disable-next-line
const path = require('path')

module.exports = {
  projectRoot: path.resolve(__dirname, '.'),
  watchFolders: [path.resolve(__dirname + '../../../node_modules')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
}
