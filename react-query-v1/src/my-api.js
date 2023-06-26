import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const getTodo = async () => {
    const result = await axios.get(URL).then(res => res.data);
    return result;
};

export const postTodo = async (body) => {
    const result = await axios.post(URL, {
        title: body.title,
        body: body.body,
        userId: body.userId,
    }).then(res => console.log(res.data));
    return result;
};

export const updateTodo = async (body) => {
    return await axios.put(URL + `/${body.id}`, {
        id: body.id,
        title: body.title,
        body: body.body,
        userId: body.userId,
    }).then(res => console.log(res.data));
};