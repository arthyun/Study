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
 - const { Schema } = mongoose;
 - const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
  });
 - const UserModel = mongoose.model('User', UserSchema);

 3. CRUD 연산 수행하기
 - app.post('/users', (req, res) => {
    const { username, password, email } = req.body;
    const newUser = new UserModel({ username, password, email });
    newUser.save((err, savedUser) => {
        if (err) return res.status(500).send(err);
        res.status(201).json(savedUser);
    });
  });

 - app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    UserModel.findById(id, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).send('User not found');
        res.json(user);
    });
  });

 - app.patch('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, password, email } = req.body;
    UserModel.findByIdAndUpdate(
        id,
        { username, password, email },
        { new: true },
        (err, updatedUser) => {
        if (err) return res.status(500).send(err);
        if (!updatedUser) return res.status(404).send('User not found');
        res.json(updatedUser);
        }
    );
  });

 - app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    UserModel.findByIdAndDelete(id, (err, deletedUser) => {
        if (err) return res.status(500).send(err);
        if (!deletedUser) return res.status(404).send('User not found');
        res.json(deletedUser);
    });
  });

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