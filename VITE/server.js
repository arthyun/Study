const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//설치파일 연결문
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//DB 연결
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB 연결 성공!');
}).catch((error) => {
    console.log('Error connecting to database:', error);
});

//DB 지정
// const db = mongoose.connection;

//DB 설계
const UserSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    gender: String,
});
const UserModel = mongoose.model('User', UserSchema);
const newUser = new UserModel({
    name: '현호', 
    phone: '010-7212-8581', 
    email: 'heun3316@naver.com',
    gender: 'male'
});

//DB에 객체 저장(save),(req.body를 대입하여 저장하는 방법 구현할 것!)
// newUser.save()
// .then(() => {
//     console.log('DB에 저장 성공!');
// })
// .catch((error) => {
//     console.log('Error saving object:', error);
// });

//DB 불러오기(find, findById)
// var data1 = []; 
// UserModel.find()
// .then(res => {
//     // data1.push(res[0]);
//     console.log(res);
// })
// .catch(err => console.log(err));

//DB 삭제하기(deleteOne, deleteMany),(req.params로 전달 받아서 삭제 가능)
// UserModel.deleteOne({ name: '현호2' })
// .then(res => {
//     console.log(res);
// })
// .catch(err => console.log(err));

//DB 수정하기(updateOne, updateMany)
// UserModel.updateOne({ name: '현호' }, { name: '바보똥개' })
// .then(res => {
//     console.log(res);
// })
// .catch(err => console.log(err));

// UserModel.find()
// .then(res => {
//     const newData = res.map(el => el);
//     console.log(newData);
// })
// .catch(err => console.log(err));

//CRUD 연산 수행하기
app.get('/', (req, res) => {
    UserModel.find()
    .then(data => {
        const newData = data.map(el => el);
        const result = JSON.stringify(newData);
        // res.setHeader('Content-Type', 'application/json');
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    });
});

//포트 연결 확인
app.listen(5000, () => {
    console.log('포트에 연결됐당께~');
})

// //ejs test
// var data = [];

// //GET
// app.get('/apiTest', (req, res) => {
//     res.send({ datas : data });
// });

// //POST
// app.post('/apiTest', (req, res) => {
//     data.push({ id: req.body.id, name: req.body.name });
//     // console.log(req.body);
//     return res.send({ create : true });
// });

// //PATCH(id로 대상을 정하고 해당 id가 있는 객체의 name값을 수정한다.)
// app.patch('/apiTest', (req, res) => {
//     const bodyId = req.body.id;
//     const bodyName = req.body.name;

//     const result1 = data.map(el => {
//         if(el.id == bodyId){
//             el.name = bodyName;
//         }
//         return el;
//     });
//     data = result1;
//     return res.send({ patch : true });
// });

// //DELETE(파라미터 방법)
// // app.delete('/apiTest/:names', (req, res) => {
// //     const names = req.params.names;
// //     data = data.filter(el => el.name !== names);
// //     return res.send({ delete: true });
// // });

// //DELETE(객체 넘긴 방법)
// app.delete('/apiTest', (req, res) => {
//     const bodys = { id: req.body.id, name: req.body.name };
//     const result2 = data.filter(el => el.name !== bodys.name);
//     data = result2;
//     return res.send({ delete : true });
// });

// //출력
// app.listen(5000, () => {
//     console.log(`Allow port 5000`);
// });