// refresh token을 저장할 redis 세팅
// homebrew로 redis 설치 후 redis-server 로 실행 후 작동시켜야함 !
const redis = require('redis');
require('dotenv').config();
const redisPort = process.env.REDIS_PORT;

const redisClient = redis.createClient(redisPort);
// const redisClient = redis.createClient({ legacyMode: true });

redisClient.on('connect', () => {
  console.info(`Redis 서버에 연결되었습니다. 포트는 ${redisPort}입니다.`);
});

redisClient.on('error', (err) => {
  console.error('Redis 에러발생 ', err);
});

redisClient.connect();

module.exports = redisClient;
