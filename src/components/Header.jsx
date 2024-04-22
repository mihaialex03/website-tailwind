import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-900 text-white py-4 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo (you can include your logo here if needed) */}
                <div className="text-2xl font-bold mr-4 cursor-pointer">
                    Logo
                </div>

                {/* Burger Menu Icon (visible on mobile) */}
                <button
                    className="block lg:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Navigation Links (visible on desktop) */}
                <nav className="hidden lg:flex justify-center">
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

                {/* Burger Menu (visible on mobile) */}
                {isOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900 text-white">
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            className="block py-2 px-4 cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Home
                        </ScrollLink>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            className="block py-2 px-4 cursor-pointer"
                            onClick={toggleMenu}
                        >
                            About
                        </ScrollLink>
                        <ScrollLink
                            to="programs"
                            smooth={true}
                            duration={500}
                            className="block py-2 px-4 cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Programs
                        </ScrollLink>
                        <ScrollLink
                            to="cart"
                            smooth={true}
                            duration={500}
                            className="block py-2 px-4 cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Cart
                        </ScrollLink>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
