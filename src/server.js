
import path                                             from 'path';
import express                                          from 'express';
import http                                             from 'http';
import morgan                                           from 'morgan';
import moment                                           from 'moment';
import chalk                                            from 'chalk';

import React                                            from 'react';
import ReactDOM                                         from 'react-dom/server';
import HTML                                             from './layouts/html';

import {host, port, webpackHost, webpackPort}           from '../config/env';

const app = express();
const server = new http.Server(app);

app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('*', (req, res) => {
  const isDev = (process.env.NODE_ENV === 'development');

  const bundle = {
    env: process.env.NODE_ENV,
    core: (isDev ? `http://${webpackHost}:${webpackPort}/build/main.bundle.js` : '/build/main.bundle.min.js'),
    commons: '/build/commons.bundle.js',
    stylesheet:  '/build/main.bundle.css'
  };

  const html = ReactDOM.renderToStaticMarkup(<HTML bundle={bundle}/>);

  res.status(200).send(`<!doctype html>${html}`);
});

console.info(chalk.cyan(`Starting development server at ${moment().format('llll')}`));
server.listen(port, (err) => {
  if(err) {
    console.error(chalk.red(err));
  }
  else {
    console.info(chalk.green(`Development server listening on ${host}:${port} since ${moment().format('llll')}!`));
  }
});
