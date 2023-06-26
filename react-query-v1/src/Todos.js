import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getTodo, postTodo, updateTodo } from './my-api';


const Todos = () => {
    const queryClient = useQueryClient();

    const getQuery = useQuery({
        queryKey: ['todos'],
        queryFn: getTodo,
    });

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


    return (
        <div>
            <ul>
            {
                getQuery.data?.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))
            }
            </ul>
            <button onClick={() => {
                postMutation.mutate({
                    title: 'POST TITLE',
                    body: 'POST BODY',
                    userId: `POST ${Date.now()}`,
                })
            }}>POST BTN</button>
            <button onClick={() => {
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