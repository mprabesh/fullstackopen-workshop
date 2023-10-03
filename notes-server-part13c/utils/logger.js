/* eslint-disable no-console */
const info = (...params) => {
  if (process.env.NODE_ENV !== "test") {
    console.log(...params);
  }
};

module.exports = {
  info,
};
