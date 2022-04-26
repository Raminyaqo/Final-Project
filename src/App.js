import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience';
import Services from './components/Services'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
 return(
   <div className='container-fluid'>
   <Navbar/>
   <Header/>
   <AboutMe/>
   <Experience/>
   <Services/>
   <Contact/>
   <Footer/>
   </div>
 );
   
  
}

export default App;
