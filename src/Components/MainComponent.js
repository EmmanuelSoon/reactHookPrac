import React from 'react';
import {Routes, Route, Redirect } from 'react-router-dom';

import Usestate from './Usestate'
import UseEffect from './UseEffect';

function Main(){

    return(
        <div>
            <Routes>
                <Route path = "usestate" element={<Usestate/>} />
                <Route path = "useeffect" element={<UseEffect/>} />

                
            </Routes>
        </div>
    )
}


export default Main;