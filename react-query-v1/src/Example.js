import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Example = () => {
    //react query 초기 예제
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => 
            await axios.get('https://api.github.com/repos/tannerlinsley/react-query')
            .then(res => res.data),
    });
    if(isLoading){
        return <h1>Loading...</h1>;
    }
    if(error){
        return 'An error has occured: ' + error.message;
    }


    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    )
};

export default Example;