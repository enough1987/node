import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morganLogger from 'morgan';
import cors from 'cors';

import router from './api/router';
import consoleLogger from './middlewares/console-logger';
import consoleErrorLogger from './middlewares/console-error-logger';
import passport from './config/passport';

const app = express();

// logging
app.use(morganLogger('dev'));
app.use(consoleLogger);
app.use(consoleErrorLogger);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// passport
app.use(passport.initialize());


router(app);

module.exports = app;
