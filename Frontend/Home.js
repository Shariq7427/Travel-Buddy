import "./Home.css";
import travelbuddy_1 from "../Images/travelbuddy-1.jpg";
import travelbuddy_2 from "../Images/travelbuddy-2.jpeg";
import travelbuddy_3 from "../Images/travelbuddy-3.jpg";
import travelbuddy_8 from "../Images/travelbuddy-8.jpeg";
import travelbuddy_9 from "../Images/travelbuddy-9.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function Home() {
    return <div>
        <br />
        <center><h1>Travel Buddy</h1>
        <h6>- Find your travel partner!</h6></center>
        <button className="btn btn-primary lbs"><a className="textbl" href="/l">Login</a></button>
        <button className="btn btn-outline-primary sbs"><a className="textbs" href="/s">Sign Up</a></button>
        <br />
        <br />
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <center><img src={travelbuddy_1} class="d-block ics" alt="Travel Buddy" /></center>
    </div>
    <div className="carousel-item">
      <center><img src={travelbuddy_2} class="d-block ics" alt="Travel Buddy" /></center>
    </div>
    <div className="carousel-item">
      <center><img src={travelbuddy_3} class="d-block ics" alt="Travel Buddy" /></center>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br />
<p className="hpes"> Individuals when they get leave for about 1 week or 10 days, they feel like they need go to a trip. But the
 problem is they are alone. They feel like they need a partner to travel. They want to explore popular places in
 the world. They want to make new friends in the way of travelling. If their friends have no leave, they feel like
 “I want to a Partner to travel” to travel the places that can be covered in 10 days and can be returned to their
 home town. Various Individuals like to travel around the world, but they feel like they are alone and need a partner
 to travel around the world. They try to Search for the partners who are feeling like how they do. They go
 through Web Sites, Newspapers or some tour offices to search for partners who is willing to go on a trip. They
 try to contact their friends or relatives, if they have leave so that they can travel around the world, the places
 that are most popular around the world or new places that they have never went to. In the way of travelling,
 they feel like they can find new friends and can explore new places that they have never went to. Individuals
 want to explore the world with their friends when they get a leave for about 1 week or more than 1 week. In
 the way of travelling, They feel like their mind can get refreshed by travelling and exploring the world. They
 feel like they can gain knowledge in the way of travelling. They feel like Interacting with new people can help
 them to relax their mind and can get refreshed by travelling and exploring popular places in the world. They
 feel like “are there any Websites or Applications that can help in finding a travel partner ?”</p>
 <h4 className="hpes"> We got your Problem</h4>
 <p className="hpes"> This Web Application helps in finding and joining the Individuals who are willing to travel around the world but they
 are alone. This Web Application provides a platform to communicate with each other who want to go to a trip but they
 are alone. This Web Application helps in finding a partner who is going to the same location that the user want to go.
 This Web Application helps in finding a travel partner who helps in exploring the world or the most popular locations
 the world. Individuals who want to go on a trip to similar places at approximately same time. This Web Application
 helps in finding the partner who wants to go to the similar place as the user wants to go. This Web Application can give
 a Tour guide who has a good knowledge on the most popular places in the world. This Web Application can provide a
 Volunteer who takes care of the travelers in their journey of travel. The Volunteers Takes care of Everything
 that the users want. This Project also provides a car for rental with a driver. This Application helps in exploring the
 world with a partner who wants go to similar places and who enjoys a lot in the journey. Many Individuals
 who want to go a trip when they get a leave can get help from this Web Application. Travelers can share the
 trip amount equally between them</p>
 <br />
 <center><h4>How does Travel Buddy work ?</h4>
 <div>
  <table>
    <tr>
      <td>
  <div align="left">
  <img className="hdtbis" src={travelbuddy_8} alt="How Does Travel Buddy work ?"></img>
  </div>
  </td>
  <td>
  <div align="right">
    <center><h5>The Process of Travel Buddy</h5></center>
    <img className="tpotbis" src={travelbuddy_9} alt="The Process of Travel Buddy"></img>
  </div>
  </td>
  </tr>
  </table>
 </div>
 </center>
 <br />
        <div className="hpes">We also hire Volunteers, want to join as a Volunteer?<a className="chl" href="/v">Click Here!&rarr;</a></div>
        <br />
        <center className="aues"><h4>About Us</h4>
        Mohammad Shariq Ali <br />
        Jatroth Shiva <br />
        Nakka Shiva</center>
    </div>
}
export default Home;