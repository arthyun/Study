import React from 'react';
import { Redirect } from 'react-router';
import Home from '../components/Home';
import Subject from '../components/Subject';

const routes = [
    {
        path : "/",
        exact : true,
        component: () => <Redirect to="/Home" />
    },
    {
        path : "/Home",
        component: () => <Home />
    },
    {
        path : "/Subject",
        component: () => <Subject />
    }
];

export default routes;