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
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { View } from "react-native";











function App() {
  return (
    <div className="App">
          <AppBar className="app-name" style={{minHeight:"1vh"}}>
          <Toolbar className='main-menu'>
           {/* <Stack direction={{ xs: 'row'}}  spacing={50}> */}
           {/* <Stack direction={{ xs: 'row'}}  spacing={20}>  */}
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
   {/* </Stack> */}
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
     {/* <Contact/> */}
     <Contact2/>
     </Route> 
     <Route exact path="/skills">
     <Stackk/>
     </Route> 
     </Switch>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home/> */}
    </div>
  );
  function Home()
  {
   return(
   <div className='name-container'>
   <h1 className='name-container1'>Hi there,</h1>
   <h1 className='name-container2'>I'm Subash D.</h1>
   <h3 className='name-container3'>I'm a Full-Stack Developer</h3>
   {/* <button className='resumebutton'>Resume</button> */}
   <Button variant="contained" className='resumebutton' size="large">Resume</Button>
   </div>
   );
  }
 function About()
 {
 return(
  <CardContent>   
 <div className='homepage'>
<h1 id="name">Subash D: Web Developer</h1>
<h3 class="describe">My name is Subash D and Iam a Full Stack Developer and a tenacity to adapt and learn.Iam a lif-long creative with a dedication to process and craft.
I love working on a variety of technologies including Web Development, Mobile App Development and Deep Learning. My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience.
</h3>
 </div>
 </CardContent>
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
{/* <h2 className='tech'>Here are a few technologies that I work with:-</h2> */}
{technologies.map((str)=>(
  <Skills str={str}/>
))}
{/* <CardContent>  
<Stack direction={{ xs: 'column', sm: 'row' }} spacing={24}>
<h3><img src="https://yodkwtf.com/static/media/html.c1bb84e0.svg"/>HTML</h3>
<h3><img src="https://yodkwtf.com/static/media/css.3ec32022.svg"/>CSS</h3>
<h3><img src="https://yodkwtf.com/static/media/javascript.081325c6.svg"/>JS</h3>
<h3><img src="https://yodkwtf.com/static/media/react.a060cbe8.svg"/>REACT</h3>
<h3><img src="https://yodkwtf.com/static/media/node.cccdafa9.svg"/>NODE</h3>
<h3><img src="https://yodkwtf.com/static/media/mongo.3beac5ba.svg"/>MONGO DB</h3>
    </Stack>
</CardContent>      */}
{/* <h2 className='tech'>Here are a few technologies that I work with:-</h2> */}
    </div>     
);
}
function Skills({str})
{
 return(
 <div className='skill-container'>
 <card>
  <CardContent>
   <img className="skill-image" alt="image" src={str.image}/>
   {/* <h2>{str.name}</h2> */}
   {/* <h2 className='skill-name'>{str.name}</h2> */}
  </CardContent> 
 </card>
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
{/* <span><h1 className='span-contact'>Contact me</h1></span> */}
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
{/* <card className="mail-container">
</card>  */}
</div>
)
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