import React, { useState } from 'react'
import "../Resource/contact.css"
import contactimg from "../Resource/Contact us-amico.png"

export default function Contact() {
  document.title="Sirus AI - contact"
  const submit=async(e)=>{
  e.preventDefault();
  const {firstname,lastname,email,phonenumber,message}=user;
  const res= await fetch ("/contactus",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      firstname,lastname,email,phonenumber,message
    })
  });
  const data= await res.json();
  if(res.status===422||!data){
    window.alert("Invalid credential");
    console.log("Invalid credential");
  }else{
    window.alert("Message Sent");
    console.log("Message Sent");
  }
  }
  const [user,setUser]= useState({
    firstname:"",
    lastname:"",
    email:"",
    phonenumber:"",
    message:"",
  });
  let name ,value;
  const handleInput = (e)=>{
      name = e.target.name;
      value = e.target.value;
      setUser({...user,[name]:value})
  }
  return (
    <div className='contact'>
      <div className="contact-part1">
        <div className="top contactus-top">
          <h2>Write to US </h2>
          <div className="separator"></div>
          <p>Can't Find What You Need? Sirus Team Is Here To Help!</p>
        </div>
        <form method='POST'>
          <div className="contact-form">
            <label htmlFor="firstname:">First Name:*</label>
            <input type="text" name="firstname" id="firstname" placeholder='Enter FIrst Name'  required value={user.firstname} onChange={handleInput}/>
          </div>
          <div className="contact-form">
            <label htmlFor="lastname:">Last Name:*</label>
            <input type="text" name="lastname" id="lastname" placeholder='Enter Last Name' required value={user.lastname} onChange={handleInput}/>
          </div>
          <div className="contact-form">
            <label htmlFor="email">Email Address:*</label>
            <input type="email" name="email" id="email" placeholder='Enter Email Address' required  value={user.email} onChange={handleInput}/>
          </div>
          <div className="contact-form">
            <label htmlFor="phonenumber">Phone Number:*</label>
            <input type="number" name="phonenumber" id="phonenumber" placeholder='Enter Phone Number'required  value={user.phonenumber} onChange={handleInput}/>
          </div>
          <div className="contact-form">
          <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" cols="30" rows="10" value={user.message} onChange={handleInput}></textarea>
          </div>
          <div><button onClick={submit} >Submit</button></div>
        </form>
      </div>
      <div className="contact-part2">
        <img src={contactimg} alt="" />
      </div>
    </div>
  )
}
