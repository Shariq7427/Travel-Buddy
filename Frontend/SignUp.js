import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React from 'react';

function Signup() {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const[password,setPassword] = useState('');
    const [showMessage,setShowMessage]=useState(false);
    const [showSignup,setShowSignup]=useState(true);
    const [showExists,setShowExists]=useState(false);

    const navigate = useNavigate();
    const user = {
        emaildId: email,
        userName: name,
        password: password
    }
    const handleSubmit =  async (e:any) => {
        e.preventDefault();
        try {
            console.log(name);
        axios
      .get(
        "http://localhost:1234/userCheck?username=" +
        name
      )
      .then((res) => {
        console.log(res.data);
        if (res.data == "exists") {
          console.log("exists");
          console.log(name);
            setShowExists(true);
          } else {
            const response = axios.post('http://localhost:1234/signup',user);
                console.log(response.data);
                setShowSignup(false);
                setShowMessage(true);
                //console.log(response.data.accessToken);
                //console.log(JSON.stringify(response.data))
          }
        });

        /*axios
      .get(
        "http://localhost:1234/userCheck?username=" +
        name
      )
      .then((res) => {
        console.log(res.data);
        if (res.data == "exists") {
          console.log("success");
          console.log(name);
        } else {
          console.log("user have no request");
        }
      });*/

        } catch (error) {
            console.log(error);
            }
        }


    return <div>
        <br />
        <center><h1>Travel Buddy</h1>
        <h6>- Find your travel partner!</h6></center>
        {showSignup && <div>
        <center id="centerelements"><form onSubmit={handleSubmit}>
            <div id="eos"><label>Email:</label>
        <input type="email" name="email" id="email" placeholder="Email" onChange={(e) =>{
            console.log(e.target.value);
            setEmail(e.target.value)
        }

    } required></input></div><br />
        <div id="uos"><label>UserName:</label>
        <input type="text" name="uname" id="uname" placeholder="UserName" onChange={(e) =>{
            console.log(e.target.value);
            setName(e.target.value)
        }
        
    } required></input></div><br />
        <div id="pos"><label>Password:</label>
        <input type="password" name="upassword" id="upassword" placeholder="Password" onChange={(e) =>{
            console.log(e.target.value);
            setPassword(e.target.value)
        }
        
    } required></input></div><br />
        <div class="ss"><input class="btn btn-primary" type="submit"></input>
        </div>
        </form>
        </center>
        </div> }
        {showMessage && (
  <div>
    <div className="signupms">
    <center className="signupsms">Successfully Signed Up !<br />
    Try <a className="stls" href="/l">Login to your Account&rarr;</a></center>
    </div>
  </div>
)
}
{showExists && (
    <div>
        <div className="existsms">
        <center className="existssms">The UserName you have entered, already exists <br />
        Try Entering other Name</center>
        </div>
        </div>
)}
    </div>
}
export default Signup;