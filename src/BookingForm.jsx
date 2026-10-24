import React, { useState } from 'react';
import ReactGA from "react-ga4";

function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Hardware Repair',
        message: ''
    });

    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: false
    });

    // Replace this with your copied Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby1w5nNljeKG8pecQBhmeWknrRk8wSvFCarI0U2W2BK3WF867_m3qKMjxOAOzwO1Btu/exec';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: false });

        try {
            // Google Apps Script requires no-cors mode or raw POST body parsing
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(formData),
            });

            setStatus({ submitting: false, submitted: true, error: false });
            
// Inside my handleSubmit function after a successful submission:
ReactGA.event({
  category: "Booking",
  action: "Submit_Booking_Form",
  label: formData.service,
});
            setFormData({ name: '', email: '', phone: '', service: 'Hardware Repair', message: '' });
        } catch (err) {
            console.error('Error submitting form:', err);
            setStatus({ submitting: false, submitted: false, error: true });
        }
    };

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

                {status.submitted && (
                    <div className="alert alert-success mb-4" role="alert">
                        Thank you! Your booking request has been submitted successfully.
                    </div>
                )}

                {status.error && (
                    <div className="alert alert-danger mb-4" role="alert">
                        Something went wrong while sending your request. Please try again.
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: '600' }}>Full Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="form-control" 
                            placeholder="John Doe" 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                            style={{ borderRadius: '10px', padding: '12px' }} 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: '600' }}>Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            placeholder="john@example.com" 
                            required 
                            value={formData.email}
                            onChange={handleChange}
                            style={{ borderRadius: '10px', padding: '12px' }} 
                        />
                    </div>

                     <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: '600' }}>Phone Number (Preferably whatsapp) </label>
                        <input 
                            type="tel" 
                            name="phone" 
                            className="form-control" 
                            placeholder="+234 800 000 0000" 
                            required 
                            value={formData.phone}
                            onChange={handleChange}
                            style={{ borderRadius: '10px', padding: '12px' }} 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: '600' }}>Service Required</label>
                        <select 
                            name="service" 
                            className="form-select" 
                            value={formData.service}
                            onChange={handleChange}
                            style={{ borderRadius: '10px', padding: '12px' }}
                        >
                            <option value="Hardware Repair">Hardware Repair</option>
                            <option value="AI Automation">AI Automation</option>
                            <option value="Software Development">Software Development</option>
                            <option value="IT Support">General IT Support</option>
                            <option value="Others">Instructor-led Training</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="form-label" style={{ fontWeight: '600' }}>Message</label>
                        <textarea 
                            name="message" 
                            className="form-control" 
                            rows="4" 
                            placeholder="Describe the issue or project..." 
                            value={formData.message}
                            onChange={handleChange}
                            style={{ borderRadius: '10px', padding: '12px' }}
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={status.submitting}
                        className="btn w-100" 
                        style={{
                            backgroundColor: status.submitting ? '#94a3b8' : '#3498db',
                            color: 'white',
                            padding: '14px',
                            borderRadius: '12px',
                            fontWeight: '700',
                            fontSize: '16px',
                            border: 'none',
                            transition: '0.3s'
                        }}
                    >
                        {status.submitting ? 'Sending...' : 'Send Booking Request'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;