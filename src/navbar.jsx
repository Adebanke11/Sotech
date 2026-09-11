import { Link } from 'react-router-dom';
import { LuFacebook } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import image from './assets/logo.png';
import { HashLink } from 'react-router-hash-link';
import {MdOutlineChevronRight } from "react-icons/md";
// to make the testimonials link in every other page _ npm install react-router-hash-link

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg"
        style={{
            backgroundColor:'#1f3a69', fontColor:'#0f172a', /* 1. Transparent background with a blur effect */
  backgroundColor: 'rgba(255, 255, 255, 0.7)', 
  backdropFilter: 'blur(15px)',
  WebkitBackdropFilter: 'blur(15px)', // Safari Support
  /* 2. Ultra-thin border for a "crisp" tech look */
  borderBottom: '1px solid rgba(226, 232, 240, 0.5)',
  /* 3. Sticky positioning */
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  padding: '5px 0',
  transition: 'all 0.3s ease'
        }}>
      <div className="container-fluid">
        <img src={image} alt="Sotech logo design" className="img-fluid"
 style={{ width:'100px'}}/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        style={{
            backgroundColor:'#010529'
        }}>
          <div className="offcanvas-header">
          <img src={image} alt="Sotech logo design" className="img-fluid"
 style={{ width:'100px'}}/>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                {/* The Home link */}
          <Link className="nav-link" to="/" style={{ color: '#0f172a' }}><MdOutlineChevronRight color="#3498db" />Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Service" style={{ color: '#0f172a' }}><MdOutlineChevronRight color="#3498db" />Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs" style={{ color: '#0f172a' }}><MdOutlineChevronRight color="#3498db" />About</Link>
              </li>
              
             
              
               <li className="nav-item">
              <HashLink 
  smooth 
  to="/#testimonials" 
  className="nav-link"
  style={{ color: '#0f172a' }}
>
 <MdOutlineChevronRight color="#3498db" />Testimonials
</HashLink>
</li>
              {/* for small screens */}
              
              <li className="  nav-item d-lg-none  d-sm-block">
              <Link className="nav-link" to="/book-service"><MdOutlineChevronRight color="#3498db" />Book a Service</Link>
              </li>
              
              {/*  */}
            </ul>
          </div>
          {/* for desktop only */}
          <div className="d-none d-lg-block" style={{ marginTop:'20px'}}>
            <ul style={{display:'flex', justifyContent:'center', listStyle:'none', gap:'15px'}}>
              <li className="text-white service-transition"><Link className="nav-link2" to="/book-service" style={{textDecoration:'none'}}>Book a Service</Link></li>
              {/* <li className="text-white"><a  href="#" style={{textDecoration:'none', color:'#0f172a'}}><LuFacebook size={24}/></a></li> */}
              {/* <li className="text-white"><a  href="#" style={{textDecoration:'none', color:'#0f172a'}}><FaLinkedin size={24}/></a></li>
              <li className="text-white"><a  href="#" style={{textDecoration:'none', color:'#0f172a'}}><BsTwitterX size={24}/></a></li>
            */}
            </ul> 
          </div>
          </div>
        </div>
      </div>
    </nav>
    );
}
export default Navbar;