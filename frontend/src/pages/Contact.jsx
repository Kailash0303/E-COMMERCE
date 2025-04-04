import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title  text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>

          <p className='font-semibold text-xl text-gray-600' >Our Store</p>
          <p className='text-gray-500'>Shivsai Complex Shop no : 11 /12 <br /> Warje Malwadi , Pune-58 </p>
          <p className='text-gray-500'>Tel :  (+91)  99887-76655 <br />E-mail : rocket@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600' >Careers at Rocket</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white translate-all duration-500 ' >Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default Contact
