const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//json형태로 사용
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(__dirname);
console.log(__filename);

//데이터 가져오기
app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: 'http://placeimg.com/64/64/any',
            name: '홍길동',
            birthday: '961222',
            gender: '200',
            job: '대학생'
        },
        {
            id: 2,
            image: 'http://placeimg.com/64/64/any',
            name: '김김김',
            birthday: '931222',
            gender: '200',
            job: '프로그래머'
        },
        {
            id: 3,
            image: 'http://placeimg.com/64/64/any',
            name: '손손손',
            birthday: '981222',
            gender: '200',
            job: '의사'
        }
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));