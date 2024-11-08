import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./ApplicationViews";
import { useEffect } from 'react';
import Authorize from './Authorize';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);


    useEffect(() => {
        if (!localStorage.getItem("userProfile")) {
            setIsLoggedIn(false)

        }
    }, [isLoggedIn])

    return (
        <Router>
            
            {isLoggedIn ?
                <ApplicationViews isLoggedIn={isLoggedIn} />
                :
                <Authorize setIsLoggedIn={setIsLoggedIn} />
            }
        </Router>
    );
}

export default App;