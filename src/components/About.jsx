import React from 'react';

const About = () => {
    return (
        <section id='about' className="bg-gray-100 py-12">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left side with title, subtitle, and athlete information */}
                <div className="w-1/2 pr-8 pl-4">
                    <h2 className="text-4xl font-bold mb-4">About</h2>
                    <h3 className="text-2xl font-semibold mb-6">Athlete Name</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non ante sed leo fringilla efficitur. Vivamus tempus nisl nec consequat fermentum. Integer vitae est sit amet libero sodales vehicula sed sit amet lacus. Aliquam erat volutpat.
                    </p>
                    <p className="text-lg text-gray-700">
                        Sed ut purus nec justo posuere faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                </div>
                {/* Right side with athlete picture */}
                <div className="w-1/2 pr-4">
                    <img
                        src='https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltfGVufDB8fDB8fHww'
                        alt="Athlete"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
