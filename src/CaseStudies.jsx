import React, { useState } from 'react';
import { IoCheckmarkDoneCircle, IoAddOutline } from "react-icons/io5";

function CaseStudies() {
    // 1. Full database of studies
    const allStudies = [
        {
            title: "Lagos Prep School Infrastructure Update",
            category: "Managed IT",
            problem: "Legacy server systems causing 4 hours of downtime weekly.",
            solution: "Migrated infrastructure to a hybrid cloud system with automated failover.",
            result: "99.9% Uptime and 40% faster internal network speeds.",
            color: "#3498db"
        },
        {
            title: "Corporate AI Automation Workflow",
            category: "Software/AI",
            problem: "Manual data entry taking 20+ hours per week for HR teams.",
            solution: "Deployed a custom Python-based automation tool to sync payroll and attendance.",
            result: "Reduced manual processing time by 85%.",
            color: "#2ecc71"
        },
        {
            title: "E-commerce Inventory Sync",
            category: "Automation",
            problem: "Stock levels were inconsistent across website and physical warehouse.",
            solution: "Developed a real-time API bridge between Odoo ERP and the storefront.",
            result: "Zero overselling incidents in the first 6 months.",
            color: "#e67e22"
        },
        {
            title: "Hospital Network Security Audit",
            category: "Cybersecurity",
            problem: "Vulnerability to ransomware due to outdated firewall protocols.",
            solution: "Implemented Zero-Trust architecture and end-to-end encrypted backup systems.",
            result: "Passed international security compliance with 0 vulnerabilities.",
            color: "#9b59b6"
        }
    ];

    // 2. State to track how many items to show
    const [visibleCount, setVisibleCount] = useState(2);

    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 2);
    };

    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '100px 0' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h6 style={{ color: '#3498db', fontWeight: 'bold', letterSpacing: '2px' }}>PROVEN RESULTS</h6>
                    <h1 style={{ fontWeight: '900', color: '#0f172a', fontSize: '3rem' }}>Case Studies</h1>
                </div>

                <div className="row">
                    {/* 3. Use .slice() to only show the visibleCount */}
                    {allStudies.slice(0, visibleCount).map((item, index) => (
                        <div className="col-lg-6 mb-4" key={index}>
                            <div style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '24px',
                                padding: '40px',
                                border: '1px solid #e2e8f0',
                                height: '100%'
                            }}>
                                <span style={{ backgroundColor: `${item.color}15`, color: item.color, padding: '5px 15px', borderRadius: '100px', fontSize: '12px', fontWeight: 'bold' }}>
                                    {item.category}
                                </span>
                                <h3 className="mt-3" style={{ fontWeight: '800', color: '#0f172a' }}>{item.title}</h3>
                                <div className="mt-4">
                                    <p style={{ fontSize: '14px', color: '#64748b' }}><strong>Challenge:</strong> {item.problem}</p>
                                    <p style={{ fontSize: '14px', color: '#64748b' }}><strong>Solution:</strong> {item.solution}</p>
                                </div>
                                <div style={{ marginTop: '25px', padding: '15px', backgroundColor: '#f1f5f9', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <IoCheckmarkDoneCircle size={20} color={item.color} />
                                    <span style={{ fontWeight: '700', color: '#0f172a', fontSize: '14px' }}>Result: {item.result}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. Only show the button if there are more items to load */}
                {visibleCount < allStudies.length && (
                    <div className="text-center mt-5">
                        <button 
                            onClick={showMore}
                            style={{
                                backgroundColor: '#0f172a',
                                color: 'white',
                                border: 'none',
                                padding: '15px 40px',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                transition: '0.3s'
                            }}
                        >
                            View More Case Studies <IoAddOutline size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CaseStudies;