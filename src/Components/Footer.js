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
        { label: 'Name', field: 'name' },
        { label: 'Email', field: 'email' },
        { label: 'Phone', field: 'phone' },
        { label: 'Comments', field: 'comments' }
      ];

      const openingHours = [
        { day: 'Monday - Saturday', hours: '9 AM - 5 PM' },
        { day: 'Sunday', hours: 'Closed' }
      ];
    
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
      </div>
      <img src="footer-bg.png" alt="badges" className="footerbg"></img>
    </div>
    );
}

export default Footer;