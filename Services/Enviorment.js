// Abstraction layer for providing environment vars for web and native
let Config
if (process.env['WEB']) {
  Config = process.env
} else {
  Config = require('react-native-config').default
}
export default Config
