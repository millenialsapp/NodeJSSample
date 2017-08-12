const restify = require('restify'),
  registerUserRoutes = require('./routes/userRoutes'),
  port = process.env.PORT || 3000;

const server = restify.createServer({
    name: 'YaassAPI'
});

//dev time only! - THis needs to be removed for Production
// This is for cross origin api call - default to allow all URLs
// In prod - CORS to be configured to allow only certain URL
server.use(restify.CORS());

registerUserRoutes(server, require('./controllers/userController'));

server.listen(port, () => {
    console.info('Server is running on port ' + port);
});
