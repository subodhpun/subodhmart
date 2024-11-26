import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";


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
      <input type='text' name="user_name"  placeholder='Enter Your Full Name' required className='border-2  w-2/4 h-12 p-4'/>
      <input type='email' name="user_email" placeholder='Enter Your Email' required className='border-2  w-2/4 h-12 p-4'/>
      <input type='text' placeholder='Enter Your Subject' className='border-2  w-2/4 h-12 p-4'/>
      <input type='text' name='user_message' placeholder='Enter your message' required className='border-2  w-2/4 h-52 p-4'/>
      <button type='submit' className='bg-black text-white p-2 w-36 hover:bg-customRed '>Submit</button>
    </form>
    </>
  )
}

export default Contact
