// Abstraction layer for providing environment vars for web and native
let Config
if (process.env['WEB']) {
  Config = process.env
} else {
  Config = require('react-native-dotenv')
}
export default Config
