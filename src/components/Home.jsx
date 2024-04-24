import React from 'react';

const Home = () => {
    return (
        <section id="home" className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white pt-24">
            {/* Background Banner */}
            <div className="absolute inset-0 bg-black opacity-50"><img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww" alt="background" className="w-full h-full object-cover"/></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Coaching</h1>
                
                {/* Subtitle */}
                <p className="text-lg md:text-xl mb-8">Get in shape, stay healthy, and achieve your fitness goals with me.</p>
                
                {/* Button (Placeholder) */}
                <button className="bg-transparent border border-white rounded-full px-6 py-3 text-lg hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">Get Started</button>
            </div>
        </section>
    );
}

export default Home;
