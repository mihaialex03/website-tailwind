import React from 'react';
import Header from './components/Header';


const App = () => {
    return (
        <div>
            <Header/>
            {/* Other sections/components of your one-page website */}
            <section id="home" className="h-screen bg-gray-100">Home Section</section>
            <section id="about" className="h-screen bg-gray-200">About Section</section>
            <section id="programs" className="h-screen bg-gray-300">Programs Section</section>
            <section id="cart" className="h-screen bg-gray-400">Cart Section</section>
            {/* You can add more sections as needed */}
        </div>
    );
}

export default App;
