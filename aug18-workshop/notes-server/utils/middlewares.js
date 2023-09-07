const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("we just wrote this code");
  next();
};

const noHandlers = (request, response) => {
  response.status(404).send("no code available to hande this request");
};

module.exports = { requestLogger, noHandlers };
