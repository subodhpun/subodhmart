import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import Footer from '../Footer/Footer';


const Contact = () => {
  const formRef = useRef();

  const sendEmail=(e)=>{
    e.preventDefault();
    // setMessage(true);
    emailjs
      .sendForm(
        'service_ocq1p04',
        'template_j59irio',
        formRef.current,
        'evnU6mcjAEJAWmLx1'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent sucessfully");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <>
    <div className='flex justify-center p-14 text-4xl bg-customRed font-extrabold text-white text-[42px] text-[800]'>
      <h1>Contact Us</h1>
    </div>

    {/* form */}

    <form ref={formRef} onSubmit={sendEmail} className='relative flex flex-col justify-center items-center p-20 space-y-5 w-full'>
      <input type='text' name="user_name"  placeholder='Enter Your Full Name' required className='border-2 w-full lg:w-2/4 h-12 p-4'/>
      <input type='email' name="user_email" placeholder='Enter Your Email' required className='border-2 w-full lg:w-2/4 h-12 p-4'/>
      <input type='text' placeholder='Enter Your Subject' className='border-2 w-full lg:w-2/4 h-12 p-4'/>
      <input type='text' name='user_message' placeholder='Enter your message' required className='border-2 w-full lg:w-2/4 h-52 p-4'/>
      <button type='submit' className='bg-black text-white p-2 w-36 hover:bg-customRed '>Submit</button>
    </form>

    {/* location map */}
    <div className='relative flex flex-col w-full mb-20 h-96 justify-center'>
    <h1 className='flex justify-center font-custonFont text-customRed text-4xl m-10'>Our Location</h1>
    <iframe className='h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28265.880309098193!2d85.3147648!3d27.6791296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19eb1dad6439%3A0xbb1689fdcee3740b!2sLabim%20Mall!5e0!3m2!1sen!2snp!4v1732696708341!5m2!1sen!2snp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    </div>

    {/* footer */}
    <Footer/>
    </>
  )
}

export default Contact
