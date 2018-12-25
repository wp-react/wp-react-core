// Abstraction layer for providing environment vars for web and native
let Config
if (process.env['WEB'] || process.env['REACT_NATIVE_APP_ROOT']) {
  Config = process.env
} else {
  Config = Expo.Constants.manifest.extra
}
export default Config
