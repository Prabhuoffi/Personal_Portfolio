import React from 'react';
import { logo } from "../../assets/index";
import PrabhuResume from '../../assets/Resume/PrabhuResume.pdf';

const Footer = () => {
    const downloadResume = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = PrabhuResume; // Use the imported PDF file
        downloadLink.download = 'resume.pdf';
        downloadLink.click();
    };

    return (
        <div className="w-full py-20 h-auto border-b-[1px] border-b-purple-600 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
             <div className="w-full h-full flex flex-col gap-8">
             <img className="w-32" src={logo} alt="logo" />
  <button onClick={downloadResume} className="bg-purple-500 hover:bg-purple-700 ml-4 mt-1 text-white font-semibold w-20 rounded">
    Download Resume
  </button>


            </div>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-purple-600 tracking-wider">Quick Link</h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                    <li>
                        <span className="w-full text-lg relative hover:text-purple-600 duration-300 group cursor-pointer">About</span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-purple-600 duration-300 group cursor-pointer">Portfolio</span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-purple-600 duration-300 group cursor-pointer">Services</span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-purple-600 duration-300 group cursor-pointer">Contact</span>
                    </li>
                </ul>
            </div>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-purple-600 tracking-wider">RESOURCES</h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                    <li>
                        <span className="w-full text-lg relative hover:text-purple-600 duration-300 group cursor-pointer">Authentication</span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-purple-600 duration-300 group cursor-pointer">System Status</span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-purple-600 duration-300 group cursor-pointer">Terms of Service</span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-purple-600 duration-300 group cursor-pointer">Over Right</span>
                    </li>
                </ul>
            </div>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-purple-600 tracking-wider">DEVELOPERS</h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
                    <li>
                        <span className="w-full text-lg relative hover:text-purple-600 duration-300 group cursor-pointer">Documentation</span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-purple-600 duration-300 group cursor-pointer">Authentication</span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-purple-600 duration-300 group cursor-pointer">Support</span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-purple-600 duration-300 group cursor-pointer">Open Source</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
