import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Footer from './components/Footer';


const App = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <About/>
            <Programs/>
            <Footer/>
        </div>
    );
}

export default App;
