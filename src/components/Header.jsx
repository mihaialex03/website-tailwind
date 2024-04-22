import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-4 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                {/* Navigation Links */}
                <nav className="flex justify-center">
                    <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        className="mx-4 cursor-pointer"
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        className="mx-4 cursor-pointer"
                    >
                        About
                    </ScrollLink>
                    <ScrollLink
                        to="programs"
                        smooth={true}
                        duration={500}
                        className="mx-4 cursor-pointer"
                    >
                        Programs
                    </ScrollLink>
                    <ScrollLink
                        to="cart"
                        smooth={true}
                        duration={500}
                        className="mx-4 cursor-pointer"
                    >
                        Cart
                    </ScrollLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
