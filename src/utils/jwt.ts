const jwt = require("jsonwebtoken");

const accessToken = process.env.JWT_TOKEN;

module.exports = {
  signAccessToken(payload: any) {
    return new Promise((resolve, reject) => {
      jwt.sign({ payload }, accessToken, (err: any, token: unknown) => {
        if (err) {
          reject("stop");
        }
        resolve(token);
      });
    });
  },
  verifyAccessToken(token: any) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, accessToken, (err: any, payload: unknown) => {
        if (err) {
          const message =
            err.name == "JsonWebToken" ? "Unauthorized" : err.message;
          return reject("error");
        }
        resolve(payload);
      });
    });
  },
};