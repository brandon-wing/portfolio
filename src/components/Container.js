import React from "react";
import Header from './Header';
import Footer from './Footer';
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./pages/Contact";

function Container(){
    return (
    <Router>
        <Header />
        <Routes>
            <Route
            path="/"
            element={<About />}
            />
            <Route
            path="/about"
            element={<About />}
            />
            <Route
            path="/resume"
            element={<Resume />}
            />
            <Route
            path="/contact"
            element={<Contact />}
            />
            <Route
            path="/portfolio"
            element={<Portfolio />}
            />
        </Routes>
        <Footer />
    </Router>
)}
export default Container;