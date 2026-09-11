import React from 'react';
import { MdOutlineSecurity, MdOutlineGavel, MdOutlinePrivacyTip } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

function PrivacyPolicy() {
    return (
        <div style={{
            backgroundColor: '#ffffff',
            color: '#333',
            paddingTop: '100px',
            paddingBottom: '80px',
            minHeight: '100vh'
        }}>
            <div className="container">
                {/* Header Section */}
                <div className="row mb-5 text-center">
                    <div className="col-12">
                        <MdOutlinePrivacyTip size={50} color="#3498db" />
                        <h1 style={{ fontWeight: 'bold', marginTop: '20px', color: '#0d0e11' }}>Privacy Policy</h1>
                        <p style={{ color: '#7f8c8d' }}>Last Updated: {new Date().toLocaleDateString()}</p>
                        <div style={{ width: '80px', height: '4px', backgroundColor: '#3498db', margin: '20px auto' }}></div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        
                        {/* 1. Introduction */}
                        <section className="mb-5">
                            <h4 style={{ fontWeight: 'bold', color: '#25447d' }}>
                                <MdOutlineGavel className="me-2" /> 1. Introduction
                            </h4>
                            <p style={{ lineHeight: '1.8' }}>
                                Welcome to <strong>SoTech IT Solutions</strong>. We are committed to protecting your personal information and your right to privacy. This Privacy Policy applies to all information collected through our website and our IT services (including AI Automation, Software Engineering, and Hardware Repair).
                            </p>
                        </section>

                        {/* 2. Information We Collect */}
                        <section className="mb-5">
                            <h4 style={{ fontWeight: 'bold', color: '#25447d' }}>
                                <MdOutlineSecurity className="me-2" /> 2. Information We Collect
                            </h4>
                            <p style={{ lineHeight: '1.8' }}> We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services. This includes:</p>
                            <ul style={{ lineHeight: '2' }}>
                                <li><strong>Contact Data:</strong> Name, email address, and phone number (e.g., 08108594858).</li>
                                <li><strong>Business Data:</strong> Information related to your business for AI automation and software scaling.</li>
                                <li><strong>Technical Data:</strong> Device information provided during hardware repair diagnostics.</li>
                            </ul>
                        </section>

                        {/* 3. How We Use Your Info */}
                        <section className="mb-5">
                            <h4 style={{ fontWeight: 'bold', color: '#25447d' }}>
                                <IoShieldCheckmarkOutline className="me-2" /> 3. How We Use Your Information
                            </h4>
                            <p style={{ lineHeight: '1.8' }}>
                                We use personal information collected via our website for a variety of business purposes, including to:
                            </p>
                            <ul style={{ lineHeight: '2' }}>
                                <li>Deliver IT solutions and technical support.</li>
                                <li>Automate business workflows via AI tools.</li>
                                <li>Send administrative information and service updates.</li>
                                <li>Comply with legal obligations in accordance with NDPR (Nigeria Data Protection Regulation).</li>
                            </ul>
                        </section>

                        {/* 4. Data Protection */}
                        <section className="mb-5" style={{ 
                            backgroundColor: '#f8f9fa', 
                            padding: '30px', 
                            borderRadius: '10px',
                            borderLeft: '5px solid #3498db'
                        }}>
                            <h4 style={{ fontWeight: 'bold' }}>4. Data Security</h4>
                            <p style={{ marginBottom: 0 }}>
                                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                            </p>
                        </section>

                        {/* 5. Contact Us */}
                        <section className="text-center mt-5" style={{ padding: '40px', border: '1px solid #eee', borderRadius: '15px' }}>
                            <h5 style={{ fontWeight: 'bold' }}>Questions about this policy?</h5>
                            <p>Contact the SoTech Data Privacy Team at:</p>
                            <p style={{ fontWeight: 'bold', color: '#3498db' }}>sotechitsolutions@gmail.com</p>
                            <button 
                                onClick={() => window.location.href = 'mailto:sotechitsolutions@gmail.com'}
                                style={{
                                    backgroundColor: '#3498db',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 30px',
                                    borderRadius: '5px',
                                    fontWeight: 'bold'
                                }}>
                                Email Us Directly
                            </button>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;