import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './components/App';
import AboutUser1 from './components/AboutUser1';
import AboutUser2 from './components/AboutUser2';

const routes = (
        <BrowserRouter>
            <Frame>             
                <Route path="/" exact component={App}/>
                <Route path="/register" component={AboutUser1}></Route>  
                <Route path="/register/second" component={AboutUser2}></Route>        
            </Frame>
        </BrowserRouter>        
);

export default routes;