import './App.css';
import React from 'react';
import { BrowserRouter, Router, Routes, Route, Link} from "react-router-dom";


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    let isAuthenticated = true;

  return (
    <BrowserRouter>
        <div className="App">
            <ul className="App-header">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about/NIIT">About NIIT</Link>
                </li>
                <li>
                    <Link to="/about/StackRoute">About StackRoute</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            
            {/* Implement routings logic as mentioned in Problem.md file */}

            <Routes>
                <Route path="/" element={<Login />} />
                <Route 
                    path="/home" 
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated} >
                            <Home/>
                        </PrivateRoute>
                    }
                />

                <Route 
                    path="/about/:organization" 
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated} >
                            <About/>
                        </PrivateRoute>
                    }
                />

                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound/>} />
                
            </Routes>
        </div>
    </BrowserRouter>
);
};

export default App;
