import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import LoginScreen from '../screens/Login/LoginScreen';
import SideMenu from '../screens/Menu/SideMenu';

function RouteFile() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/home" element={<SideMenu />}/>
            </Routes>
        </Router>
    </>
  )
}

export default RouteFile;