import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 mt-auto">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-center lg:text-left mb-2 lg:mb-0">
                    <span>Logo</span>
                </div>

                {/* Support Tab */}
                <div className="text-lg cursor-pointer mb-2 lg:mb-0">
                    <span>Support</span>
                </div>

                {/* Social Icons */}
                <div className="flex items-center justify-center lg:justify-end">
                    <SocialIcon url="https://www.instagram.com/" style={{ height: 30, width: 30 }} className="mr-4" />
                    <SocialIcon url="https://www.tiktok.com/" style={{ height: 30, width: 30 }} className="mr-4" />
                    <SocialIcon url="https://www.facebook.com/" style={{ height: 30, width: 30 }} className="mr-4" />
                    <SocialIcon url="https://www.youtube.com/" style={{ height: 30, width: 30 }} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
