import React from 'react';
import { IoHardwareChipOutline, IoCodeSlashOutline, IoSettingsOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineAutoGraph, MdOutlinePrecisionManufacturing, MdOutlineSchool } from "react-icons/md";
import image from "./assets/buy_swap_gadget.png";

function ServicesDetail() {
    const services = [
        {
            title: "Managed IT Support",
            description: "Full-scale infrastructure management for corporate offices and schools. We handle the technical headache so you can focus on growth.",
            icon: <IoShieldCheckmarkOutline size={40} color="#3498db" />,
            features: ["Network Setup", "Server Maintenance", "24/7 Technical Support"]
        },
        {
            title: "Software Engineering",
            description: "Custom software delivery and installations tailored to your workflow. We build scalable solutions using modern frameworks.",
            icon: <IoCodeSlashOutline size={40} color="#2ecc71" />,
            features: ["Custom CRM/ERP", "Web Applications", "System Installations"]
        },
        {
            title: "AI & Business Automation",
            description: "Leverage artificial intelligence to automate repetitive tasks, reducing human error and increasing operational speed.",
            icon: <MdOutlineAutoGraph size={40} color="#e67e22" />,
            features: ["Workflow Automation", "AI Integration", "Data Analysis Tools"]
        },
        {
            title: "Hardware Repair & Maintenance",
            description: "Precision diagnostics and repair for high-end systems. We ensure your hardware investment lasts longer.",
            icon: <IoHardwareChipOutline size={40} color="#e74c3c" />,
            features: ["Laptops & Desktops", "Server Repair", "Component Upgrades"]
        }
    ];

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '80px' }}>
            {/* Page Header */}
            <div style={{ 
                backgroundColor:'#fff',
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition: 'center',
                            backgroundAttachment: 'fixed', padding: '200px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Our Services</h1>
                    <p style={{ color: '#bdc3c7', maxWidth: '600px', margin: '20px auto' }}>
                        Specialized IT solutions designed for schools and corporate excellence in Lagos and beyond.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '-50px' }}>
                <div className="row g-4">
                    {services.map((service, index) => (
                        <div className="col-lg-6" key={index}>
                            <div style={{
                                backgroundColor: 'white',
                                padding: '40px',
                                borderRadius: '20px',
                                boxShadow: '0px 10px 40px rgba(0,0,0,0.05)',
                                height: '100%',
                                border: '1px solid #f1f1f1'
                            }}>
                                <div className="mb-3">{service.icon}</div>
                                <h3 style={{ fontWeight: 'bold', color: '#0d0e11' }}>{service.title}</h3>
                                <p style={{ color: '#7f8c8d', lineHeight: '1.7' }}>{service.description}</p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="mb-2" style={{ fontSize: '14px', fontWeight: '500' }}>
                                            <span style={{ color: '#3498db', marginRight: '10px' }}>✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* School & Corporate Focus Section */}
            <div className="container mt-5 pt-5">
                <div className="row align-items-center" style={{ backgroundColor: '#f8f9fa', borderRadius: '20px', padding: '40px' }}>
                    <div className="col-md-2 text-center">
                        <MdOutlineSchool size={80} color="#3498db" />
                    </div>
                    <div className="col-md-10">
                        <h4 style={{ fontWeight: 'bold' }}>School & Corporate Partnerships</h4>
                        <p style={{ marginBottom: 0 }}>
                            We specialize in long-term contracts for educational institutions. From setting up computer labs to managing school management software, SOTECH is your dedicated technology partner.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesDetail;