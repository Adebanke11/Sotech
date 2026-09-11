import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

function Testimonials() {
    const testimonialData = [
        {
            id: 1,
            name: "Olawale Johnson",
            role: "Principal, GreenField Academy",
            text: "SoTech transformed our school's IT infrastructure. Their AI automation for our student records has saved us hours of manual work every week.",
            image: "https://randomuser.me/api/portraits/men/83.jpg"
        },
        {
            id: 2,
            name: "Sarah Amadi",
            role: "CEO, TechBloom Ventures",
            text: "The software engineering team at SoTech is top-notch. They built our custom CRM from scratch and provided excellent hardware support during our office move.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 3,
            name: "Ibrahim Musa",
            role: "IT Manager, Lagos Logistics",
            text: "Fastest hardware repair service in Lagos. They fixed our server mainframes in record time, preventing a major operational shutdown.",
            image: "https://randomuser.me/api/portraits/men/91.jpg"
        }
    ];

    return (
        <div id="testimonials" style={{
            padding: '80px 0',
            backgroundColor: '#f8f9fa',
        }}>
            <div className="container">
                <div className="row mb-5 text-center">
                    <div className="col-12">
                        <h6 style={{ color: '#3498db', fontWeight: 'bold', letterSpacing: '2px' }}>TESTIMONIALS</h6>
                        <h2 style={{ fontWeight: 'bold', color: '#0d0e11' }}>What Our Clients Say</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3498db', margin: '15px auto' }}></div>
                    </div>
                </div>

                {/* Custom CSS for the indicators inside the component */}
                <style>
                    {`
                        .carousel-indicators [data-bs-target] {
                            background-color: #3498db; 
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            margin: 0 5px;
                        }
                        .carousel-item {
                            padding-bottom: 50px; /* Space for the dots */
                        }
                    `}
                </style>

                <Carousel 
                    indicators={true} 
                    interval={5000} 
                    pause="hover" 
                    controls={false}
                    variant="dark"
                >
                    {testimonialData.map((item) => (
                        <Carousel.Item key={item.id}>
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div style={{
                                        padding: '40px',
                                        backgroundColor: 'white',
                                        borderRadius: '20px',
                                        boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
                                        margin: '10px'
                                    }}>
                                        <FaQuoteLeft size={30} color="#3498db" style={{ marginBottom: '20px', opacity: '0.3' }} />
                                        
                                        <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#555', lineHeight: '1.8' }}>
                                            "{item.text}"
                                        </p>

                                        <div className="mt-4">
                                            <img 
                                                src={item.image} 
                                                alt={item.name}
                                                style={{
                                                    width: '80px',
                                                    height: '80px',
                                                    borderRadius: '50%',
                                                    border: '3px solid #3498db',
                                                    marginBottom: '15px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <h5 style={{ fontWeight: 'bold', marginBottom: '5px' }}>{item.name}</h5>
                                            <p style={{ color: '#3498db', fontSize: '14px', fontWeight: 'bold' }}>{item.role}</p>
                                            
                                            <div style={{ color: '#f1c40f' }}>
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Testimonials;