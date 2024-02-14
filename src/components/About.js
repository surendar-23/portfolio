import AboutImg from '../assets/about.png'
export default function About() {
   const config = {
      line1: "Hello. Let me introduce myself as Surendar. I work as a data scientist. I fine-tune models that perform better than the current approaches.",
      line2: "My areas of expertise include Artificial Intelligence, Machine Learning, Deep Learning, Visualisation, and programming languages like Python, C, and Java.",
      line3: "I am familiar with Node.js, Mongoose, and SQL on the backend."
   }
   return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
      <div className='py-5 md:w-1/2'>
         <img src={AboutImg} alt='' />
      </div>
      <div className='md:w-1/2 flex justify-center'>
         <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
         </div>
      </div>
   </section >
}