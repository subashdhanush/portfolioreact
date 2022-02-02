import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Link,Route,Switch} from "react-router-dom";
import 'animate.css';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Navbar, Nav, Form, FormControl, NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import HtmlIcon from '@mui/icons-material/Html';




// import GitHubIcon from '@mui/icons-material/GitHub';
// import { View } from "react-native";

function App() {
  return (
    <div className="App">
    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavBar">
           <span class="navbar-toggler-icon"></span>
          </button> */}
          <div col="row">        
    {/* <div class="py-3 nav text-uppercase justify-content-center navbar-expand-lg"> */}
    <div class="py-3 nav text-uppercase  navbar-expand-lg">  
    <Nav> 
    <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/skills">Skills</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/projects"><i class="fa fa-address-book-o" aria-hidden="true"></i>
Projects</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav.Item>
    {/* <Nav.Item>
    <p><span class="text-light">Subash D</span></p>  
    </Nav.Item> */}
    </Nav>
    </div>
    <div>
    </div>  
      <Switch>
       <Route exact path="/home">
       <Home/>  
      </Route>
      <Route exact path="/about">
       <About/>  
      </Route><Route exact path="/skills">
       <Stackk/>  
      </Route><Route exact path="/projects">
       {/* <Projects/>   */}
      </Route><Route exact path="/contact">
       <Contactnew/>  
      </Route>
      </Switch>
    </div>
 
          {/* <AppBar className="app-name" style={{minHeight:"1vh"}}>
          <Toolbar className='main-menu'>
           <Link exact to="/">
     <p className="menu-link">Home</p>
   </Link>  
          <Link to="/about">
     <p className="menu-link">About</p>
   </Link>
   <Link to="/skills">
     <p className="menu-link">Skills</p>
   </Link>
   <Link to="/projects">
     <p className="menu-link">Projects</p>
   </Link>
   <Link to="/contact">
     <p className="menu-link">contact</p>
   </Link>
          </Toolbar>
     </AppBar>
     <Switch>
     <Route  exact path="/">
     <Home/>
     </Route>   
     <Route  exact path="/about">
     <About/>
     </Route>   
     <Route exact path="/contact">
     <Contact2/>
     </Route> 
     <Route exact path="/skills">
     <Stackk/>
     </Route> 
     </Switch> */}
    </div>
  );
  function Home()
  {
   return(
    <div class="container py-5 text-center">
   <div className='name-container text-center'>
   {/* <h1 className='name-container1 fw-bold text-center text-start'>Hi there,</h1>
   <h1 className='name-container2 fw-bold text-center text-start'>I'm Subash D.</h1>
   <h1 className='name-container3 fw-bold text-center text-start'>I'm a Full-Stack Developer</h1> */}
   <h1 className='name-container1 fw-bold  text-start'>Hi there,</h1>
   <h1 className='name-container2 fw-bold  text-start'>I'm Subash D.</h1>
   <h1 className='name-container3 fw-bold  text-start'>I'm a Full-Stack Developer</h1>
   {/* <div class="text-center"> */}
   <div class="text-start">  
   <Button variant="contained" className='resumebutton'  size="large">Resume</Button>
   {/* <Button variant="primary" size="lg" className="d-grid">Resume</Button> */}
   </div>
   </div>
   </div> 
   );
  }
 function About()
 {
 return(
 <div class="container p-5 mt-5"> 
<div class="row">
<div class="col">
 <div className='homepage'>
{/* <h1 id="name">Subash D: Web Developer</h1> */}
<h3 class="describe">My name is Subash D and Iam a Full Stack Developer and a tenacity to adapt and learn.Iam a lif-long creative with a dedication to process and craft.
I love working on a variety of technologies including Web Development, Mobile App Development and Deep Learning. My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience.
</h3>
 </div>
</div> 
</div>
</div>  
 );
 }
 
function Stackk()
{
  const [techcode,settechcode]=useState([]);
  const technologies=[
    {
     name:"HTML", 
     image:"https://yodkwtf.com/static/media/html.c1bb84e0.svg",
    },
    {
      name:"CSS", 
     image:"https://yodkwtf.com/static/media/css.3ec32022.svg",
    },
    {
      name:"Java Script", 
     image:"https://yodkwtf.com/static/media/javascript.081325c6.svg",
    },
    {
      name:"React",
     image:"https://yodkwtf.com/static/media/react.a060cbe8.svg",
    },
    {
      name:"Node", 
     image:"https://yodkwtf.com/static/media/node.cccdafa9.svg", 
    },
    {
      name:"Mongo DB", 
     image:"https://yodkwtf.com/static/media/mongo.3beac5ba.svg", 
    } 
   ];
return(  
<div className='Stack-back'>
{/* {technologies.map((str)=>(
  <Skills str={str}/>
))} */}
<CardContent>  
{/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={24}> */}
 <div class="container skill-bg">
 {/* <div class="container">   */}
 {/* <div class="col-12 col-md-4"> */}
 <div class="col py-5">      
 <div class="row py-5 pl-5 justify-content-between">
 {/* <div class="row">   */}
 <div class="col-3 skill-icon"><h3><img src="https://yodkwtf.com/static/media/html.c1bb84e0.svg"/></h3></div>
 <div class="col-3 skill-icon"><h3><img src="https://yodkwtf.com/static/media/css.3ec32022.svg"/></h3></div>
 <div class="col-3 skill-icon"><h3><img src="https://yodkwtf.com/static/media/javascript.081325c6.svg"/></h3></div>
 <div class="col-3 skill-icon"><h3><img src="https://yodkwtf.com/static/media/react.a060cbe8.svg"/></h3></div>
 </div>
 </div>
 {/* <div class="col-12 col-md-4">   */}
<div class="row py-5 pl-5 m-5">
 <div class="col skill-icon"><h3><img src="https://yodkwtf.com/static/media/node.cccdafa9.svg"/></h3></div>
 <div class="col skill-icon"><h3><img src="https://yodkwtf.com/static/media/mongo.3beac5ba.svg"/></h3></div>
{/* </div> */}
</div>
</div> 
    {/* </Stack> */}
</CardContent>     
{/* <h2 className='tech'>Here are a few technologies that I work with:-</h2> */}
    </div>     
);
}
function Skills({str})
{
 return(
 <div className='skill-container'>
   <img className="skill-image img-fluid" alt="image" src={str.image}/>
   {/* <h2>{str.name}</h2> */}
   {/* <h2 className='skill-name'>{str.name}</h2> */}
   </div>
 );
}
function Contact()
{
  
 return(
    <CardContent>       
<div className="contact-container">  
  <h1 id="contactt">Get in touch</h1>
  <h3 class="communicate">As of now, I'm not looking for any new job opportunities, but my inbox is always open
if you want to communicate with me. Hit me up if you have some question, want a
collaboration or just play a game of chess. I'll try to get back to you as soon as I can.</h3>  
 <Stack direction={{ xs: 'column', sm: 'row' }}  spacing={20} className='social'>
 <EmailIcon color="secondary" size="large"/>subashdhanush1618@gmail.com
 <GitHubIcon color="black" size="large"/>subashdhanush
 <CallIcon color="error" size="large"/>9787968375
 </Stack>
 </div>
 </CardContent>   
 ); 
}
function Contact2()
{
return(
<div className='contact2-container'>
<h2 className='span-contact'>Get in Touch</h2>
<h2>Let me build the website you need & </h2>
<h2>Let's build something great!</h2>
<card className='contact-name'>
  <div className="flex">
  <div className="left">
  <Name/> <Address/><Phone/>
  </div>
  <div className="right">
  <Mail/><Github/>
  </div>
  </div>
</card>
</div> 
);
}
function Contactnew()
{
 return(
   <div class="container py-4 font-weight mb-5">
<div class="text-center">
 <h2 className='span-contact'>Get in Touch</h2>
<h2>Let me build the website you need & </h2>
<h2>Let's build something great!</h2>
<p class="text-center mt-5 mb-5 oppty">As of now, I'm not looking for any new job opportunities, but my inbox is always open if you want to communicate with me.</p> 
</div>
 <div class="row mt-5">
 {/* <div class="col bg  p-5"> */}
 <div class="col mb-5 contact-animation">
<h3 class="fw-bold"><PersonIcon className='personicon2'/>Subash D</h3>
<h3 class="fw-bold"><LocationOnIcon className='homeicon '/>Usilampatti,Madurai</h3>
<h3 class="fw-bold"><PhoneAndroidIcon className='phoneicon '/>9787968375</h3>
 </div>
 {/* <div class="col bg1"><h3>Mail me for any other Queries</h3> */}
 <div class="col bl-5 mr-5 bx fw-bolder mgh-animation"><h3 class="fw-bold work">Mail me for any other Queries</h3>
 <a href="mailto:subashdhanush1618@gmail.com" class="text-decoration-none">
 <h3>subashdhanush1618@gmail.com</h3>
 </a>
 <h3 class="fw-bold work">See my works on Github</h3>
 <a href="https://github.com/subashdhanush" target="_blank" class="text-decoration-none">
 <h3>subashdhanush</h3>
 </a>
 </div>
 </div>
 {/* <blockquote class="blockquote text-center mt-5 mb-5">As of now, I'm not looking for any new job opportunities, but my inbox is always open if you want to communicate with me.</blockquote> */}
 </div>
 );
}

function Name()
{
 return(
 <div className="address-container">
 <PersonIcon className='personicon'/>
 {/* <h3>Name:</h3> */}
<h3>Subash D</h3>
 </div>
 );
}
function Address()
{
 return(
 <div className='add-container'>
   {/* <HomeIcon className='homeicon'/> */}
   <LocationOnIcon className='homeicon'/>
   <h3>Usilampatti</h3>
   <h3>Madurai</h3>
 </div>
 );
}
function Phone()
{
 return(
   <div className='phone-container'>
   <PhoneAndroidIcon className='phoneicon'/>
   <h3>9787968375</h3>
   </div>
 ); 
}
function Mail()
{
  return(
    <div className='mail-container'>
  <h2>Mail me for any other queries</h2>    
  {/* <h2><MailOutlineIcon className='mailicon'/> subashdhanush1618</h2> */}
  <h2>
  <a href="mailto:subashdhanush1618@gmail.com" className='mailicon'>
  <MailOutlineIcon className='mailicon'/> subashdhanush1618  
  </a>
  </h2> 
    </div>
  );
}
function Github()
{
  return(
    <div className='github-container'>
            <h3>See my works on Github</h3>
      {/* <h2><GitHubIcon className="githubicon"/>   subashdhanush</h2> */}
      <a href="https://github.com/subashdhanush" className="githubicon" target="_blank">
      <h2><GitHubIcon className="githubicon"/>   subashdhanush</h2>   
      </a>
    </div>
  );
}
}

export default App;