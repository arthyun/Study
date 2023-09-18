const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost", // 데이터베이스 주소
  port: "3306", // 데이터베이스 포트
  user: "root", // 로그인 계정
  password: "3316", // 비밀번호
  database: "test1", // 엑세스할 데이터베이스
});

connection.connect();

module.exports = connection;
