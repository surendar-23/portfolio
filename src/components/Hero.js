import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import HeroImg from '../assets/hero.png';

export default function Hero() {
   const config = {
      subtitle: "I'm a Data Scientist and Web Developer",
      social: {
         twitter: "https://twitter.com/surendar2310",
         github: "https://github.com/surendar-23",
         linkedin: "https://www.linkedin.com/in/surendar-senthilvelan"
      }
   }
   return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' id="hero">
      <div className='w-1/2 flex-col'>
         <h1 className='md:w-1/2 text-white text-6xl font-hero-font'>Hi, <br />Im <span className='text-black'> S</span> Surendar
            <p className='text-2xl'>{config.subtitle}</p>
         </h1>
         <div className="flex py-10">
            <a href={config.social.twitter} className="pr-5 hover:text-white"><AiOutlineTwitter size={40} /></a>
            <a href={config.social.github} className="pr-5 hover:text-white"><AiOutlineGithub size={40} /></a>
            <a href={config.social.linkedin} className="hover:text-white"><AiOutlineLinkedin size={40} /></a>
         </div>
      </div>
      <img className='md:w-1/3' src={HeroImg} alt="" />
   </section>
}