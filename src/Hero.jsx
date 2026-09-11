import React from 'react';
import { Link } from 'react-router-dom';
import { IoChevronForward } from "react-icons/io5";

function Hero() {
    const heroStyles = {
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '20px', // Space for fixed Navbar
        paddingBottom:'20px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        /* Advanced Mesh Gradient */
        background: `
            radial-gradient(circle at 80% 20%, rgba(52, 152, 219, 0.12) 0%, transparent 35%),
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 35%),
            #ffffff
        `
    };

    const glassTag = {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 16px',
        background: 'rgba(52, 152, 219, 0.08)',
        borderRadius: '100px',
        color: '#3498db',
        fontWeight: '700',
        fontSize: '13px',
        letterSpacing: '1px',
        marginBottom: '20px',
        border: '1px solid rgba(52, 152, 219, 0.2)'
    };

    return (
        <section style={heroStyles}>
            {/* Animated Light Glow (Background decoration) */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '800px',
                height: '400px',
                background: 'rgba(52, 152, 219, 0.05)',
                filter: 'blur(120px)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-center">
                    
                    {/* Left: Content */}
                    <div className="col-lg-7">
                        <div style={glassTag}>
                            <span style={{ width: '8px', height: '8px', background: '#3498db', borderRadius: '50%', marginRight: '10px', display: 'inline-block' }}></span>
                            NOW POWERING 2026 INNOVATIONS
                        </div>
                        
                        <h1 style={{ 
                            fontSize: 'calc(2.5rem + 2.5vw)', 
                            fontWeight: '900', 
                            color: '#0f172a', 
                            lineHeight: '1.05',
                            marginBottom: '25px',
                            letterSpacing: '-1.5px'
                        }}>
                            Precision IT for <br />
                            <span style={{ 
                                background: 'linear-gradient(90deg, #3498db, #6366f1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>Modern Enterprise.</span>
                        </h1>

                        <p style={{ 
                            fontSize: '1.2rem', 
                            color: '#64748b', 
                            lineHeight: '1.6', 
                            maxWidth: '550px',
                            marginBottom: '40px'
                        }}>
                            From elite hardware forensics to custom AI-driven software, 
                            we build the infrastructure that drives digital momentum.
                        </p>

                        <div className="d-flex flex-wrap gap-3">
                            <button style={{
                                padding: '16px 35px',
                                background: '#0f172a',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                fontWeight: '700',
                                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.2)',
                                transition: '0.3s'
                            }}>
                                <Link to="/book-service" className='text-decoration-none text-white'>
                                Get Started
                                </Link>
                            </button>
                            <Link to="/Service" style={{textDecoration:'none'}}>
                            <button style={{
                                padding: '16px 35px',
                                background: 'transparent',
                                color: '#0f172a',
                                border: '2px solid #e2e8f0',
                                borderRadius: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                Explore Services <IoChevronForward />
                            </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Visual Tech "Object" */}
                    <div className="col-lg-5  d-lg-block">
                        <div style={{
                            position: 'relative',
                            padding: '40px',
                            background: 'rgba(255, 255, 255, 0.4)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '40px',
                            border: '1px solid rgba(255, 255, 255, 0.8)',
                            boxShadow: '0 40px 80px rgba(0,0,0,0.08)',
                            transform: 'perspective(1000px) rotateY(-15deg) rotateX(10deg)'
                        }}>
                            {/* Inner Card UI Mockup */}
                            <div style={{ background: '#0f172a', borderRadius: '20px', padding: '20px', color: 'white' }}>
                                <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                                </div>
                                <code style={{ color: '#3498db', fontSize: '14px' }}>system.analyze(current_infrastructure);</code>
                                <div style={{ marginTop: '10px', fontSize: '12px', color: '#64748b' }}>
                                    {`> Optimizing AI workflows...`} <br />
                                    {`> Hardware status: Healthy`} <br />
                                    {`> 100% Secure`}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;