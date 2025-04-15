import "./AdminLogin.css"
import { useState } from "react";
import axios from "axios";
import travelbuddy_6 from "../Images/travelbuddy-6.png";
import travelbuddy_7 from "../Images/travelbuddy-7.jpg";
function AdminLogin() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [adminEmailId,setAdminEmailId]=useState('');
    const [adminName,setAdminName]=useState('');
    const [adminPassword,setAdminPassword]=useState('');

    const[showLogin,setShowLogin]=useState(true);
    const[showMessage,setShowMessage]=useState(false);
    const[showAdmin,setShowAdmin]=useState(false);
    const[showAdminIcon,setShowAdminIcon]=useState(false);
    const[showAdminProfile,setShowAdminProfile]=useState(false);
    const[showTourGuideAdd,setShowTourGuideAdd]=useState(false);
    const[showTourGuideAddMessage,setShowTourGuideAddMessage]=useState(false);
    const[showCarDetailsAdd,setShowCarDetailsAdd]=useState(false);
    const[showCarDetailsAddMessage,setShowCarDetailsAddMessage]=useState(false);
    const[showDriverDetailsAdd,setShowDriverDetailsAdd]=useState(false);
    const[showDriverDetailsAddMessage,setShowDriverDetailsAddMessage]=useState(false);
    const[showAdminAdd,setShowAdminAdd]=useState(false);
    const[showAdminAddMessage,setShowAdminAddMessage]=useState(false);
    const[showTourGuideAddAgeMessage,setShowTourGuideAddAgeMessage]=useState(false);
    const[showTourGuideAddPhoneNumberMessage,setShowTourGuideAddPhoneNumberMessage]=useState(false);
    const[showCarDetailsAddCarNumberMessage,setShowCarDetailsAddCarNumberMessage]=useState(false);
    const[showCarDetailsAddYearOfPurchaseMessage,setShowCarDetailsAddYearOfPurchaseMessage]=useState(false);
    const[showDriverDetailsAddAgeMessage,setShowDriverDetailsAddAgeMessage]=useState(false);
    const[showDriverDetailsAddPhoneNumberMessage,setShowDriverDetailsAddPhoneNumberMessage]=useState(false);

    const[tgname,setTGName]=useState('');
    const[tgage,setTGAge]=useState('');
    const[tgphoneNumber,setTGPhoneNumber]=useState('');
    const[tgemail,setTGEmail]=useState('');
    const[tgaddress,setTGAddress]=useState('');
    const[tgexperience,setTGExperience]=useState('');

    const[carNumber,setCarNumber]=useState('');
    const[company,setCompany]=useState('');
    const[model,setModel]=useState('');
    const[color,setColor]=useState('');
    const[yearOfPurchase,setYearOfPurchase]=useState('');

    const[ddname,setDDName]=useState('');
    const[ddage,setDDAge]=useState('');
    const[ddphoneNumber,setDDPhoneNumber]=useState('');
    const[ddemail,setDDEmail]=useState('');
    const[ddaddress,setDDAddress]=useState('');
    const[ddexperience,setDDExperience]=useState('');

    const aapplication = {
        emailId: adminEmailId,
        userName: adminName,
        password: adminPassword
    }

    const tgapplication = {
        tourGuideName: tgname,
        age: tgage,
        phoneNumber: tgphoneNumber,
        emailId: tgemail,
        address: tgaddress,
        experience: tgexperience
    }

    const cdapplication = {
        carNumber: carNumber,
        company: company,
        model: model,
        color: color,
        yearOfPurchase: yearOfPurchase
    }

    const ddapplication = {
        driverName: ddname,
        age: ddage,
        phoneNumber: ddphoneNumber,
        emailId: ddemail,
        address: ddaddress,
        experience: ddexperience
    }

    const handleASubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:1234/addAdmin',aapplication);
            console.log(response);

            console.log(response.data);

            console.log(response.data);

            console.log("success");
            setShowAdminAdd(false);
            setShowAdminAddMessage(true);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleTGSubmit = async (e) => {
        e.preventDefault();
        setShowTourGuideAddAgeMessage(false);
        setShowTourGuideAddPhoneNumberMessage(false);
        try {
            if(tgage<25 || tgage>45)
            {
                console.log("Age must be between 25 to 45.");
                setShowTourGuideAddAgeMessage(true);
            }
            else if(tgphoneNumber<6000000000 || tgphoneNumber>9999999999)
                {
                    console.log("Enter valid Phone Number.");
                    setShowTourGuideAddPhoneNumberMessage(true);
            }
            else {
            const response = await axios.post('http://localhost:1234/tourGuides',tgapplication);
            console.log(response)
            
            console.log(response.data);
                
                console.log("success");
                setShowTourGuideAdd(false);
                setShowTourGuideAddMessage(true);
                //setShowmessage(true);
            }
                
        }  
    catch (error) {
        console.log(error);
    }
}

const handleCDSubmit = async (e) => {
    e.preventDefault();
    setShowCarDetailsAddCarNumberMessage(false);
    setShowCarDetailsAddYearOfPurchaseMessage(false);
    try {
        const pattern = /^TS(0[0-9]|1[0-9]|20)[A-Z]{2}\d{4}$/;
        if(!pattern.test(carNumber)) {
            console.log("Enter valid Car Number.");
            setShowCarDetailsAddCarNumberMessage(true);
        }
        else if(yearOfPurchase<2020 || yearOfPurchase>2024) {
            console.log("Year of Purchase must be between 2020 to 2024.");
            setShowCarDetailsAddYearOfPurchaseMessage(true);
        }
        else {
        const response = await axios.post('http://localhost:1234/cars',cdapplication);
        console.log(response)
        
        console.log(response.data);
            
            console.log("success");
            setShowCarDetailsAdd(false);
            setShowCarDetailsAddMessage(true);
            //setShowmessage(true);
        }
            
    }  
catch (error) {
    console.log(error);
}
}

const handleDDSubmit = async (e) => {
    e.preventDefault();
    setShowDriverDetailsAddAgeMessage(false);
    setShowDriverDetailsAddPhoneNumberMessage(false);
    try {
        if(ddage<25 || ddage>45)
            {
                console.log("Age must be between 25 to 45.");
                setShowDriverDetailsAddAgeMessage(true);
        }
        else if(ddphoneNumber<6000000000 || ddphoneNumber>9999999999)
        {
            console.log("Enter valid Phone Number.");
            setShowDriverDetailsAddPhoneNumberMessage(true);
        }
        else {
        const response = await axios.post('http://localhost:1234/drivers',ddapplication);
        console.log(response)
        
        console.log(response.data);
            
            console.log("success");
            setShowDriverDetailsAdd(false);
            setShowDriverDetailsAddMessage(true);
            //setShowmessage(true);
        }
            
    }  
catch (error) {
    console.log(error);
}
}




    const handleSubmit = (e) => {
        e.preventDefault();
        setShowMessage(false);
        console.log("name--->" + name);
        console.log("password--->" + password);
        try {
            axios
        .get(
          "http://localhost:1234/adminCheck?username=" +
            name +
            "&password=" +
            password
        )
        .then((res) => {
          console.log(res.data);
          if (res.data == "success") {
            console.log("success");
            console.log(name);
            setShowLogin(false);
            setShowAdmin(true);
            setShowAdminIcon(true);
        } else {
            console.log("user details not found");
            setShowMessage(true);
        }
    });
} catch (error) {
  console.log(error);
}
};
const showProfile = () => {
    setShowAdminIcon(false);
    setShowAdminProfile(true);
  }
  const hideProfile = () => {
    setShowAdminProfile(false);
    setShowAdminIcon(true);
  }
  const showTourGuideAddPage = () => {
    setShowAdmin(false);
    setShowTourGuideAdd(true);
  }
  const tourGuideAddPageBack = () => {
    setShowTourGuideAdd(false);
    setShowTourGuideAddMessage(false);
    setShowAdmin(true);
  }
  const showCarDetailsAddPage = () => {
    setShowAdmin(false);
    setShowCarDetailsAdd(true);
  }
  const carDetailsAddPageBack = () => {
    setShowCarDetailsAdd(false);
    setShowCarDetailsAddMessage(false);
    setShowAdmin(true);
  }
  const showDriverDetailsAddPage = () => {
    setShowAdmin(false);
    setShowDriverDetailsAdd(true);
  }
  const driverDetailsAddPageBack = () => {
    setShowDriverDetailsAdd(false);
    setShowDriverDetailsAddMessage(false);
    setShowAdmin(true);
  }
  const showAdminAddPage = () => {
    setShowAdmin(false);
    setShowAdminAdd(true);
  }
  const adminAddPageBack = () => {
    setShowAdminAdd(false);
    setShowAdminAddMessage(false);
    setShowAdmin(true);
  }
    return <div>
        {showLogin && <div> <br />
        <br />
        <br />
        <center>
          <a className="alhhbs" href="/"><h1>Travel Buddy</h1>
          <h6>- Find your travel partner!</h6></a>
        </center>
        <button className="btn btn-primary ulbs"><a className="ulbts" href="/l">User Login</a></button>
        <br />
        <br />
        <br />
        <form onSubmit={handleSubmit}>
        <div className="allelementscenterstyle">
            <br /><center><h4>Admin Login Page</h4></center>
            <br />
            <br />
        <center><label>AdminName:</label>
        <input type="text" name="name" id="name" placeholder="AdminName" onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
                required></input></center><br />
        <center><label>Password:</label>
        <input type="password" name="password" id="password" placeholder="Password" onChange={(e) => {
                  console.log(e.target.value);
                  setPassword(e.target.value);
                }}
                required></input></center><br />
        <center><input className="btn btn-primary" type="submit"></input></center>
        </div>
        </form>
        </div>
}
{showMessage && <div>
      <div className="acnfms">
        <br />
      <center>Admin Credentials not found</center>
      </div>
      </div>}
      {showAdmin && <div>
        <nav className="apnbs">
            <center><button className="navbarbuttonstyle" onClick={() => showTourGuideAddPage()}>TourGuideDetails Add+</button>
            <button className="navbarbuttonstyle" onClick={() => showCarDetailsAddPage()}>CarDetails Add+</button>
            <button className="navbarbuttonstyle" onClick={() => showDriverDetailsAddPage()}>DriverDetails Add+</button>
            </center>
        </nav>
        {showAdminIcon && <div>
  <button className="apibs" onClick={() => showProfile()}><img className="apis" src={travelbuddy_6} alt="Admin Profile Icon"></img></button>
  </div>}
  <div className="aabms"><center>To Add an Admin <button className="btn btn-outline-primary aabs" onClick={() => showAdminAddPage()}>Click here&rarr;</button></center></div>
  </div>}
  {showAdminProfile && <div>
    <div className="apdhcs">
    <button className="apdcs" onClick={() => hideProfile()}>X</button>
  <div class="card upces" style={{width: "15rem"}}>
    <br />
  <img src={travelbuddy_7} class="card-img-top userprofileimagestyle" alt="User Profile Image"/>
  <div class="card-body">
    <center><h5 class="card-title">{name}</h5>
    <a href="/a" class="btn btn-primary">Logout</a></center>
  </div>
</div>
</div>
  </div>
  }
  {showAdminAdd && <div>
    <button className="adminaddpagebackbuttonstyling" onClick={() => adminAddPageBack()}>&larr;</button>
    <br />
    <br />
    <center><h1>Travel Buddy</h1>
        <h6>- Find your travel partner!</h6></center>
    <div className="aaes"><center><form onSubmit={handleASubmit}>
        <br />
        <br />
        <br />
            <label>Email:</label>
        <input type="email" name="email" id="email" placeholder="Email" onChange={(e) =>{
            console.log(e.target.value);
            setAdminEmailId(e.target.value)
        }

    } required></input><br /><br />
        <label>UserName:</label>
        <input type="text" name="uname" id="uname" placeholder="UserName" onChange={(e) =>{
            console.log(e.target.value);
            setAdminName(e.target.value)
        }
        
    } required></input><br /><br />
        <label>Password:</label>
        <input type="password" name="upassword" id="upassword" placeholder="Password" onChange={(e) =>{
            console.log(e.target.value);
            setAdminPassword(e.target.value)
        }
        
    } required></input><br /><br />
        <input class="btn btn-primary" type="submit"></input>
        </form></center></div>
        </div>
    }
    {showAdminAddMessage && <div>
        <button className="adminaddpagebackbuttonstyling" onClick={() => adminAddPageBack()}>&larr;</button>
        <div className="aams">
            <br />
            <br />
        <center>Admin has been Added Successfully !</center>
        </div>
        </div>}
  {showTourGuideAdd && <div>
    <button className="tourguideaddpagebackbuttonstyling" onClick={() => tourGuideAddPageBack()}>&larr;</button>
    <br />
    <br />
    <center><h1>Travel Buddy</h1>
        <h6>- Find your travel partner!</h6></center>
        <form onSubmit={handleTGSubmit}>
            <div className="tgaes">
                <br />
                <br />
                <br />
        <center><label>Name:</label>
        <input type="text" name="fname" id="fname" placeholder="Name" onChange={(e) =>{
            console.log(e.target.value);
            setTGName(e.target.value)
                }
            }
            required></input><br /><br />
            <label>Age:</label>
        <input type="number" name="age" id="age" placeholder="Age" onChange={(e) =>{
            console.log(e.target.value);
            setTGAge(e.target.value)
                }
            }
        required></input><br /><br />
        <label>Phone Number:</label>
        <input type="number" name="pnumber" id="pnumber" placeholder="Phone Number" onChange={(e) =>{
            console.log(e.target.value);
            setTGPhoneNumber(e.target.value)
                }
            }
            required></input><br /><br />
            <label>Email Id:</label>
        <input type="email" name="emailid" id="emailid" placeholder="Email Id" onChange={(e) =>{
            console.log(e.target.value);
            setTGEmail(e.target.value)
                }
            }
            required></input><br /><br />
            <label>Address:</label>
        <input type="text" name="address" id="address" placeholder="Address" onChange={(e) =>{
            console.log(e.target.value);
            setTGAddress(e.target.value)
                }
            }
            required></input><br /><br />
            <label>Experience:</label>
        <input type="number" name="experience" id="experience" onChange={(e) =>{
            console.log(e.target.value);
            setTGExperience(e.target.value)
                }
            }
            required></input><br /><br />
            <div className="tgasbs"><input className="btn btn-primary" type="submit"></input></div>
            <div className="tgarbs"><input className="btn btn-secondary" type="reset"></input></div></center></div>
        </form>
    </div>}
    {showTourGuideAddMessage && <div>
        <button className="tourguideaddpagebackbuttonstyling" onClick={() => tourGuideAddPageBack()}>&larr;</button>
        <div className="tgams">
            <br />
            <br />
        <center>Tour Guide Details has been Successfully Added!</center>
        </div>
        </div>}
        {showTourGuideAddAgeMessage && <div>
            <div className="tourguideaddagemessagestyle">
                <br />
            <center>Age must be 25 to 45.</center>
            </div>
            </div>}
            {showTourGuideAddPhoneNumberMessage && <div>
                <div className="tourguideaddphonenumbermessagestyle">
                    <br />
                <center>Enter valid Phone Number.</center>
                </div>
                </div>}
        {showCarDetailsAdd && <div>
            <button className="cardetailsaddpagebackbuttonstyling" onClick={() => carDetailsAddPageBack()}>&larr;</button>
    <br />
    <br />
    <center><h1>Travel Buddy</h1>
        <h6>- Find your travel partner!</h6></center>
        <form onSubmit={handleCDSubmit}>
            <div className="cdaems">
                <br />
                <br />
                <br />
        <center><label>Car Number:</label>
        <input type="text" name="carnumber" id="carnumber" placeholder="Car Number" onChange={(e) =>{
            console.log(e.target.value);
            setCarNumber(e.target.value)
                }
            }
            required></input><br /><br />
            <label>Company:</label>
        <input type="text" name="company" id="company" placeholder="Comapany" onChange={(e) =>{
            console.log(e.target.value);
            setCompany(e.target.value)
                }
            }
        required></input><br /><br />
        <label>Model:</label>
        <input type="text" name="model" id="model" placeholder="Model" onChange={(e) =>{
            console.log(e.target.value);
            setModel(e.target.value)
                }
            }
            required></input><br /><br />
            <label>Color:</label>
        <input type="text" name="color" id="color" placeholder="Color" onChange={(e) =>{
            console.log(e.target.value);
            setColor(e.target.value)
                }
            }
            required></input><br /><br />
            <label>Year Of Purchase:</label>
        <input type="number" name="yearofpurchase" id="yearofpurchase" placeholder="Year Of Purchase" onChange={(e) =>{
            console.log(e.target.value);
            setYearOfPurchase(e.target.value)
                }
            }
            required></input><br /><br />
            <div className="cdasbs"><input className="btn btn-primary" type="submit"></input></div>
            <div className="cdarbs"><input className="btn btn-secondary" type="reset"></input></div></center></div>
        </form>
        </div>
            }
            {showCarDetailsAddMessage && <div>
                <button className="cardetailsaddpagebackbuttonstyling" onClick={() => carDetailsAddPageBack()}>&larr;</button>
                <div className="cdams">
                    <br />
                    <br />
                <center>Car Details have been Added Successfully !</center>
                </div>
                </div>}
                {showCarDetailsAddCarNumberMessage && <div>
                    <div className="cardetailsaddcarnumbermessagestyle">
                        <br />
                    <center>Enter valid Car Number.</center>
                    </div>
                    </div>}
                    {showCarDetailsAddYearOfPurchaseMessage && <div>
                        <div className="cardetailsaddyearofpurchasemessagestyle">
                            <center><div className="cardetailsaddyearofpurchasemessagetextstyle">Year of Purchase must be between 2020 to 2024.</div></center>
                            </div>
                        </div>}
                {showDriverDetailsAdd && <div>
                    <button className="driverdetailsaddpagebackbuttonstyling" onClick={() => driverDetailsAddPageBack()}>&larr;</button>
                    <br />
    <br />
    <center><h1>Travel Buddy</h1>
        <h6>- Find your travel partner!</h6></center>
        <form onSubmit={handleDDSubmit}>
            <div className="ddaes">
                <br />
                <br />
                <br />
        <center><label>Name:</label>
        <input type="text" name="fname" id="fname" placeholder="Name" onChange={(e) =>{
            console.log(e.target.value);
            setDDName(e.target.value)
                }
            }
            required></input><br /><br />
            <label>Age:</label>
        <input type="number" name="age" id="age" placeholder="Age" onChange={(e) =>{
            console.log(e.target.value);
            setDDAge(e.target.value)
                }
            }
        required></input><br /><br />
        <label>Phone Number:</label>
        <input type="number" name="pnumber" id="pnumber" placeholder="Phone Number" onChange={(e) =>{
            console.log(e.target.value);
            setDDPhoneNumber(e.target.value)
                }
            }
            required></input><br /><br />
            <label>Email Id:</label>
        <input type="email" name="emailid" id="emailid" placeholder="Email Id" onChange={(e) =>{
            console.log(e.target.value);
            setDDEmail(e.target.value)
                }
            }
            required></input><br /><br />
            <label>Address:</label>
        <input type="text" name="address" id="address" placeholder="Address" onChange={(e) =>{
            console.log(e.target.value);
            setDDAddress(e.target.value)
                }
            }
            required></input><br /><br />
            <label>Experience:</label>
        <input type="number" name="experience" id="experience" min="0" max="5" onChange={(e) =>{
            console.log(e.target.value);
            setDDExperience(e.target.value)
                }
            }
            required></input><br /><br />
            <div className="ddasbs"><input className="btn btn-primary" type="submit"></input></div>
            <div className="ddarbs"><input className="btn btn-secondary" type="reset"></input></div></center></div>
        </form>
        </div>
                    }
                    {showDriverDetailsAddMessage && <div>
                        <button className="driverdetailsaddpagebackbuttonstyling" onClick={() => driverDetailsAddPageBack()}>&larr;</button>
                        <div className="ddams">
                            <br />
                            <br />
                        <center>Driver Details has been Added Successfully !</center>
                        </div>
                        </div>}
                        {showDriverDetailsAddAgeMessage && <div>
                            <div className="driverdetailsaddagemessagestyle">
                                <br />
                            <center>Age must be between 25 to 45.</center>
                            </div>
                            </div>}
                            {showDriverDetailsAddPhoneNumberMessage && <div>
                                <div className="driverdetailsaddphonenumbermessagestyle">
                                    <br />
                                <center>Enter valid Phone Number.</center>
                                </div>
                                </div>}
    </div>
}
export default AdminLogin;