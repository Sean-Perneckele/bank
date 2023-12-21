import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './designs/css/main.css';

import Index from './pages/index.jsx';
import SingIn from './pages/sing-in.jsx';
import User from './pages/user.jsx';
import Header from './compossant/Header.jsx';
import Footer from './compossant/footer.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/singIn" element={<SingIn />} />
                <Route path="/user" element={<User />} />
            </Routes>  
          <Footer />
        </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

