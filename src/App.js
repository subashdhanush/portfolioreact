import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';




function App() {
  return (
    <div className="App">
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
      <Home/>
    </div>
  );
 function Home()
 {
 return(  
 <div className='homepage'>
<h1 id="name">Subash D: Web Developer</h1>
<h1 id="projects">View Projects</h1>
<p class="describe">My name is Subash D and Iam a Full Stack Developer and a tenacity to adapt and learn.Iam a lif-long creative with a dedication to process and craft.
I love working on a variety of technologies including Web Development, Mobile App Development and Deep Learning. My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience.
</p>
{/* <h3>Current Stack:</h3> */}
<Stackk/>
<Contact/>
 </div>
 );
 } 
function Stackk()
{
return(
<div className='Stack-back'>
<h3 id="stack-name">Current Stack:</h3> 
<CardContent>  
<Stack direction="row" spacing={8}>
<Button variant="contained" color="error" size="large">Html</Button>
<Button variant="contained" color="success" size="large">CSS</Button>
<Button variant="contained" color="secondary" size="large">javascript</Button>
<Button variant="contained" color="error" size="large">DOM</Button>
<Button variant="contained" color="success" size="large">React Js</Button>
<Button variant="contained" color="secondary" size="large">My SQL</Button>
<Button variant="contained" color="success" size="large">Mongo Db</Button>
<Button variant="contained" color="error" size="large">Node JS</Button>
    </Stack>
</CardContent>     
    </div>     
);
}
function Contact()
{
 return(
 <div className="contact-container">
  {/* <h3 id="contact">Contact me </h3> */}
  <h3 id="contactt">Get in touch</h3>
  <p class="communicate">As of now, I'm not looking for any new job opportunities, but my inbox is always open
if you want to communicate with me. Hit me up if you have some question, want a
collaboration or just play a game of chess. I'll try to get back to you as soon as I can.</p>        
 <Stack direction="row" spacing={20} className='social'>
 {/* <h3>Mail me for any other further queries</h3>       */}
 <EmailIcon color="secondary" size="large"/>subashdhanush1618@gmail.com
 <GitHubIcon color="black" size="large"/>subashdhanush
 <CallIcon color="error" size="large"/>9787968375
 </Stack>
 </div>
 ); 
}
}

export default App;
