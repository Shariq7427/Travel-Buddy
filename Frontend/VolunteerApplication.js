import "./VolunteerApplication.css";
import { useState } from "react";
import axios from 'axios';
import React from 'react';
function VolunteerApplication() {
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[phoneNumber,setPhoneNumber]=useState('');
    const[email,setEmail]=useState('');
    const[address,setAddress]=useState('');
    const[experience,setExperience]=useState('');
    const[showMessage,setShowmessage]=useState(false);
    const[showApplication,setShowApplication]=useState(true);
    const[showPhoneNumberMessage,setShowPhoneNumberMessage]=useState(false);
    const[showAgeMessage,setShowAgeMessage]=useState(false);

    const application = {
        name: name,
        age: age,
        phoneNumber: phoneNumber,
        emailId: email,
        address: address,
        experience: experience
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowAgeMessage(false);
        setShowPhoneNumberMessage(false);
        try {
            if(age<25 || age>45)
            {
                console.log("Age must be between 25 to 45.");
                setShowAgeMessage(true);
            }
            else if(phoneNumber<6000000000 || phoneNumber>9999999999)
            {
                console.log("Enter valid Phone Number.");
                setShowPhoneNumberMessage(true);
            }
            else {
            const response = await axios.post('http://localhost:1234/volunteers',application);
            console.log(response)
            
            console.log(response.data);
                
                console.log("success");
                setShowApplication(false);
                setShowmessage(true);
            }
                
        }  
    catch (error) {
        console.log(error);
    }
}
    return <div>
        <center><h1>Travel Buddy</h1>
        <h6>- Find your travel partner!</h6></center>
        {showApplication && ( <div>
            <a className="bss" href="/">&larr;</a>
            <form onSubmit={handleSubmit}>
            <center class="ce"><div class="nos"><label>Name:</label>
        <input type="text" name="fname" id="fname" placeholder="Name" onChange={(e) =>{
            console.log(e.target.value);
            setName(e.target.value)
                }
            }
            required></input></div><br />
        <div class="dos"><label>Age:</label>
        <input type="number" name="age" id="age" placeholder="Age" onChange={(e) =>{
            console.log(e.target.value);
            setAge(e.target.value)
                }
            }
        required></input></div><br />
        <div class="pos"><label>Phone Number:</label>
        <input type="number" name="pnumber" id="pnumber" placeholder="Phone Number" onChange={(e) =>{
            console.log(e.target.value);
            setPhoneNumber(e.target.value)
                }
            }
            required></input></div><br />
        <div class="eos"><label>Email Id:</label>
        <input type="email" name="emailid" id="emailid" placeholder="Email Id" onChange={(e) =>{
            console.log(e.target.value);
            setEmail(e.target.value)
                }
            }
            required></input></div><br />
        <div class="aos"><label>Address:</label>
        <input type="text" name="address" id="address" placeholder="Address" onChange={(e) =>{
            console.log(e.target.value);
            setAddress(e.target.value)
                }
            }
            required></input></div><br />
        <div class="exos"><label>Experience:</label>
        <input type="number" name="experience" id="experience" min="0" max="5" onChange={(e) =>{
            console.log(e.target.value);
            setExperience(e.target.value)
                }
            }
            required></input></div><br />
        <div class="volunteerapplicationsubmitbuttonstyle"><input class="btn btn-primary" type="submit"></input></div>
        <div class="brs"><input class="btn btn-secondary" type="reset"></input></div></center>
        </form>
    </div>
        )
    }
    {showMessage && (
        <div>
            <a className="bss" href="/">&larr;</a>
            <div className="sms">
            <center className="ssms">Your Application has been Submitted <br />
            <br />
            Thank You for Applying as Volunteers ! <br />
            We will contact you with an interview call.</center>
            </div>
        </div>
      )
      }
      {showAgeMessage && (
        <div>
            <div className="agemessagestyle">
                <br />
            <center>Age must be between 25 to 45.</center>
            </div>
            </div>
      )}
      {showPhoneNumberMessage && (
        <div>
            <div className="phonenumbermessage">
                <br />
            <center>Enter valid Phone Number.</center>
            </div>
            </div>
      )}
      </div>
}
export default VolunteerApplication;