import image from '../../src/assets/image/parbez_k.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const About = () => {
    return (
        <div className="bg-black py-10 ">
            <p className="text-center text-white">Get to know me</p>
            <h2 className="text-5xl mt-3 text-white text-center font-Poppins font-bold">About Me</h2>
            <div className="container mx-auto flex justify-between py-20 ">
                <div className='w-[35%] h-[500px]  shadow-2xl truncate'>
                    <img src={image} alt="image" />
                </div>
                <div className='w-[60%]'>
                    <h2 className='text-[#02590f] text-3xl font-Poppins font-medium'>Who am i?</h2>
                    <h1 className='text-4xl text-white font-Poppins font-semibold py-8'>I'm Parbez Sheikh, a visual Designer and Web Developer</h1>
                    <p className='text-white font-Poppins text-justify mb-10'>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution
                         helps me prioritize tasks, iterate fast and deliver faster.</p>
                         <hr />

                    <div className='flex my-10 '>
                        <div className='w-[50%]'>
                            <p className='text-white font-Poppins my-5'>Name: Parbez Sheikh</p>
                            <p className='text-white font-Poppins'>Age: 27</p>
                        </div>
                        <div className='w-[50%]'>
                        <p className='text-white font-Poppins my-5 '>Email: <span className='text-[#02590f]'>Parbezmusarof2@gmail.com</span></p>
                         <p className='text-white font-Poppins '>From: Dhaka,Bangladesh</p>

                        </div>

                    </div> 

                    <div className='flex'>
                        <div className='w-[50%]'>
                        <a className='text-white bg-[#02590f] py-3 px-12 rounded-3xl text-white hover:bg-[#F7468A]' href="#">DownLoad CV</a>    
                        </div>
                        <div className='w-[50%] text-[#02590f] text-2xl flex gap-3'>
                        <FaFacebookF /><FaTwitter /><FaInstagram /><FaWhatsapp /><FaTiktok />

                        </div>
                    </div>
                    

                </div>
            </div>
            
        </div>
    );
};

export default About;