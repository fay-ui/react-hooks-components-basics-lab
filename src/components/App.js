// src/components/App.js
import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is in the same directory
import Home from './Home';     // Assuming Home is in the same directory

function About() {
    return (
        <div id="about">
            <h2>About</h2>
        </div>
    );
}

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About /> {/* Add the About component here */}
        </div>
    );
}

export default App;
