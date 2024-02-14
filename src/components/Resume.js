import ResumeImg from '../assets/resume.jpg'
export default function Resume() {

   const config = {
      link: "https://drive.usercontent.google.com/u/0/uc?id=1jjUr0hYka5P89xGv3V77Oj5bp7ySPTtd&export=download"
   }
   return <section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
      <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
         <img className='w-[300px]' src={ResumeImg} alt='ResumePicture' />
      </div>
      <div className='md:w-1/2 flex justify-center'>
         <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5'>You can view my resume <a className='btn' href={config.link}>Download</a></p>
         </div>
      </div>
   </section >
}