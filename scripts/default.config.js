export default {
  output: 'guide.xml',
  days: 2,
  delay: 0,
  maxConnections: 1,
  curl: false,
  gzip: false,
  json: false,
  debug: false,
  request: {
    maxContentLength: 5242880,
    timeout: 30000,
    withCredentials: true,
    jar: null
  }
}
