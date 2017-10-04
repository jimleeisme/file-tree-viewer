require('babel-register')({
    presets: ['react', 'env']
});
const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const ServerRouter = require('./ServerRouter');
const template = require(('../public/dist/template'));

const app = express();

app.use(express.static(__dirname + '/../public/dist'));

app.get('/*', (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    ServerRouter(req.url, context)
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.send(template({
      app: app
    }))
    res.end()
  }
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port', port);
});