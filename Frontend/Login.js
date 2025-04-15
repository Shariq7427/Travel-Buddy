import { useState ,useEffect} from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import travelbuddy_4 from "../Images/travelbuddy-4.jpg";
import travelbuddy_5 from "../Images/travelbuddy-5.png";
function Login() {
  const [name, setName] = useState(""); // Login Page
  const [password, setPassword] = useState(""); // Login Page
  const [showMessage, setShowMessage] = useState(false); // Login Page
  const [showLogin, setShowLogin] = useState(true); // Login Page

  const [showUser, setShowUser] = useState(false); // User Page

  const [showRequest, setShowRequest] = useState(false); // Request Page
  const [requestf,setRequestf]=useState(''); // Request Page
  const [oTraveler,setOTraveler]=useState('');
  const [tTraveler,setTTraveler]=useState('');
  const [rTourGuideName,setRTourGuideName] = useState('');
  const [rVolunteerName,setRVolunteerName] = useState('');
  const [rCarNumber,setRCarNumber] = useState('');
  const [rDriverName,setRDriverName] = useState('');
  const [showNoR,setShowNoR] = useState(false);
  const [showResponse,setShowResponse] = useState(false);

const [usertrip,setUserTrip] = useState('');

const[showUserIcon,setShowUserIcon]=useState(false);
const[showUserProfile,setShowUserProfile]=useState(false);

const[showNoT,setShowNoT]=useState(false);

const [showDashboard,setShowDashboard] = useState(false);
const [showApplication,setShowApplication] = useState(false);

const[tripJoined,setTripJoined]=useState(false);

// Dashboard Page Variables
const [requestTo,setRequestTo]=useState(''); // Request Page in Notofication Page
const [showInput,setShowInput]=useState(false); // DashBoard Page
const [requestFrom,setRequestFrom]=useState(''); // Request Page in Notofication Page

const [showInvalidUser,setShowInvalidUser]=useState(false);
const [showHasRequest,setShowHasRequest]=useState(false);
const [showOneRequest,setShowOneRequest]=useState(false);
const [showYourselfRequest,setShowYourselfRequest]=useState(false);
const [showRequestSent,setShowRequestSent]=useState(false);
const [showDashboardUserNameMessage,setShowDashBoardUserNameMessage]=useState(false);
const [showFillApplicationMessage,setShowFillApplicationMessage]=useState(false);

// Application Page Variables
const[userName,setUserName]=useState('');
    const[userAge,setUserAge]=useState('');
    const[userGender,setUserGender]=useState('');
    const[userPhoneNumber,setUserPhoneNumber]=useState('');
    const[userEmail,setUserEmail]=useState('');
    const[userAddress,setUserAddress]=useState('');
    const[userPlaceOfVisit,setUserPlaceOfVisit]=useState('');
    const[showSubmittedMessage,setShowSubmittedMessage]=useState(false);
    const[showExists,setShowExists]=useState(false);
    const[showUserApplication,setShowUserApplication]=useState(true);
    const[showFilled, setShowFilled]=useState(false);
    const[showJoined,setShowJoined]=useState(false);
    const[showUserNameMessage,setShowUserNameMessage]=useState(false);
    const[showUserAgeMessage,setShowUserAgeMessage]=useState(false);
    const[showUserPhoneNumberMessage,setShowUserPhoneNumberMessage]=useState(false);

    const application = {
      name: userName,
      age: userAge,
      gender: userGender,
      phoneNumber: userPhoneNumber,
      emailId: userEmail,
      address: userAddress,
      placeOfVisit: userPlaceOfVisit
  }


const request = { // Request Method in Request Page in Notification Page
  requestFrom: requestFrom,
  requestTo: requestTo
}



  // let tourGuideResponse;

  const tripDetails = {
    oTravelerName: oTraveler,
    tTravelerName: tTraveler,
    tourGuideName: rTourGuideName,
    volunteerName: rVolunteerName,
    carNumber: rCarNumber,
    driverName: rDriverName,
}

  const handleRequest = async (e:any) => {
    setShowUser(false);
    setShowNoT(false);
    //e.preventDefault();
    console.log("Username--->"+ name);
    try {
      axios
      .get(
        "http://localhost:1234/requestCheck?username=" +
        name
      )
      .then((res) => {
        console.log(res.data);
        if (res.data == "success") {
              const response = axios.get('http://localhost:1234/requestNotification?username=' + name)
              .then((res) => {
                setShowRequest(true);
                console.log(res.data);
                setRequestf(res.data);
              })
        } else {
          console.log("user have no request");
          setShowNoR(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

const fetchDataAndsetValues = async (e) => {
  try {
    setOTraveler(name);
    setTTraveler(requestf);
    axios.get("http://localhost:1234/randomTourGuide")
      .then((res) => {
        console.log(res.data);
        setRTourGuideName(res.data)
      });
      axios.get("http://localhost:1234/randomVolunteer")
      .then((res) => {
        console.log(res.data)
        setRVolunteerName(res.data)
      });
      axios.get("http://localhost:1234/randomCar")
      .then((res) => {
        console.log(res.data)
        setRCarNumber(res.data)
      });
      axios.get("http://localhost:1234/randomDriver"
      )
      .then((res) => {
        console.log(res.data)
        setRDriverName(res.data)
      });
  }
  catch (error) {
    console.log(error);
  }
};

useEffect (() => {
  setOTraveler(name);
  },[name]);

  useEffect (() => {
    setTTraveler(requestf);
    },[requestf]);

    useEffect (()=> {
      const tourGuideResponse = async () => {
      try {
        const res = await axios.get("http://localhost:1234/randomTourGuide");
          setRTourGuideName(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    tourGuideResponse();
},[] );

useEffect (()=> {
  const volunteerResponse = async () => {
  try {
    const res = await axios.get("http://localhost:1234/randomVolunteer");
    setRVolunteerName(res.data);
  } catch (error) {
    console.log(error);
  }
}
volunteerResponse();
},[] );

useEffect (()=> {
  const carResponse = async () => {
  try {
    const res = await axios.get("http://localhost:1234/randomCar");
    setRCarNumber(res.data);
  } catch (error) {
    console.log(error);
  }
}
carResponse();
},[] );

useEffect (()=> {
  const driverResponse = async () => {
  try {
    const res = await axios.get("http://localhost:1234/randomDriver");
    setRDriverName(res.data);
  } catch (error) {
    console.log(error);
  }
}
driverResponse();
},[] );
  

  const handleYes = async (e) => {
    e.preventDefault();
    console.log(oTraveler);
    console.log(tTraveler);
    try {
        console.log(rTourGuideName);
        console.log(rVolunteerName);
        console.log(rCarNumber);
        console.log(rDriverName);
        await axios
        .delete(
          "http://localhost:1234/deleteapplication?username=" + oTraveler
        )
        .then((res) => {
          console.log("request deleted")
        });
        await axios
        .delete(
          "http://localhost:1234/deleteapplication?username=" + tTraveler
        )
        .then((res) => {
          console.log("request deleted")
        });
        await axios
        .delete(
          "http://localhost:1234/requestResponse?username=" + name
        )
        .then((res) => {
          console.log("request deleted")
        });

fetchDataAndsetValues();

        axios.post('http://localhost:1234/tripdetails',tripDetails)
        .then((res) => {
          console.log(res.data)
        });      
        setShowRequest(false);
        setShowResponse(true);
        setTripJoined(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNo = async (e:any) => {
    try {
      await axios
        .delete(
          "http://localhost:1234/requestResponse?username=" + name
        )
        .then((res) => {
          console.log("request deleted")
        });
        setShowRequest(false);
        setShowResponse(true);
} catch (error) {
  console.log(error);
}
  }


  const navigate = useNavigate(); // Login Page begin
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(false);
    console.log("name--->" + name);
    console.log("password--->" + password);
    try {
      axios
        .get(
          "http://localhost:1234/login?username=" +
            name +
            "&password=" +
            password
        )
        .then((res) => {
          console.log(res.data);
          if (res.data == "success") {
            console.log("success");
            console.log(name);
            // setUserName({name});
            // console.log(username)
            //console.log("iuname:",iuname);
            // navigate("/u/name");
            setShowLogin(false);
            ///setShowUser(true);
            //setShowUserIcon(true);
            axios
      .get("http://localhost:1234/tripCheck?username=" +name)
      .then((res) => {
        console.log(res.data);
        if (res.data == "exists") {
          //const response = axios.get('http://localhost:1234/tripDisplay?username=' + name)
          //.then((res) => {
            console.log(usertrip);
            setShowUser(true);
            setTripJoined(true);
            setShowUserIcon(true);
          //})
        } else {
          console.log("user has not joined any trip");
          setShowNoT(true);
          setShowUserIcon(true);
        }});
          
            // <UserProfile uname={username} />
          } else {
            console.log("user details not found");
            navigate("/l");
            setShowMessage(true);
          }
        });
    } catch (error) {
      console.log(error);
    } // Login Page end

  

    //return <div></div>;
  };

  useEffect(() => {  
    const userTripResponse = async () => {
      try {
        const res = await axios.get('http://localhost:1234/tripDisplay?username=' + name);
        setUserTrip(res.data);
      } catch(error) {
        console.log(error);
      }
    }
    userTripResponse();
  }, [name]);

  const showProfile = () => {
    setShowUserIcon(false);
    setShowUserProfile(true);
  }

  const hideProfile = () => {
    setShowUserProfile(false);
    setShowUserIcon(true);
  }

  const handleExit = () => {
    try {
      axios
      .delete(
        "http://localhost:1234/deletetrip?username=" + name
      )
      .then((res) => {
        console.log("trip deleted")
      });
      setShowUser(false);
      setShowNoT(true);
    } catch (error) {
      console.log(error);
    }    
  }

  // Dashboard Page Methods
const handleDashboard = () => {
  setShowUser(false);
  setShowNoT(false);
  setShowDashboard(true);
}

const handleClick = (value) => {
  setShowInvalidUser(false);
  setShowHasRequest(false);
  setShowOneRequest(false);
  setShowYourselfRequest(false);
  setShowDashBoardUserNameMessage(false);
  setShowInput(true);
  setRequestTo(value);
  console.log('Request To:',value);
};

const okRequest = async () => {
  console.log("Request To:",requestTo);
  console.log("Request From:",requestFrom);
  try {
    if(requestFrom != name)
    {
      console.log("Enter Your UserName.");
      setShowDashBoardUserNameMessage(true);
    }
    else
    {
    console.log(requestFrom);
    axios.get("http://localhost:1234/userCheck?username=" + requestFrom)
  .then((res) => {
    console.log(res.data);
    if (res.data == "exists") {
      axios.get("http://localhost:1234/applicationCheck?username=" + requestFrom)
      .then((res) => {
        console.log(res.data);
        if (res.data == "success") {
      axios.get("http://localhost:1234/requestCheck?username=" + requestTo)
      .then((res) => {
        console.log(res.data);
        if (res.data == "success") {
          console.log("The user has a request from another user");
          setShowInput(false);
          setShowHasRequest(true);
        }
        else {
          axios
          .get("http://localhost:1234/requestOne?username=" + requestFrom)
          .then((res) => {
            console.log(res.data);
            if (res.data == "success") {
              console.log("you have requested another user");
              setShowInput(false);
              setShowOneRequest(true);
            }
            else {
              //axios
          //.get("http://localhost:1234/tripCheck?username=" + requestTo)
          //.then((res) => {
            //console.log(res.data);
            //if (res.data == "exists") {
              //console.log("the user have joined a trip");
              //setShowInput(false);
            //}
            //else {
              //axios
          //.get("http://localhost:1234/tripCheck?username=" + requestFrom)
          //.then((res) => {
            //console.log(res.data);
            //if (res.data == "exists") {
              //console.log("you have joined a trip");
              //setShowInput(false);
            //}
            //else {
              if (requestTo == requestFrom) {
                console.log("you have requested yourself");
                setShowInput(false);
                setShowYourselfRequest(true);
              }
              else {
                const response = axios.post(
                  "http://localhost:1234/requests",request
                )
                .then((res) => {
                console.log(res.data);
                setShowInput(false);
                setShowRequestSent(true);
                });
              }
            //}
          //})}
            //})
            }});
          }});
        }
      else {
        console.log("You have to fill the Application Form first.");
        setShowInput(false);
        setShowFillApplicationMessage(true);
      }
    })}
        else {
          console.log("Enter the valid Username");
          setShowInput(false);
          setShowInvalidUser(true);
        }});
    /*const response = await axios.post(
      "http://localhost:1234/requests",request
    );
    console.log(response);*/
      }
  } catch (error) {
    console.log(error);
  }
}

const [trip, setTrip] = useState([]); //DashBoard Method begin
    useEffect(() => {                              
      fetch("http://localhost:1234/applications")
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);
          setTrip(res);
        })
        .catch((err) => console.log(err));
    }, []);

const handleApplication = () => {
  setShowUser(false);
  setShowNoT(false);
  setShowApplication(true);
}

const handleApplicationSubmit = async (e) => {
  e.preventDefault();
  try {
      /* const response = await axios.post('http://localhost:1234/userapplications',application);
      console.log(response)
      
      console.log(response.data);
          
          console.log("success");
          setShowMessage(true); */
          setShowExists(false);
          setShowFilled(false);
          setShowJoined(false);
          setShowUserNameMessage(false);
          setShowUserAgeMessage(false);
          setShowUserPhoneNumberMessage(false);
          console.log(userName);
          if(userName != name)
            {
              console.log("Enter your UserName.");
              setShowUserNameMessage(true);
            }
            else if(userAge<20 || userAge>40)
            {
              console.log("Your Age must be between 20 to 40");
              setShowUserAgeMessage(true);
            }
            else if(userPhoneNumber<6000000000 || userPhoneNumber>9999999999)
            {
              console.log("Enter Valid Phone Number.");
              setShowUserPhoneNumberMessage(true);
            }
            else {
  axios.get("http://localhost:1234/userCheck?username=" + userName)
  .then((res) => {
      console.log(res.data);
      if (res.data == "exists") {
          console.log("exists");
          axios.get("http://localhost:1234/applicationCheck?username=" + userName)
          .then((res) => {
              console.log(res.data);
              if (res.data == "success") {
                  console.log("you have filled the application");
                  setShowFilled(true);
              }
              else {
                  axios
                  .get("http://localhost:1234/tripCheck?username=" + userName)
                  .then((res) => {
                      console.log(res.data);
                      console.log(userName)
                      if (res.data == "exists") {
                          console.log("exists");
                          console.log("you have joined a trip");
                          setShowJoined(true);
                      }
                      else {
                          const response =  axios.post('http://localhost:1234/userapplications',application);
                          console.log(response)
                          console.log(response.data);
                          console.log("success");
                          setShowUserApplication(false);
                          setShowSubmittedMessage(true);
                          console.log(userName)
                      }
                  }
              );
              //const response =  axios.post('http://localhost:1234/userapplications',application);
              //console.log(response)
              //console.log(response.data);
              //console.log("success");
              //setShowApplication(false);
              //setShowMessage(true);
              //console.log(name)
              }})} else {
          setShowExists(true);
    }});     
  }  
}
catch (error) {
  console.log(error);
}
}

const requestPageBack = () => {
  setShowRequest(false);
  setShowNoR(false);
  setShowResponse(false);
  if(tripJoined==true) {
    setShowUser(true);
  }
  else if(tripJoined==false) {
    setShowNoT(true)
  }
}

const dashboardPageBack = () => {
  setShowDashboard(false);
  if(tripJoined==true) {
    setShowUser(true);
  }
  else if(tripJoined==false) {
    setShowNoT(true);
  }
}

const applicationPageBack = () => {
  setShowApplication(false);
  if(tripJoined==true) {
    setShowUser(true);
    axios
      .get("http://localhost:1234/tripCheck?username=" +name)
      .then((res) => {
        console.log(res.data)});
  }
  else if(tripJoined==false) {
    setShowNoT(true);
  }
}



  
  return (
    <div>
    { showLogin && <div>
      <div class="container">
        <br />
        <br />
        <br />
        <center>
          <a className="hhbs" href="/"><h1>Travel Buddy</h1>
          <h6>- Find your travel partner!</h6></a>
        </center>
        <button className="btn btn-primary albs"><a className="albats" href="/a">Admin Login</a></button>
        <center id="center">
          <form onSubmit={handleSubmit}>
            <div id="us">
              <label>UserName:</label>
              <input type="text" name="uname" id="uid" placeholder="UserName" onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
                required
              ></input>
            </div>
            <br />
            <div id="ps">
              <label>Password:</label>
              <input type="password" name="upassword" id="upassword" placeholder="Password" onChange={(e) => {
                  console.log(e.target.value);
                  setPassword(e.target.value);
                }}
                required
              ></input>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
              <input class="btn btn-primary" type="submit"></input>
            </div>
          </form>
          <br />
          don't have an account? <a href="/s">Create Account&rarr;</a>
        </center>
      </div>
    </div> }
    {showMessage && <div>
      <div className="ucnfms">
        <br />
      <center>User Credentials not found</center>
      </div>
      </div>}
    { showUser && <div>
    <nav className="nsn">
            <button className="nbs" onClick={() => handleRequest()}>Notifications</button>
            <button className="nbs" onClick={() => handleDashboard()}>Dashboard</button>
            <button className="nbs" onClick={() => handleApplication()}>Application</button>
        </nav>
        {showUserIcon && <div>
  <button className="upibss" onClick={() => showProfile()}><img className="upiss" src={travelbuddy_4} alt="User Profile Icon"></img></button>
  </div>}
        <center className="osd"><h1>Trip Details</h1><br />
        {usertrip.map((usertripdetails) => {
       return (
        <div key={usertripdetails.id}>
        Travelers:<br />
        {usertripdetails.oTravelerName}<br />
        {usertripdetails.tTravelerName}<br /><br />
        Tour Guide Name: {usertripdetails.tourGuideName}<br />
        Volunteer Name: {usertripdetails.volunteerName}<br /><br />
        Car No: {usertripdetails.carNumber}<br />
        Driver Name: {usertripdetails.driverName} 
        </div>)
        })}  
        <button className="etbs btn btn-secondary" onClick={() => handleExit()}>Exit Trip</button></center>
    </div> }
    { showRequest && <div>
      {showUserIcon && <div>
  <button className="upibss" onClick={() => showProfile()}><img className="upiss" src={travelbuddy_4} alt="User Profile Icon"></img></button>
  </div>}
      <button className="requestpagebackbuttonstyling" onClick={() => requestPageBack()}>&larr;</button>
      <div className="rbs"><center className="mrs">
        You have a Trip Request from {requestf}</center>
      <button className="ybs btn btn-primary" onClick={(e) => handleYes(e)}>Yes</button>
      <button className="nobs btn btn-secondary" onClick={() => handleNo()}>No</button>
      </div>
      </div> }
      {showNoR && <div>
        {showUserIcon && <div>
  <button className="upibss" onClick={() => showProfile()}><img className="upiss" src={travelbuddy_4} alt="User Profile Icon"></img></button>
  </div>}
        <button className="requestpagebackbuttonstyling" onClick={() => requestPageBack()}>&larr;</button>
        <div className="nrds">
          <br />
          <br />
        <center>You have no Trip Request</center>
        </div>
        </div> }
        {showResponse && (
  <div>
    {showUserIcon && <div>
  <button className="upibss" onClick={() => showProfile()}><img className="upiss" src={travelbuddy_4} alt="User Profile Icon"></img></button>
  </div>}
    <button className="requestpagebackbuttonstyling" onClick={() => requestPageBack()}>&larr;</button>
    <div className="responsems">
    <center className="responsemss">Your Response have been saved !</center>
    </div>
  </div>
)
}
  {showNoT && <div>
    <nav className="nsn">
            <button className="nbs" onClick={() => handleRequest()}>Notifications</button>
            <button className="nbs" onClick={() => handleDashboard()}>Dashboard</button>
            <button className="nbs" onClick={() => handleApplication()}>Application</button>
        </nav>
        {showUserIcon && <div>
  <button className="upibss" onClick={() => showProfile()}><img className="upiss" src={travelbuddy_4} alt="User Profile Icon"></img></button>
  </div>}
    <div className="ntdms">
      <br />
      <br />
      <br />
    <center>You have not Joined any Trip</center>
    </div>
    </div>
    }

    {showDashboard && <div>
      <button className="dashboardpagebackbuttonstyling" onClick={() => dashboardPageBack()}>&larr;</button>
      {showInput && (
  <div>
    <br />
    <br />
    <br />
  <center><label className="uneess">Enter UserName:</label>
    <input className="uneess"
    type="text"
    placeholder="Enter UserName"
    onChange={(e) =>{
      console.log(e.target.value);
      setRequestFrom(e.target.value)
    }
  }
    />
    <button className="btn btn-primary uneess" onClick={okRequest}>Ok</button></center>
  </div>
)
}
{showUserIcon && <div>
  <button className="upibss" onClick={() => showProfile()}><img className="upiss" src={travelbuddy_4} alt="User Profile Icon"></img></button>
  </div>}
{showInvalidUser && <div>
  <br />
  <br />
  <br />
  <div className="iums">
    <br />
            <center>Entered UserName not found. Enter Valid UserName.</center>
            </div>
            </div>}
            {showHasRequest && <div>
              <br />
              <br />
              <br />
              <div className="hasrequestmessagestyle">
                <br />
              <center>The User you have requested has a request from another user, try requesting another user.</center>
              </div>
              </div>}
              {showOneRequest && <div>
                <br />
                <br />
                <br />
                <div className="onerequestmessagestyle">
                  <br />
                <center>You have already requested another user, You can request only one person, wait for their respone.</center>
                </div>
                </div>}
                {showYourselfRequest && <div>
                  <br />
                  <br />
                  <br />
                  <div className="yourselfrequestmessagestyle">
                    <br />
                  <center>You have requested yourself, try requesting another user.</center>
                  </div>
                  </div>}
                  {showRequestSent && <div>
                    <br />
                    <br />
                    <br />
                    <div className="requestsentmessagestyle">
                      <br />
                    <center>Your request has been sent Successfully, wait for the another user's response.</center>
                    </div>
                    </div>}
                    {showDashboardUserNameMessage && <div>
                      <br />
                      <br />
                      <br />
                      <div className="dashboardusernamemessage">
                        <br />
                      <center>Enter Your UserName.</center>
                      </div>
                    </div>}
                    {showFillApplicationMessage && <div>
                      <br />
                      <br />
                      <br />
                      <div className="fillapplicationmessagestyle">
                        <br />
                      <center>You have to fill the Application Form first.</center>
                      </div>
                      </div>}
          <div>
            <br />
            <br />
            <center><h1>Applications of various Users</h1></center>
            <br />
          </div>
          <div className="rounded  shadow p-4 tss">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <center>Id</center>
                  </th>
                  <th scope="col">
                    <center>Name</center>
                  </th>
                  <th scope="col">
                    <center>Age</center>
                  </th>
                  <th scope="col">
                    <center>Gender</center>
                  </th>
                  <th scope="col">
                    <center>Phone Number</center>
                  </th>
                  <th scope="col">
                    <center>Email Id</center>
                  </th>
                  <th scope="col">
                    <center>Address</center>
                  </th>
                  <th scope="col">
                    <center>Place Of Visit</center>
                  </th>
                  <th scope="col">
                    <center>Request</center>
                  </th>
                </tr>
              </thead>
              <tbody>
                {trip.map((tour, index) => (
                  <tr key={index}>
                    <th scope="row">
                      <center>{tour.id}</center>
                    </th>
                    <td>
                      <center>{tour.name}</center>
                    </td>
                    <td>
                      <center>{tour.age}</center>
                    </td>
                    <td>
                      <center>{tour.gender}</center>
                    </td>
                    <td>
                      <center>{tour.phoneNumber}</center>
                    </td>
                    <td>
                      <center>{tour.emailId}</center>
                    </td>
                    <td>
                      <center>{tour.address}</center>
                    </td>
                    <td>
                      <center>{tour.placeOfVisit}</center>
                    </td>
                    <td className="d-flex justify-content-end">
                      <button className="btn btn-outline-primary" onClick={() => handleClick(tour.name)}>Add</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
      }

{showUserProfile && <div>
    <div className="updchs">
    <button className="uphbs" onClick={() => hideProfile()}>X</button>
  <div class="card upces" style={{width: "15rem"}}>
    <br />
  <img src={travelbuddy_5} class="card-img-top userprofileimagestyle" alt="User Profile Image"/>
  <div class="card-body">
    <center><h5 class="card-title">{name}</h5>
    <a href="/l" class="btn btn-primary">Logout</a></center>
  </div>
</div>
</div>
  </div>
  }


      {showApplication && <div>
        <button className="applicationpagebackbuttonstyling" onClick={() => applicationPageBack()}>&larr;</button>
        <br />
        <br />
        <center><h1>Travel Buddy</h1>
        <h6> - Find your travel partner</h6></center>
        {showUserIcon && <div>
  <button className="upibss" onClick={() => showProfile()}><img className="upiss" src={travelbuddy_4} alt="User Profile Icon"></img></button>
  </div>}
        {showUserApplication && <div>
        <form onSubmit={handleApplicationSubmit}>
            <div className="mainboxstyle"><center>
                <br />
                <br />
                <label className="applicationpagefieldelementsstyle">Name(same as username):</label>
                <input className="applicationpagefieldelementsstyle" type="text" name="name" id="name" placeholder="Name" onChange={(e) =>{
            console.log(e.target.value);
            setUserName(e.target.value)
                }
            }
            required></input><br /><br />
                <label className="applicationpagefieldelementsstyle">Age:</label>
                <input className="applicationpagefieldelementsstyle" type="number" name="age" id="age" placeholder="Age" onChange={(e) =>{
            console.log(e.target.value);
            setUserAge(e.target.value)
                }
            }required></input><br /><br />
            <label className="applicationpagefieldelementsstyle">Gender:</label>
            <input className="applicationpagefieldelementsstyle" type="radio" name="gender" id="male" value="Male" onChange={(e) =>{
                console.log(e.target.value);
                setUserGender(e.target.value)
            }
        }
        required 
        /><label>Male</label>
            <input className="applicationpagefieldelementsstyle" type="radio" name="gender" id="female" value="Female" onChange={(e) =>{
                console.log(e.target.value);
                setUserGender(e.target.value)
            }
            }
            required 
            /><label>Female</label><br /><br />
                <label className="applicationpagefieldelementsstyle">Phone Number:</label>
                <input className="applicationpagefieldelementsstyle" type="number" name="pnumber" id="pnumber" placeholder="Phone Number" onChange={(e) =>{
            console.log(e.target.value);
            setUserPhoneNumber(e.target.value)
                }
            }required></input><br /><br />
                <label className="applicationpagefieldelementsstyle">Email Id:</label>
                <input className="applicationpagefieldelementsstyle" type="email" name="emailid" id="emailid" placeholder="Email Id" onChange={(e) =>{
            console.log(e.target.value);
            setUserEmail(e.target.value)
                }
            }required></input><br /><br />
                <label className="applicationpagefieldelementsstyle">Address:</label>
                <input className="applicationpagefieldelementsstyle" type="address" name="address" id="address" placeholder="Address" 
            onChange={(e) =>{
                console.log(e.target.value);
                setUserAddress(e.target.value)
                    }
                }required></input><br /><br />
                <label className="applicationpagefieldelementsstyle">Place of Visit:</label>
                <input className="applicationpagefieldelementsstyle" type="text" name="povisit" id="povisit" placeholder="Place of Visit" onChange={(e) =>{
            console.log(e.target.value);
            setUserPlaceOfVisit(e.target.value)
                }
            }required></input><br /><br />
                <input className="btn btn-primary submitbs" type="submit"></input>
                <input className="btn btn-secondary resetbs" type="reset"></input>
            </center>
            </div>
        </form>
    </div> }
    {showSubmittedMessage && (
        <div>
          {showUserIcon && <div>
  <button className="upibss" onClick={() => showProfile()}><img className="upiss" src={travelbuddy_4} alt="User Profile Icon"></img></button>
  </div>}
            <div className="messagess">
                <br />
            <center className="">Your Application has been Submitted <br />
            <br />
            Thank You for Applying ! <br />
            </center>
            </div>
        </div>
      )
      }
      {showExists && (
    <div>
        <div className="existsss">
            <br />
            <br />
        <center><div className="existsssms"> The UserName you have entered, does not exists <br />
        Try Entering valid Name</div></center>
        </div>
        </div>
)}
{showFilled && (
    <div>
        <div className="filledmessagestyle">
            <br />
            <br />
        <div className="filledmessagesentencestyle">You have already filled the Application, You can fill the Application only once.</div>
        </div>
        </div>
)}
{showJoined && (
    <div>
        <div className="joinedmessagestyle">
            <br />
            <br />
        <center>You have already Joined a Trip, try after returning from the Trip.</center>
        </div>
    </div>
)}
{showUserNameMessage && (
  <div>
    <div className="usernamemessagestyle">
      <br />
    <center>Enter Your UserName.</center>
    </div>
    </div>
)}
{showUserAgeMessage && (
  <div>
    <div className="useragemessagestyle">
      <br />
    <center>Age must be between 20 to 40.</center>
    </div>
    </div>
)}
{showUserPhoneNumberMessage && (
  <div>
    <div className="userphonenumbermessagestyle">
      <br />
    <center>Enter Valid Phone Number.</center>
    </div>
    </div>
)}
</div>
        }
    </div>
  );
}
export default Login;
