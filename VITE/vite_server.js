const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createServer: createViteServer } = require('vite');

//VITE용
async function startServer(){
    const app = express();

    const vite = await createViteServer({
        server: {
            middlewareMode: true
        }
    });

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('client'));
    app.use(vite.middlewares);

    //포트 연결 확인
    app.listen(5000, () => {
        console.log('5000 포트에 연결되었습니다.');
    });
};

startServer();