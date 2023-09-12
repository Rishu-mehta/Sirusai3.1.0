import React from 'react'
import "../Resource/product.css"
import facescan from "../Resource/face-scan (1).png"
import admindb from "../Resource/admindb.png"
import register from "../Resource/register.png"
export default function Products() {
  document.title="Sirus AI-Show and Go | Smart Attendence system by Face Recognization"
  return (
    <div className='product'>
      <div className="p-fisrt-sec">
        <div className="top p-fs-top">
        <h1>Show and Go</h1>
          <h2>Face Recognition Attendance System</h2>
          <p>Easy and touchless way to handle your attendance with your face scan</p>
        </div>
        <div className="book-demo-bar p-fs-book-demo-bar">
          <div className="message-box"><span className="material-symbols-outlined">
            mail
          </span>
          </div>
          <div className="email-input">
            <input type="email" placeholder='Enter your email Address' />
          </div>
          <div className="book-demo"><button>Book Demo</button></div>
        </div>
      </div>
      <div className="p-second-sec">
        <div className="p-second-sec-part1">
          <h1>What is Show and Go?</h1>
          <div className="separator"></div>
         <p>
         A smart attendance system powered by AI that uses face recognition technology automates and simplifies the process of taking attendance. The tool can capture and match the faces of individuals with pre-existing images or data to identify and record attendance.</p> <p> This can be particularly useful in settings where identification is important, such as schools, universities, and workplaces. By using a smart attendance system with face recognition, organizations can save time and resources by eliminating the need for manual attendance tracking, reducing errors, and providing real-time attendance data. </p><p>Show and Go tool can also help to enhance security and prevent fraudulent attendance, ensuring that only authorized individuals are allowed access to specific areas or events. </p> <p> Overall, a clear and concise description of an AI tool that provides a smart attendance system using face recognition technology is crucial to help potential users and stakeholders understand the benefits and features of the tool and how it can improve their workflow and operations.</p>
         
        </div>
        <div className="p-second-sec-part2">
         <img src={facescan} alt="" />
        </div>
      </div>
      <div className="p-second-sec p-third-sec ">
        <div className="p-second-sec-part1 ">
          <h1>How it Works:</h1>
          <div className="separator"></div>
         <p>
         The system works by capturing an image of the individual's face and comparing it to the images stored in the system's database to identify the person.</p> 
         <h4>Step 1:Registration</h4><p> The process of using our system is simple and efficient. The user first needs to register and create an account on our website. Once the account is created, they can log in and access the attendance system.</p><h4>Step 2:Mark Attendence</h4><p>To mark attendance, the user needs to stand in front of the camera connected to the system, and the camera will capture their image. The system will then analyze the image to verify the identity of the individual. If the system recognizes the individual's face, their attendance will be marked automatically. In case of any discrepancy, the system will alert the user to try again. </p> <h4>Step3:Attendence Report Acess</h4><p>The system is designed to be user-friendly, and users can access their attendance records easily through their account dashboard. The system also generates reports that provide an overview of the attendance data for specific periods. The reports can be used to monitor attendance trends and identify potential issues that may need attention.</p>
        </div>
        <div className="p-second-sec-part2 image">
         <img src={admindb} alt="" />
         <img src={register} alt="" />
        </div>
      </div>
      <div className="top forth-sec-top">
          <h2>Features of Show and Go</h2>
          <div className="separator"></div>
          <p>User-friendly,Cost-effective and  efficient,High potential,etc</p>
        </div>
      <div className="p-fourth-sec">
        <div className="p-fourth-sec-card">
        <div className="p-fourh-sec-part1">
        <span className="material-symbols-outlined">
          check_circle</span>    
        </div>
        <div className="p-fourh-sec-part2">
          <h3>User-Friendly UI</h3>
          <p>provides a positive and enjoyable experience for visitors. It's easy to navigate, visually appealing, and intuitive, leading to increased user satisfaction .</p>
        </div></div>
        <div className="p-fourth-sec-card">
        <div className="p-fourh-sec-part1">
        <span className="material-symbols-outlined">
          check_circle</span> 
        </div>
        <div className="p-fourh-sec-part2">
          <h3>High Accuracy</h3>
          <p> Users are more likely to trust information presented on a website that is accurate and reliable</p>
        </div></div>
        <div className="p-fourth-sec-card">
        <div className="p-fourh-sec-part1">
        <span className="material-symbols-outlined">
          check_circle</span> 
        </div>
        <div className="p-fourh-sec-part2">
          <h3>Less Time Consumption</h3>
          <p> It reduces the time spent on manual attendance marking. This is particularly valuable in settings with large numbers of attendees, such as schools, colleges.</p>
        </div>
        </div>
        <div className="p-fourth-sec-card">
        <div className="p-fourh-sec-part1">
        <span className="material-symbols-outlined">
          check_circle</span> 
        </div>
        <div className="p-fourh-sec-part2">
          <h3>High Performance</h3>
          <p>A high-performance product can streamline tasks and processes, leading to increased efficiency and productivity.</p>
        </div>
        </div>
        <div className="p-fourth-sec-card">
        <div className="p-fourh-sec-part1">
        <span className="material-symbols-outlined">
          check_circle</span> 
        </div>
        <div className="p-fourh-sec-part2">
          <h3>Cost savings</h3>
          <p>By automating tasks and optimizing processes, our clients may be able to reduce operational costs and improve their bottom line.</p>
        </div>
        </div>
        <div className="p-fourth-sec-card">
        <div className="p-fourh-sec-part1">
        <span className="material-symbols-outlined">
          check_circle</span> 
        </div>
        <div className="p-fourh-sec-part2">
          <h3>Improved decision-making</h3>
          <p>By providing data-driven insights and recommendations, our clients can make more informed and strategic decisions.</p>
        </div>
        </div>
        <div className="p-fourth-sec-card">
        <div className="p-fourh-sec-part1">
        <span className="material-symbols-outlined">
          check_circle</span> 
        </div>
        <div className="p-fourh-sec-part2">
          <h3>Enhanced customer experience</h3>
          <p>Clients personalize and tailor their interactions with customers, providing a more seamless and positive experience. This can lead to increased customer satisfaction, loyalty, and retention.</p>
        </div>
        </div>
        <div className="p-fourth-sec-card">
        <div className="p-fourh-sec-part1">
        <span className="material-symbols-outlined">
          check_circle</span> 
        </div>
        <div className="p-fourh-sec-part2">
          <h3>Competitive advantage</h3>
          <p>Can stay ahead of the curve in terms of innovation ,efficiency, and customer experience, positioning themselves for long-term success.</p>
        </div>
        </div>
      </div>
    </div>
  )
}
