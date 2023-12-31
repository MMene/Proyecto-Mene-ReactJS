import React from "react";
import brand from '../assets/logo_gamer.svg';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
    return(
        <footer className="w-full h-20 flex  items-center bg-slate-900 ">
            <div className="w-full h-full items-center flex flex-row justify-between ">

                <div className=" p-2 ">
                
                    <img className="w-14 h-14 cursor-pointer" src={brand} alt="logo" />
                </div>
                <div>
                    <p className="text-white text-lg font-semibold">Este es un Proyecto para ReactJS / CoderHouse</p>
                </div>
                <div className="flex flex-row pr-16 gap-14">
                    <a href="https://wa.me/+541165387090" target="_blank">
                        <FaWhatsapp className="cursor-pointer hover:scale-110 duration-500" size="1.5rem" color="white" />
                    </a>
                        <a href="https://www.instagram.com/matymene/" target="_blank">
                        <FaInstagram className="cursor-pointer hover:scale-110 duration-500 " size="1.5rem" color="white" />
                    </a>
                    <a href="https://www.linkedin.com/in/matías-agustín-mene-38123b171" target="_blank">
                        <FaLinkedin className="cursor-pointer hover:scale-110 duration-500" size="1.5rem" color="white" />
                    </a>
                    <a href="https://github.com/MMene" target="_blank">
                        <FaGithub className="cursor-pointer hover:scale-110 duration-500" size="1.5rem" color="white"/>
                    </a>
            
                </div>
            </div>
        </footer>
    );

};
export default Footer;