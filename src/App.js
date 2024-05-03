import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Footer from './components/Footer';
import { Contact } from './components/Contact';


const App = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <About/>
            <Programs/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
