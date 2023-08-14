const { info } = require("./logger");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("./config");

const noHandlers = (request, response) => {
  response.status(404).send("no code available to hande this request");
};

const authMiddleware = (request, response, next) => {
  const { userId } = request.body;
  try {
    if (!request.headers.authorization) {
      response.status(401).json({ error: "missing token" });
    }
    const token = request.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, SECRET_KEY);
    if (!decodedToken.id) {
      response.status(401).json({ error: "invalid token" });
    }
    if (userId !== decodedToken.id) {
      response.status(401).json({ error: "token mismatch" });
    }
    next();
  } catch (err) {
    next(err);
  }
};

const errorHandler = (error, request, response, next) => {
  info(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "JsonWebTokenError") {
    return response.status(400).json({ error: error.message });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  } else if (error.name === "TokenExpiredError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

const requestLogger = (request, response, next) => {
  info("Method:", request.method);
  info("Path:  ", request.path);
  info("Body:  ", request.body);
  info("we just wrote this code");
  next();
};

module.exports = {
  errorHandler,
  noHandlers,
  requestLogger,
  authMiddleware,
};
