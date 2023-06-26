import axios from 'axios';

const URL = process.env.REACT_APP_FETCH_URL;

//GET
export const getTodo = async () => {
    const result = await axios.get(URL).then(res => res.data);
    return result;
};

//POST
export const postTodo = async (body) => {
    const result = await axios.post(URL, {
        title: body.title,
        body: body.body,
        userId: body.userId,
    }).then(res => console.log(res.data));
    return result;
};

//UPDATE - put(전체 수정 시) / patch(일부 수정 시)
export const updateTodo = async (body) => {
    return await axios.put(`${URL}/${body.id}`, {
        id: body.id,
        title: body.title,
        body: body.body,
        userId: body.userId,
    }).then(res => console.log(res.data));
};

//DELETE
export const deleteTodo = async (req) => {
    console.log(`삭제경로는 ${URL}/${req} 입니다.`);
    return await axios.delete(URL + `/${req}`);
};