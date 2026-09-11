
import image from './assets/Sotech.jpg';


function Services(){
    return(
        <>
        <section style={{backgroundColor:'#fff', color:'white',
        padding:'20px 5px',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Creates a parallax scrolling effect
        }} id="about-section">
<div className="row gx-lg-5" style={{margin:'40px 30px 0px 30px'}}>
    <h3 style={{textAlign:'center', padding:'45px'}}>Reliable Partner for Digital & Business Growth</h3>

<div className="col-lg-6 col-md-6 col-sm-12">
    <h4 className='text-center'>Automation Services</h4> 
    <p
    style={{textAlign:'justify'}}>At SoTech Solutions, we deliver intelligent automation solutions that streamline business processes, reduce manual workloads, and improve operational efficiency. Our automation services help organizations increase productivity, minimize errors, and achieve faster, more reliable outcomes through smart, technology-driven workflows.</p>
    </div>
<div className="col-lg-6 col-md-6 col-sm-12">
    <h4 className='text-center'>IT Support & Managed Solutions</h4>
    <p style={{textAlign:'justify'}}>We provide reliable IT support and managed services designed to keep your systems secure, stable, and performing at their best. From infrastructure monitoring and troubleshooting to system maintenance and user support, our solutions ensure business continuity, reduced downtime, and peace of mind.</p>
</div>
</div>
<hr style={{border:'1px solid #83a1daff'}}></hr>
<div className="row gx-lg-5 " style={{margin:'30px 30px 0px 30px'}}>
<div className="col-lg-6 col-md-6 col-sm-12">
    <h4 className='text-center'>Excellence in Solution Delivery</h4>
    <p style={{textAlign:'justify'}}>We provide robust, high-performance software solutions, digital products, and cloud-based services that improve operational efficiency, reduce costs, and modernize both legacy and new systems.</p>
</div>
<div className="col-lg-6 col-md-6 col-sm-12">
    <h4 className='text-center'>Software Engineering Services</h4>
    <p style={{textAlign:'justify', marginBottom:'60px'}}>Our software engineering services focus on building robust, scalable, and secure applications tailored to your business objectives. We combine modern engineering practices with a deep understanding of business needs to deliver high-performing systems that are adaptable, efficient, and built for long-term success.</p>
</div>

</div>

</section>
</>
    );
}
export default Services;