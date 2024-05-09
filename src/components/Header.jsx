import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary text-white py-4 sticky top-0 z-20 mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold mr-4 ml-4 cursor-pointer text-accent">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            Coaching
          </ScrollLink>
        </div>

        <div className="lg:hidden absolute top-5 right-0 flex items-center mr-6">
          {/* Shopping Cart Icon */}

          <div className="mr-3 relative">
            <ScrollLink
              to="Cart"
              smooth={true}
              duration={500}
              offset={-100}
              className="material-symbols-outlined cursor-pointer inline-block"
            >
              shopping_cart
            </ScrollLink>
            {cartItems.length > 0 && (
              <div className="bg-background text-primary rounded-full w-5 h-5 flex justify-center items-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                <span className="text-xs">{cartItems.length}</span>
              </div>
            )}
          </div>

          {/* Burger Menu Icon */}
          <button
            className="text-background focus:outline-none"
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
        </div>

        {/* Navigation Links (visible on desktop) */}
        <nav className="hidden lg:flex justify-center">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
            className="mx-4 cursor-pointer text-secondary"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-100}
            className="mx-4 cursor-pointer text-secondary"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="programs"
            smooth={true}
            duration={500}
            offset={-100}
            className="mx-4 cursor-pointer text-secondary"
          >
            Programs
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            className="mx-4 cursor-pointer text-secondary"
          >
            Contact
          </ScrollLink>
        </nav>

        {/* Burger Menu (visible on mobile) */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-primary text-white">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-100}
              className="block py-2 px-4 cursor-pointer text-secondary"
              onClick={toggleMenu}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-100}
              className="block py-2 px-4 cursor-pointer text-secondary"
              onClick={toggleMenu}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="programs"
              smooth={true}
              duration={500}
              offset={-100}
              className="block py-2 px-4 cursor-pointer text-secondary"
              onClick={toggleMenu}
            >
              Programs
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              className="block py-2 px-4 cursor-pointer text-secondary"
              onClick={toggleMenu}
            >
              Contact
            </ScrollLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
