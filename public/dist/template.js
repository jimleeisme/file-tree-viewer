const template = ({ app }) => (`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="/styles.css">
    <title>File Tree Viewer</title>
  </head>
  <body>
    <div id="app">${app}</div>
    <script src="/bundle.js" type="text/javascript"></script>
  </body>
  </html>
`)

module.exports = template;