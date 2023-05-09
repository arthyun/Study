1. npm init

2. npm install nodemon express cors body-parser concurrently mongoose

3. package.json에 아래 텍스트 입력하여 npm run dev 시 server.js와 client가 둘다 실행되게 셋팅
 - "scripts": {
        "client": "cd client && npm run dev",
        "server": "nodemon server.js",
        "dev": "concurrently \"npm run server\" \"npm run client\""
    },

4. MongoDB 실행하기(mongod)
 - 우선 터미널에서 mongodb를 homebrew를 통해 실행시킨다.
  - brew services start mongodb-community(시작)
  - brew services stop mongodb-community(종료)
 - 이후 MongoDB Compass를 실행시켜 접속한다.

5. mongoose 문법 이해하기
 1. DB 연결설정
 - const mongoose = require('mongoose');
 - mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   });
 - const db = mongoose.connection;
 - db.on('error', console.error.bind(console, 'MongoDB connection error:'));

 2. 데이터모델 정의
 - const UserSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    gender: String,
  });
 - const UserModel = mongoose.model('User', UserSchema);
 - const newUser = new UserModel({
    name: '현호', 
    phone: '010-7212-8581', 
    email: 'heun3316@naver.com',
    gender: 'male'
  });

 3. CRUD 연산 수행하기
    1. DB에 객체 저장(save),(req.body를 대입하여 저장하는 방법 구현할 것!)
    - newUser.save()
    .then(() => {
        console.log('DB에 저장 성공!');
    })
    .catch((error) => {
        console.log('Error saving object:', error);
    });

    2. DB 불러오기(find, findById)
    //var data1 = []; 
    UserModel.find()
    .then(res => {
        //data1.push(res[0]);
        console.log(res);
    })
    .catch(err => console.log(err));

    3. DB 삭제하기(deleteOne, deleteMany),(req.params로 전달 받아서 삭제 가능)
    UserModel.deleteOne({ name: '현호2' })
    .then(res => {
       console.log(res);
    })
    .catch(err => console.log(err));

    4. DB 수정하기(updateOne, updateMany)
    UserModel.updateOne({ name: '현호' }, { name: '바보똥개' })
    .then(res => {
       console.log(res);
    })
    .catch(err => console.log(err));


 4. 미들웨어 사용하기
 - const authenticate = (req, res, next) => {
    if (req.session && req.session.userId) {
        UserModel.findById(req.session.userId, (err, user) => {
        if (user) {
            req.user = user;
            next();
        } else {
            res.status(401).send('Unauthorized');
        }
        });
    } else {
        res.status(401).send('Unauthorized');
    }
   };

 - const validateUser = (req, res, next) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        res.status(400).send('Missing required fields');
    }
   }