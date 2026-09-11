import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin, FaFacebook} from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineMarkEmailRead, MdOutlineChevronRight } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { HashLink } from 'react-router-hash-link';
// to make the testimonials link in every other page _ npm install react-router-hash-link


function Footer() {
    return (
        <footer style={{
    backgroundColor: '#0d0e11',
    color: 'white',
    paddingTop: '50px',
    paddingBottom: '20px',
    borderTop: '2px solid #25447d',
    // marginTop:'800px',
    zIndex: '10'
        }}>
            <div className="footersection">
                {/* Main Footer Row: 1 column on mobile, 4 columns on desktop */}
                <div className="row mx-2">
                    
                    {/* Column 1: Brand Info */}
                    <div className="col-12 col-lg-3 col-md-6 mb-4 ">
                        <h4 style={{ fontWeight: 'bold', color: '#3498db' }}>SOTECH IT SOLUTIONS</h4>
                        <p style={{ fontSize: '14px', color: '#bdc3c7', lineHeight: '1.6' }}>
                            Providing cutting-edge IT infrastructure, software delivery, and tech support for schools and corporate organizations.
                        </p>
                        <div className="d-flex gap-3 mt-3">
                            <FaFacebook size={20} />
                            <BsTwitterX size={20} />
                            <FaLinkedin size={20} />
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div className="col-12 col-lg-3 col-md-6 mb-4 text-center text-lg-start">
                        <h5 style={{ fontWeight: 'bold', borderBottom: '1px solid #25447d', paddingBottom: '10px' }}>Our Services</h5>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
                            <li className="my-2"><MdOutlineChevronRight color="#3498db" /> Managed IT Support</li>
                            <li className="my-2"><MdOutlineChevronRight color="#3498db" /> Software Engineering</li>
                            <li className="my-2"><MdOutlineChevronRight color="#3498db" /> Automation</li>
                            <li className="my-2"><MdOutlineChevronRight color="#3498db" /> IT Consulting</li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="col-12 col-lg-3 col-md-6 mb-4 text-center text-lg-start">
                        <h5 style={{ fontWeight: 'bold', borderBottom: '1px solid #25447d', paddingBottom: '10px' }}>Quick Links</h5>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
                            <li className="my-2"><Link to="/" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Home</Link></li>
                              <Link to="/AboutUs" style={{ color: '#bdc3c7', textDecoration: 'none' }}> 
                            <li className="my-2">About Us</li>
                            </Link>
                            <li className="my-2"><Link to="/case-studies" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Case Studies</Link></li>
                            {/* <li className="my-2"><a href="#testimonials" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Testimonials</a></li> */}
                             <li className="my-2">
                                          <HashLink 
                              smooth 
                              to="/#testimonials" 
                              style={{ color: '#bdc3c7', textDecoration: 'none' }}
                            >
                              Testimonials
                            </HashLink>
                            </li>
                           <Link to="/privacy" style={{ color: '#bdc3c7', textDecoration: 'none' }}> 
                           <li className="my-2">Privacy Policy</li>
                           </Link>
                             </ul>
                    </div>

                    {/* Column 4: Reach Out */}
                    <div className="col-12 col-lg-3 col-md-6 mb-4 text-center text-lg-start">
                        <h5 style={{ fontWeight: 'bold', borderBottom: '1px solid #25447d', paddingBottom: '10px' }}>Contact Us</h5>
                        <p style={{ fontSize: '14px', color: '#bdc3c7' }}>
                            <IoLocationOutline color="#3498db" /> Lagos, Nigeria
                        </p>
                        <p style={{ fontSize: '14px' }}>
                            <IoCallOutline color="#3498db" /> <a href="tel:+2348108594858" style={{ color: '#bdc3c7', textDecoration: 'none' }}>08108594858</a>
                        </p>
                        <p style={{ fontSize: '14px' }}>
                            <MdOutlineMarkEmailRead color="#3498db" /> <a href="mailto:sotechitsolutions@gmail.com" style={{ color: '#bdc3c7', textDecoration: 'none' }}>sotechitsolutions@gmail.com</a>
                        </p>
                        <p style={{ fontSize: '14px', backgroundColor: '#25d366', display: 'inline-block', padding: '5px 10px', borderRadius: '5px' }}><a href="https://wa.me/2348108594858?text=Hi%20SoTech%2C%20I%20have%20an%20inquiry."
           
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} 
            style={{textDecoration:'none', color: '#bdc3c7'}}><FaWhatsapp /> Chat with Support</a>
                        </p>
                    </div>
                </div>

                <hr style={{ backgroundColor: '#25447d', height: '1px', border: 'none' }} />

                {/* Copyright Bottom Row */}
                <div className="row">
                    <div className="col-12 text-center">
                        <p style={{ fontSize: '12px', color: '#7f8c8d' }}>
                            &copy; {new Date().getFullYear()} SOTECH IT SOLUTIONS. All Rights Reserved. Built for Excellence.
                        </p>
                    </div>
                </div>
            </div> 
        </footer>
       
    );
}

export default Footer;