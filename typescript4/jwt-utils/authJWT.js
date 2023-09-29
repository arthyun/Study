// 이미 토큰이 발급된 후 검증용
const { verify } = require("./jwt-util");

const authJWT = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split("Bearer ")[1]; // header에서 accessToken을 가져옵니다.
    const result = verify(token); // token을 검증합니다.
    // console.log("요청값: ", req);
    console.log("검증 결과: ", result);

    if (result.ok === true) {
      // token이 검증되었으면 req에 값을 세팅하고, 다음 콜백함수로 갑니다.
      req.ok = result.ok;
      req.id = result.id;
      req.password = result.password;
      return next();
    } else {
      // 검증에 실패하거나 토큰이 만료되었다면 클라이언트에게 메세지를 담아서 응답합니다.
      req.ok = result.ok;
      req.message = result.message;
      return next();
    }
  }
};

module.exports = authJWT;
