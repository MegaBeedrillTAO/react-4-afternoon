import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import {Route} from 'react-router-dom';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

export default (
    <div>
        <Route path="/classlist/:class" component={ClassList}/>
        <Route path="/student/:id" component={Student}/>
        <Route path="/about" component={About}/>
        <Route exact path="/" component={Home}/>
    </div>
)