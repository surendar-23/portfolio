import websiteImg1 from '../assets/Weather Application.jpg'
import websiteImg2 from '../assets/ecommerce-websites.jpg'
import websiteImg3 from '../assets/website-blog.jpg'


export default function Projects() {
   const config = {
      projects: [
         {
            image: websiteImg1,
            description: "A weather application using OpenWeatherAPI, provides real-time weather information including current temperature, wind speed, and other geographical markers for comprehensive weather monitoring.",
            link: "https://github.com/surendar-23/Weather_Application"
         },
         {
            image: websiteImg2,
            description: "This is a fully responsive website for Digimart, a digital marketing agency, showcasing their services, portfolio, and contact information, built using HTML, CSS, and JavaScript with Ionicons for icons.",
            link: "https://github.com/surendar-23/DigiMart"
         },
         {
            image: websiteImg3,
            description: "Basic Blog Website. Built with Next JS and MongoDB",
            link: "https://github.com/surendar-23/blog-site"
         }
      ]
   }
   return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
      <div className="w-full">
         <div className="flex flex-col px-10 py-5">
            <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold"> Projects </h1>
            <p>These are some of my projects. I have built these with React, MERN and Vanilla CSS. Check them out. </p>
         </div>
      </div>
      <div className="w-full">
         <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.projects.map((project) => (
               <a href={project.link}>
                  <div className='relative'>
                     <img className='h-[200px] w-[500px]' src={project.image} alt='ecommerceWebsiteImg1' />
                     <div className='project-desc'>
                        <p className='text-center px-5 py-5'>{project.description}</p>
                        <div className='flex justify-center'>
                           <a className='btn' target='_blank' href={project.link} rel="noreferrer">View Project</a>
                        </div>
                     </div>
                  </div>
               </a>))}
         </div>
      </div>
   </section >
}