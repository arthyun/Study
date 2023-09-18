const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const db = require("./database");

//json형태로 사용
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//DB 접근
app.get("/api/database", (req, res) => {
  db.query("select * from memos", function (error, results, fields) {
    if (error) {
      console.error(error);
    }
    console.log("The db is: ", results);
    res.json(results);
  });

  // return connection.end();
});

app.get("/api/user", (req, res) => {
  res.json([
    {
      id: 1,
      image: "http://placeimg.com/64/64/any",
      name: "홍길동",
      birthday: "961222",
      gender: "200",
      job: "대학생",
    },
    {
      id: 2,
      image: "http://placeimg.com/64/64/any",
      name: "김김김",
      birthday: "931222",
      gender: "200",
      job: "프로그래머",
    },
    {
      id: 3,
      image: "http://placeimg.com/64/64/any",
      name: "손손손",
      birthday: "981222",
      gender: "200",
      job: "의사",
    },
  ]);
});

app.post("/api/login", (req, res) => {
  const { id, password } = req.body;

  if (id === "son" && password === "3316") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(200).json({ message: "Login failed" });
  }
  // res.status(200).json({
  //     status: 'success',
  //     data: []
  // });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
