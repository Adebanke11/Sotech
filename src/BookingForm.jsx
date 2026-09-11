import React from 'react';

function BookingForm() {
    return (
        <div className="container" style={{ maxWidth: '600px', padding: '50px 20px' }}>
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                border: '1px solid #f1f5f9'
            }}>
                <h3 style={{ fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>Book a Service</h3>
                <p style={{ color: '#64748b', marginBottom: '30px' }}>Tell us about your project and we'll get back to you within 24 hours.</p>

                {/* Replace 'your-form-id' with the ID you get from Formspree.io */}
                <form action="https://formspree.io/f/mrelqaoq" method="POST" target="_blank">
                    <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: '600' }}>Full Name</label>
                        <input type="text" name="name" className="form-control" placeholder="John Doe" required style={{ borderRadius: '10px', padding: '12px' }} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: '600' }}>Email Address</label>
                        <input type="email" name="email" className="form-control" placeholder="john@example.com" required style={{ borderRadius: '10px', padding: '12px' }} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: '600' }}>Service Required</label>
                        <select name="service" className="form-select" style={{ borderRadius: '10px', padding: '12px' }}>
                            <option value="Hardware Repair">Hardware Repair</option>
                            <option value="AI Automation">AI Automation</option>
                            <option value="Software Development">Software Development</option>
                            <option value="IT Support">General IT Support</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="form-label" style={{ fontWeight: '600' }}>Message / Details</label>
                        <textarea name="message" className="form-control" rows="4" placeholder="Describe the issue or project..." style={{ borderRadius: '10px', padding: '12px' }}></textarea>
                    </div>

                    <button type="submit" className="btn w-100" style={{
                        backgroundColor: '#3498db',
                        color: 'white',
                        padding: '14px',
                        borderRadius: '12px',
                        fontWeight: '700',
                        fontSize: '16px',
                        border: 'none',
                        transition: '0.3s'
                    }}>
                        Send Booking Request
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;