var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');

// Route import
var usersRouter = require('./routes/api/users/users.routes');
var usersRoleRouter = require('./routes/api/users/usersRole.routes');
var projectRouter = require('./routes/api/projects/project.routes');
var taskStatusRouter = require('./routes/api/projects/task-statuses.routes');
var taskRouter = require('./routes/api/projects/task.routes');

var sequelize = require('./src/database/Sequelize.database.js');

var corsMiddleware = require('./src/middlewares/cors.middleware').corsMiddleware;
var successResponseMiddleware = require('./src/middlewares/response.middleware').successResponseMiddleware;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('*', corsMiddleware);
app.use('/', indexRouter);
app.use('/user-api/', usersRouter, successResponseMiddleware);
app.use('/user-role-api/', usersRoleRouter, successResponseMiddleware);
app.use('/project-api/', projectRouter, successResponseMiddleware);
app.use('/task-status-api/', taskStatusRouter, successResponseMiddleware);
app.use('/task-api/', taskRouter, successResponseMiddleware);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
