import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Container = () => {
    <Router>
        <Header />
        <Routes>
            <Route
            path="/"
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
            element={<Porfolio />}
            />
        </Routes>
        <Footer />
    </Router>
}
export default Container