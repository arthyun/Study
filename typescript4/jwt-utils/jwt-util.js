// jwt 메소드 정리
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const redisClient = require('./redis');
require('dotenv').config(); // 경로상의 env 파일을 읽기 위함
const secret = process.env.JWT_SECRET_KEY; // secret 키 생성

module.exports = {
  // 초기 발급
  sign: (user) => {
    // accessToken 발급
    const payload = {
      // accessToken에 들어갈 payload
      id: user.id,
      password: user.password
    };

    return jwt.sign(payload, secret, {
      // secret으로 sign하여 발급하고 return
      algorithm: 'HS256', // 암호화 알고리즘
      expiresIn: '1h' // 유효기간
    });
  },
  // 확인
  verify: (token) => {
    // accessToken 검증
    let decoded = null;
    try {
      decoded = jwt.verify(token, secret);
      return {
        ok: true,
        id: decoded.id,
        password: decoded.password
      };
    } catch (err) {
      return {
        ok: false,
        message: err.message
      };
    }
  },
  // 재발급
  refresh: () => {
    // refreshToken 발급
    return jwt.sign({}, secret, {
      // refreshToken은 payload 없이 발급
      algorithm: 'HS256',
      expiresIn: '14d'
    });
  },
  // 재발급 검증
  refreshVerify: async (token, userId) => {
    // refreshToken 검증
    /* redis 모듈은 기본적으로 promise를 반환하지 않으므로, promisify를 이용하여 promise를 반환하게 해줍니다. */
    const getAsync = promisify(redisClient.get).bind(redisClient);

    try {
      const data = await getAsync(userId); // refreshToken 가져오기
      if (token === data) {
        try {
          jwt.verify(token, secret);
          return true;
        } catch (err) {
          return false;
        }
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
};
