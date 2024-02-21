import React, { useState } from "react";
import "./Courses.css";
function Courses(){
    const [datas,SetData]=useState([
        {
            id:1,
            card:"filtter.png",
            text:"filler"
            
        },
        {
            id:2,
            card:"mech.png",
            text:"mechanical"
        },
        {
            id:3,
            card:"ece.png",
            texT:"electrical"
        },
        {
            id:4,
            card:"wire.png",
            text:"wireman"
        }
    ]);
    return(
        <div>
            <div className="course">Courses</div>
            <div className="logoes">
                {datas.map((datas) => (
                    <div key={datas.id} className="badge" style={datas.position}>
                        <img src={datas.card} alt={datas.text} className="datas-logo" />
                    </div>
                ))}
            </div>
            <div className="founder">Founder</div>
            <img src="founder.png" alt="founder" className="founder-card"></img>
        </div>
    );
}

export default Courses;