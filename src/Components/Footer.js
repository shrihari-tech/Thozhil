import React,{useState} from "react";
import "./Footer.css";
function Footer(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        comments: ''
      });
    
    
      const fields = [
        { label: 'Name'},
        { label: 'Email' },
        { label: 'Phone' },
        { label: 'Comments' }
      ];

      const openingHours = [
        { day: 'Monday - Saturday', hours: '9 AM - 5 PM' },
        { day: 'Sunday', hours: 'Closed' }
      ];
    
      const contactInfo = {
        address: 'No.69, Arni Road, Cheyyar, Thiruvanamalai District - 604407',
        phone: 'Ph - 04182222474',
        email: 'Email - cheyyartic@gmail.com'
      }; 
    return (
        <div className="fbg">
        <div className="footer">
        <h2 style={{color:"white"}}>Enquiry</h2>
        <form>
            {fields.map(({ label, field }) => (
            <div key={field}>
                 <input
                type="text"
                id={field}
                placeholder={label}
                value={formData[field]}
                className="eni"
            />
            </div>
            ))}
            <button type="submit">Submit</button>
        </form>
        
        <div>
        
        <div className="openings">
        <h3 style={{color:"white"}}>Opening Hours</h3>
        {openingHours.map(({ day, hours }) => (
          <div style={{color:"white"}} key={day}>
            <p style={{color:"white"}}>{day}: {hours}</p>
          </div>
        ))}
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15570.347127817191!2d79.5299588!3d12.6750766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52d73bba9ded13%3A0x5deb610544663ab8!2sCheyyar%20Industrial%20Training%20Institute%20(ITI)!5e0!3m2!1sen!2sin!4v1708524035754!5m2!1sen!2sin" className="location"></iframe>
      <div className="contactus">
        <h3>Contact Us</h3>
        <p>{contactInfo.address}</p>
        <p>{contactInfo.phone}</p>
        <p>{contactInfo.email}</p>
      </div>
      </div>
      <img src="footer-bg.png" alt="badges" className="footerbg"></img>
      
    </div>
    );
}

export default Footer;