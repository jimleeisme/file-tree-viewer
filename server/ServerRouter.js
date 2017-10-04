import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../client/src/components/App';

const ServerRouter = (location, context) => (
  <StaticRouter
    location={location}
    context={context}
  >
    <App/>
  </StaticRouter>
)

module.exports = ServerRouter;