require('babel-register')({
  presets: ["react", "es2015"]
});
require('babel-polyfill')

global.document = require('jsdom').jsdom(`
  <head>
    <meta charset="utf-8">
    <title>NimbleNetwork</title>
  </head>
  <body>
    <div id="application"></div>
    <h1>Hello</h1>
    <script src="main.bundle.js"></script>
  </body>
`

)

global.window = document.defaultView
global.navigator = window.navigator
