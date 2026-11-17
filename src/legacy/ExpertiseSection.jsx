import React from 'react';
import { MdOutlineChevronRight, MdSettingsSuggest, MdComputer, MdAppRegistration } from "react-icons/md";
import { IoHardwareChipOutline, IoBuildOutline } from "react-icons/io5";

function ExpertiseSection() {
    return (
        <div className="expertise" style={{
            padding: '80px 0',
            backgroundColor: '#ffffff',
            color: '#333'
        }}>
            <div className="mx-3">
                {/* Header Row */}
                <div className="row  mb-5">
                    <div className="col-12 text-center">
                        <h6 style={{ color: '#3498db', fontWeight: 'bold', letterSpacing: '2px' }}>OUR SPECIALIZATION</h6>
                        <h5 style={{ fontWeight: 'bold', fontSize: '2 rem', color: '#0d0e11' }}>Precision Engineering. <br /> Intelligent Automation.</h5>
                        <div style={{ width: '60px', height: '4px', margin: "auto", backgroundColor: '#3498db', marginTop: '15px' }}></div>
                    </div>
                </div>

                <div className="row align-items-center">
                    {/* Left Side: Service Cards */}
                    <div className="col-lg-7">
                        <div className="row g-4">
                            {/* Card 1: AI Automation */}
                            <div className="col-md-6">
                                <div style={{
                                    padding: '30px',
                                    borderRadius: '10px',
                                    boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
                                    borderBottom: '4px solid #3498db',
                                    height: '100%'
                                }}>
                                    <MdSettingsSuggest size={40} color="#3498db" />
                                    <h4 className="mt-3" style={{ fontWeight: 'bold' }}>AI Automation</h4>
                                    <p style={{ fontSize: '14px', color: '#7f8c8d' }}>Streamlining business workflows with intelligent AI agents and automated systems.</p>
                                </div>
                            </div>

                            {/* Card 2: Software Engineering */}
                            <div className="col-md-6">
                                <div style={{
                                    padding: '30px',
                                    borderRadius: '10px',
                                    boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
                                    borderBottom: '4px solid #2ecc71',
                                    height: '100%'
                                }}>
                                    <MdAppRegistration size={40} color="#2ecc71" />
                                    <h4 className="mt-3" style={{ fontWeight: 'bold' }}>Software Engineering</h4>
                                    <p style={{ fontSize: '14px', color: '#7f8c8d' }}>Building custom, scalable applications tailored to your specific business needs.</p>
                                </div>
                            </div>

                            {/* Card 3: Hardware Repair */}
                            <div className="col-md-6">
                                <div style={{
                                    padding: '30px',
                                    borderRadius: '10px',
                                    boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
                                    borderBottom: '4px solid #e67e22',
                                    height: '100%'
                                }}>
                                    <IoHardwareChipOutline size={40} color="#e67e22" />
                                    <h4 className="mt-3" style={{ fontWeight: 'bold' }}>Hardware Repair</h4>
                                    <p style={{ fontSize: '14px', color: '#7f8c8d' }}>Expert diagnostics and repair for enterprise servers, laptops, and tech infrastructure.</p>
                                </div>
                            </div>

                            {/* Card 4: Software Installation */}
                            <div className="col-md-6">
                                <div style={{
                                    padding: '30px',
                                    borderRadius: '10px',
                                    boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
                                    borderBottom: '4px solid #9b59b6',
                                    height: '100%'
                                }}>
                                    <IoBuildOutline size={40} color="#9b59b6" />
                                    <h4 className="mt-3" style={{ fontWeight: 'bold' }}>Software Installation</h4>
                                    <p style={{ fontSize: '14px', color: '#7f8c8d' }}>Deploying and configuring essential business software and OS environments.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Checklist (Visible on Desktop) */}
                    <div className="col-lg-5 ps-lg-5 d-none d-lg-block">
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '40px',
                            borderRadius: '15px'
                        }}>
                            <h5 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Why Choose SoTech?</h5>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li className="mb-3 d-flex align-items-center">
                                    <MdOutlineChevronRight color="#3498db" size={24} /> 
                                    <span style={{ marginLeft: '10px' }}>Optimized Business Processes</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <MdOutlineChevronRight color="#3498db" size={24} /> 
                                    <span style={{ marginLeft: '10px' }}>Certified Technical Engineers</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <MdOutlineChevronRight color="#3498db" size={24} /> 
                                    <span style={{ marginLeft: '10px' }}>Fast Turnaround on Repairs</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <MdOutlineChevronRight color="#3498db" size={24} /> 
                                    <span style={{ marginLeft: '10px' }}>Custom AI-Driven Solutions</span>
                                </li>
                            </ul>
                            <div className="mt-4" style={{
                                padding: '15px',
                                backgroundColor: '#eef7fd',
                                borderLeft: '4px solid #3498db',
                                fontSize: '14px',
                                fontStyle: 'italic'
                            }}>
                                "Empowering Lagos businesses with reliable hardware support and future-ready automation."
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpertiseSection;