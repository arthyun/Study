const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//연결문
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var data = [];

//GET
app.get('/apiTest', (req, res) => {
    res.send({ datas : data });
});

//POST
app.post('/apiTest', (req, res) => {
    data.push({ id: req.body.id, name: req.body.name });
    // console.log(req.body);
    return res.send({ create : true });
});

//PATCH(id로 대상을 정하고 해당 id가 있는 객체의 name값을 수정한다.)
app.patch('/apiTest', (req, res) => {
    const bodyId = req.body.id;
    const bodyName = req.body.name;

    const result1 = data.map(el => {
        if(el.id == bodyId){
            el.name = bodyName;
        }
        return el;
    });
    data = result1;
    return res.send({ patch : true });
});

//DELETE(파라미터 방법)
// app.delete('/apiTest/:names', (req, res) => {
//     const names = req.params.names;
//     data = data.filter(el => el.name !== names);
//     return res.send({ delete: true });
// });

//DELETE(객체 넘긴 방법)
app.delete('/apiTest', (req, res) => {
    const bodys = { id: req.body.id, name: req.body.name };
    const result2 = data.filter(el => el.name !== bodys.name);
    data = result2;
    return res.send({ delete : true });
});

//출력
app.listen(5000, () => {
    console.log(`Allow port 5000`);
});