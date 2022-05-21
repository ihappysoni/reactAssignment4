
import './App.css';
import Students from './components/Students'
import ContactUs from './components/ContactUs'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    
      <div class="navbar navbar-expand-lg bg-dark" id='navBar'>
          <div><button className='btn btn-outline-success'><Link to="/">Home</Link> </button></div>
          <div><button className='btn btn-outline-primary'><Link to={'/students'}>Student</Link> </button></div>
          <div><button className='btn btn-outline-warning'><Link to={'contactus'}>Contact Us</Link> </button></div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
