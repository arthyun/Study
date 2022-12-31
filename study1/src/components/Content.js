import React from "react";
import {Route, Switch} from 'react-router-dom';
import Routes from "../config/Route"

const Content = (props) => {
    return(
    <Switch>
        {
        Routes.map((el, i) => (
        <Route key={i} path={el.path} exact={el.exact} component={el.component}/>
        ))
        }
    </Switch> 
    );
};

export default Content;