import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueries, useQueryClient } from '@tanstack/react-query';
import { getTest1, getTest2, getTest3, getTodo, postTodo, updateTodo, deleteTodo } from './my-api';


const Todos = () => {
    // const [rowData, setRowData] = useState([]);

    const queryClient = useQueryClient();

    // const getQuery = useQuery({
    //     queryKey: ['todos'],
    //     queryFn: getTodo,
    // });

    const result = useQueries({
        queries: [
        {
            queryKey: ['test1'],
            queryFn: getTest1,
            retry: 0,
        },
        {
            queryKey: ['test2'],
            queryFn: getTest2,
            retry: 0,
        },
        {
            queryKey: ['test3'],
            queryFn: getTest3,
            retry: 0,
        }]
    });

    // 분기처리를 위해 필수 조건
    const loading = result.some(item => item.isLoading);

    useEffect(() => {
        console.log(loading);
    }, [result]);

    const postMutation = useMutation({
        mutationFn: postTodo,
        onSuccess: () => {
            console.log('post 완료');
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
        onError: () => {
            throw new Error('Post Error!');
        }
    });

    const updateMutation = useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            console.log('update 완료');
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
        onError: () => {
            throw new Error('update Error!');
        }
    });

    const deleteMutation = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            console.log('delete 완료');
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
        onError: () => {
            throw new Error('update Error!');
        }
    });

    // if(getQuery.isLoading){
    //     return <h1>Loading...</h1>;
    // }
    // if(getQuery.error){
    //     return 'An error has occured: ' + getQuery.error.message;
    // }

    return (
        <div>
            <ul>
            {/* {
                getQuery.data?.slice(0, 8).map((todo) => (
                    <li key={todo.id}>{todo.title} &nbsp;<span onClick={() => {
                        deleteMutation.mutate(todo.id)}} style={{cursor: 'pointer'}}>❌</span>
                    </li>
                ))
            } */}
            {
                loading === false ? result.map((item, i) => (
                    <li key={i}>
                        {item.data.title} &nbsp;
                        <span onClick={() => deleteMutation.mutate(item.data.userId)} style={{cursor: 'pointer'}}>❌</span>
                    </li>
                )) : null
            }
            </ul>
            <button className='underBtns' onClick={() => {
                postMutation.mutate({
                    title: 'POST TITLE',
                    body: 'POST BODY',
                    userId: `POST ${Date.now()}`,
                })
            }}>POST BTN</button>
            <button className='underBtns' onClick={() => {
                updateMutation.mutate({
                    id: 100,
                    title: 'UPDATE TITLE',
                    body: 'UPDATE BODY',
                    userId: `UPDATE ${Date.now()}`,
                })
            }}>UPDATE BTN</button>
        </div>
    )
};

export default Todos;