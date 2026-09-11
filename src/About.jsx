import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import image from './assets/sotech_desktop_view.png';
import { MdOutlineChevronRight } from "react-icons/md"   
// { useNavigate }---The  learn more button tells the browser "Go to /about-detail", but your app doesn't know what should show up at that address yet. You must register it in your main App.jsx file.

function About() {
    const navigate = useNavigate(); // 2. ADD THIS LINE HERE (This is the "Value" VS Code is looking for)
    return (
        <div id="about-section" style={{
            padding: '80px 0',
            backgroundColor: '#ffffff'
        }}>
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Left Column: Image */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div style={{
                            position: 'relative',
                            padding: '10px',
                            border: '1px solid #eee',
                            borderRadius: '20px'
                        }}>
                            <img 
                                src={image} 
                                alt="SoTech Desktop View" 
                                style={{
                                    width: '100%',
                                    borderRadius: '15px',
                                    boxShadow: '0px 20px 40px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="col-lg-6 ps-lg-5">
                        <h6 style={{ color: '#3498db', fontWeight: 'bold', letterSpacing: '2px',  textAlign:'center' }}>ABOUT SOTECH</h6>
                        <h5 style={{ fontWeight: 'bold', fontSize: '2 rem', color: '#0d0e11', marginBottom: '20px', textAlign:'center' }}>
                            We Drive Digital Momentum for Modern Businesses
                        </h5>
                        <p style={{ color: '#7f8c8d', lineHeight: '1.8', fontSize: '16px', textAlign:'justify' }}>
                            At SoTech IT Solutions, we specialize in bridging the gap between complex technology and business efficiency. Whether it's through intelligent AI automation or precision hardware repair, we ensure your tech stack is an asset, not a liability.
                        </p>
                        
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                            <li className="mb-2 d-flex align-items-center">
                                <MdOutlineChevronRight color="#3498db" size={20} />
                                <span className="ms-2">Expert Software Engineering & Installation</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                                <MdOutlineChevronRight color="#3498db" size={20} />
                                <span className="ms-2">Advanced AI Workflow Automation</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                                <MdOutlineChevronRight color="#3498db" size={20} />
                                <span className="ms-2">Reliable Hardware Diagnostics & Repair</span>
                            </li>
                        </ul>

                        <button onClick={() => navigate('/about-detail')}
                        style={{
                            // marginTop: '30px',
                            backgroundColor: '#0d0e11',
                            color: 'white',
                            border: 'none',
                            padding: '12px 30px',
                            borderRadius: '5px',
                            margin: '0 auto',
                            fontWeight: 'bold'
                        }}>                           
                            Learn More About Us                         
                        </button>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;