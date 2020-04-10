import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morganLogger from 'morgan';
import consoleLogger from './middlewares/console-logger';
import consoleErrorLogger from './middlewares/console-error-logger';
import router from './api/router';
import authenticateJWT from './middlewares/auth';

const app = express();

app.use(authenticateJWT);
app.use(morganLogger('dev'));
app.use(consoleLogger);
app.use(consoleErrorLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

router(app);

module.exports = app;
