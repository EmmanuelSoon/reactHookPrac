import React from 'react';
import {Routes, Route, Redirect } from 'react-router-dom';

import Usestate from './Usestate'

function Main(){

    return(
        <div>
            <Routes>
                <Route path = "usestate" element={<Usestate/>} />
            </Routes>
        </div>
    )
}


export default Main;