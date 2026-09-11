import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlinePrecisionManufacturing, MdOutlineAutoGraph, MdOutlineVerifiedUser } from "react-icons/md";
import { IoHardwareChipOutline, IoCodeSlashOutline, IoRocketOutline } from "react-icons/io5";


function AboutDetail() {
    return (
        <div style={{ backgroundColor: '#ffffff', color: '#333', minHeight: '100vh' }}>
            {/* Header Hero Section */}
            <div style={{
                backgroundColor: '#0d0e11',
                padding: '100px 0',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h6 style={{ color: '#3498db', fontWeight: 'bold', letterSpacing: '3px' }}>OUR STORY</h6>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Innovating with Precision</h1>
                    <p style={{ color: '#bdc3c7', maxWidth: '700px', margin: '20px auto' }}>
                        At SoTech IT Solutions, we don't just fix computers; we engineer the future of business efficiency through automation and elite technical support.
                    </p>
                </div>
            </div>

            {/* Our Mission & Vision */}
            <div className="container" style={{ padding: '80px 0' }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4">
                        <h2 style={{ fontWeight: 'bold', color: '#0d0e11' }}>Our Mission</h2>
                        <p style={{ lineHeight: '1.8', fontSize: '17px', color: '#555' }}>
                            SoTech was founded in Lagos with a single goal: to provide world-class IT solutions that are accessible and reliable. We noticed businesses struggling with slow software and failing hardware, so we built a team of experts dedicated to <strong>AI Automation</strong> and <strong>Precision Engineering</strong>.
                        </p>
                        <p style={{ lineHeight: '1.8', fontSize: '17px', color: '#555' }}>
                            Today, we serve schools, corporate offices, and individuals, ensuring their digital momentum never stops.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6">
                                <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '15px', textAlign: 'center' }}>
                                    <h3 style={{ color: '#3498db', fontWeight: 'bold' }}>500+</h3>
                                    <p style={{ fontSize: '14px', marginBottom: 0 }}>Repairs Done</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '15px', textAlign: 'center' }}>
                                    <h3 style={{ color: '#2ecc71', fontWeight: 'bold' }}>20+</h3>
                                    <p style={{ fontSize: '14px', marginBottom: 0 }}>AI Workflows</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Pillars Section */}
            <div style={{ backgroundColor: '#0d0e11', color: 'white', padding: '80px 0' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{ fontWeight: 'bold' }}>The SoTech Pillars</h2>
                        <div style={{ width: '50px', height: '3px', backgroundColor: '#3498db', margin: '15px auto' }}></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <IoHardwareChipOutline size={40} color="#3498db" />
                            <h4 className="mt-3">Hardware Excellence</h4>
                            <p style={{ color: '#bdc3c7', fontSize: '15px' }}>We use genuine parts and advanced diagnostics for every laptop and server repair.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <IoCodeSlashOutline size={40} color="#2ecc71" />
                            <h4 className="mt-3">Clean Code</h4>
                            <p style={{ color: '#bdc3c7', fontSize: '15px' }}>Our software engineering team builds scalable, bug-free applications tailored for you.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <MdOutlineAutoGraph size={40} color="#e67e22" />
                            <h4 className="mt-3">AI First</h4>
                            <p style={{ color: '#bdc3c7', fontSize: '15px' }}>We specialize in automating repetitive business tasks to save you time and money.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Process Section */}
            <div className="container" style={{ padding: '80px 0' }}>
                <div className="text-center mb-5">
                    <h2 style={{ fontWeight: 'bold', color: '#0d0e11' }}>Our Simple Process</h2>
                    <p>How we take you from technical debt to digital growth.</p>
                </div>
                
                
                
                <div className="row text-center">
                    <div className="col-md-3">
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#eee' }}>01</div>
                        <h5 style={{ fontWeight: 'bold' }}>Audit</h5>
                        <p style={{ fontSize: '14px', color: '#7f8c8d' }}>We analyze your current tech bottlenecks.</p>
                    </div>
                    <div className="col-md-3">
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#eee' }}>02</div>
                        <h5 style={{ fontWeight: 'bold' }}>Design</h5>
                        <p style={{ fontSize: '14px', color: '#7f8c8d' }}>We draft your software or repair plan.</p>
                    </div>
                    <div className="col-md-3">
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#eee' }}>03</div>
                        <h5 style={{ fontWeight: 'bold' }}>Deploy</h5>
                        <p style={{ fontSize: '14px', color: '#7f8c8d' }}>Our engineers execute the solution.</p>
                    </div>
                    <div className="col-md-3">
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#eee' }}>04</div>
                        <h5 style={{ fontWeight: 'bold' }}>Support</h5>
                        <p style={{ fontSize: '14px', color: '#7f8c8d' }}>24/7 maintenance for peace of mind.</p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div style={{ padding: '60px 0', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h2 style={{ fontWeight: 'bold' }}>Ready to Scale Your Technology?</h2>
                    <p>Join hundreds of businesses trusting SoTech IT Solutions.</p>
                    <button style={{
                        backgroundColor: '#3498db',
                        color: 'white',
                        border: 'none',
                        padding: '15px 40px',
                        borderRadius: '30px',
                        fontWeight: 'bold',
                        marginTop: '20px',
                        boxShadow: '0px 10px 20px rgba(52, 152, 219, 0.3)'
                    }}>
                        <Link to="/book-service" className='text-decoration-none text-white'>
                        Get Started Today
                        </Link>
                    </button>
                </div>
            </div>
            <div className="container" style={{ textAlign: 'left' }}>
    <Link to="/" style={{ color: '#3498db', textDecoration: 'none', fontSize: '14px' }}>
       ← Back to Home
    </Link>
</div>
        </div>
        
    );
}

export default AboutDetail;