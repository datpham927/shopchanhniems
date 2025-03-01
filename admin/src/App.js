import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Page/Home';
import Login from './Page/Login';

function App() {

    return ( <
        div className = "app h-screen w-screen bg-[rgb(245,245,250)] overflow-hidden" >
        <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        /Routes> <
        /Router> <
        /div>
    );
}

export default App;