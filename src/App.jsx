import React, { useState ,useEffect } from 'react'

//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'


import NavBar from './assets/components/NavBar/NavBar'
import ChatWindow from './assets/components/ChatWindow/ChatWindow'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";
import { auth } from "./components/firebase"





function App() {
 
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup function to unsubscribe from onAuthStateChanged
    return () => unsubscribe(); 
  }, []); 


  return (
    <>
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route
                  path="/"
                  element={user ? <Navigate to="/profile" /> : <Login />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                {/* Protect the profile route */}
                <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} /> 
              </Routes>
              <ToastContainer />
            </div>
          </div>
        </div>
      </Router>
 
    {/* Conditionally render the chat window only if the user is logged in */}
    {user && ( 
        <div className='flex h-screen'>
          <NavBar />
          <ChatWindow />
        </div>
      )}
    </>
  );
}


export default App
