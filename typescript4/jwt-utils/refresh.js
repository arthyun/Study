// refresh.js
const { sign, verify, refreshVerify } = require('./jwt-util');
const jwt = require('jsonwebtoken');

const refresh = async (req, res) => {
  console.log(req.cookies.refreshToken); // refreshToken 확인 - httpOnly가 설정된 쿠키는 클라이언트에서 읽을 수 없으니 서버에서 처리

  // accessToken과 refreshToken의 존재 유무를 체크합니다.
  if (req.headers.authorization && req.headers.refresh) {
    const authToken = req.headers.authorization.split('Bearer ')[1];
    const refreshToken = req.headers.refresh; // req.cookies.refreshToken로 대체가능

    // accessToken 검증 -> expired여야 함.
    const authResult = verify(authToken);
    // accessToken 디코딩하여 user의 정보를 가져옵니다.
    const decoded = jwt.decode(authToken);
    console.log(decoded);
    // 디코딩 결과가 없으면 권한이 없음을 응답.
    if (decoded === null) {
      res.status(401).send({
        ok: false,
        message: 'No authorized!'
      });
    }

    /* accessToken의 decoding 된 값에서
      유저의 id를 가져와 refreshToken을 검증합니다. */
    const refreshResult = refreshVerify(refreshToken, decoded.id);

    // 재발급을 위해서는 accessToken이 만료되어 있어야합니다.
    if (authResult.ok === false && authResult.message === 'jwt expired') {
      // 1. accessToken이 만료되고, refreshToken도 만료 된 경우 => 새로 로그인해야합니다.
      if (refreshResult.ok === false) {
        res.status(401).send({
          ok: false,
          message: 'No authorized!'
        });
      } else {
        // 2. accessToken이 만료되고, refreshToken은 만료되지 않은 경우 => 새로운 accessToken을 발급
        const user = {
          id: decoded.id,
          password: decoded.password
        };
        const newAccessToken = sign(user);

        res.status(200).send({
          // 새로 발급한 accessToken과 원래 있던 refreshToken 모두 클라이언트에게 반환합니다.
          ok: true,
          data: {
            accessToken: newAccessToken,
            refreshToken
          }
        });
      }
    } else {
      // 3. accessToken이 만료되지 않은경우 => refresh 할 필요가 없습니다.
      res.status(400).send({
        ok: false,
        message: 'AccessToken is not expired!'
      });
    }
  } else {
    // accessToken 또는 refreshToken이 헤더에 없는 경우
    res.status(400).send({
      ok: false,
      message: 'AccessToken and refreshToken are need for refresh!'
    });
  }
};

module.exports = refresh;
