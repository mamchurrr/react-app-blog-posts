import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Contacts from './pages/Contacts';


export default function () {
    return (
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/blog' component={ Blog } />
            <Route path='/post/:idPost' component={ Post } />
            <Route path='/contacts' component={ Contacts } />
        </Switch>
    )
}