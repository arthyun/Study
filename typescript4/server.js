// 서버 세팅
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("./jwt-utils/jwt-util");
const redisClient = require("./jwt-utils/redis");
const authJWT = require("./jwt-utils/authJWT");
// const cors = require("cors"); // proxy 설정을 했기에 불필요
// const db = require('./database');

/* express 의존 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(cors()); // proxy 설정을 했기에 불필요

/* DB 접근 */
// app.get("/api/database", (req, res) => {
//   db.query("select * from memos", function (error, results, fields) {
//     if (error) {
//       console.error(error);
//     }
//     console.log(results);
//     res.json(results);
//   });

//   // return connection.end();
// });

// 로그인 API
app.post("/api/login", async (req, res) => {
  const { id, password } = req.body;
  const userId = id;
  const userPass = password;
  const user = {
    id: userId,
    password: userPass,
  };
  if (user.id === "son" && user.password === "3316") {
    /* DB 쿼리문 */
    // db.query(`select * from member where userName=? and pass=?`, [userId, userPass], function (error, results, fields) {
    //   if (error) {
    //     console.error(error);
    //   }
    //   // console.log("req.cookies:", req.cookies);
    //   // res.cookie("임시", JSON.stringify(results), { maxAge: 900000, httpOnly: true });
    //   // console.log(results);
    //   res.status(200).json(results);
    // });

    /* JWT 인증 방법 */
    // access token과 refreshToken을 발급합니다.
    const accessToken = jwt.sign(user);
    const refreshToken = jwt.refresh();
    // refreshToken은 쿠키에 저장 -> httpOnly를 설정하면 쿠키 확인 불가
    // res.cookie("refreshToken", refreshToken, { maxAge: 900000, httpOnly: true });
    res.cookie("refreshToken", refreshToken, { maxAge: 900000 });

    // 발급한 refresh token을 redis에 key를 user의 id로 하여 저장합니다.
    await redisClient.set(user.id, refreshToken);
    return res.status(200).json({
      // client에게 토큰 모두를 반환합니다.
      status: "success",
      data: {
        accessToken,
        refreshToken,
      },
    });
  } else {
    console.log("로그인에 실패했습니다.");
    return res.status(401).json({ status: "failed", message: "로그인에 실패했습니다." });
  }
});

// 토큰 상태 확인
app.get("/api/tokenVerify", authJWT, (req, res) => {
  // console.log(req.id);
  // console.log(req.password);

  // 토큰값이 정상인지 아닌지
  if (req.ok) {
    res.json({
      message: "토큰이 정상입니다.",
      data: {
        ok: req.ok,
        id: req.id,
        // password: req.password,
      },
    });
  } else {
    res.json({
      message: "토큰이 만료되었습니다.",
      data: {
        ok: req.ok,
      },
    });
  }
});

// user list API
app.get("/api/user", (req, res) => {
  res.json([
    {
      id: 1,
      name: "홍길동",
      birthday: "961222",
      gender: "200",
      job: "대학생",
    },
    {
      id: 2,
      name: "김김김",
      birthday: "931222",
      gender: "200",
      job: "프로그래머",
    },
    {
      id: 3,
      name: "손손손",
      birthday: "981222",
      gender: "200",
      job: "의사",
    },
  ]);
});

app.listen(port, () => console.log(`Express 서버에 연결되었습니다. 포트는 ${port}입니다.`));
