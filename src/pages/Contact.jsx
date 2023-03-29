import React from 'react';
import PageTitle from '../components/pagetitle';


function Contact(props) {
    return (
        <div>
            <PageTitle title='Contact Us' />

            <section className="tf-section tf-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12">
                            <div className="content-about m-b50 mobie-40" data-aos="fade-right" data-aos-duration="800">
                                <div className="tf-title st2 m-b17">
                                    <h4 className="title">Have a question </h4>
                                </div>
                            </div>
                           <div style={{fontSize:24}}>Contact Us: gary@gemgpt.org</div>
                        </div>
                        <div className="col-xl-7  col-md-12">
                            <div className="contact-details" data-aos="fade-left" data-aos-duration="800">
                                <div className="adress wrap-fx" style={{display:"flex", justifyContent:"space-around"}}>
                                    <div className="location">
                                        <h6>Location</h6>
                                        <ul>
                                            <li>Gabhal an Dá Bhóthar,<br></br> Limerick , <br></br>Ireland</li>
                                        </ul>
                                    </div>
                                    <div className="mail">
                                        <h6>Contact Us</h6>
                                        <ul>
                                            <li>+353-61-311-910</li>
                                            <li>Info.avitex@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flat-map wow fadeIn animated" data-wow-delay="0.3ms" data-wow-duration="1000ms" style={{marginTop:25}}>
                                    <iframe title='map' className="map-content" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9686.082696634072!2d-8.674029556423923!3d52.632505550606645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b5b4335e36d13%3A0x2600c7a819c07692!2sGouldavoher%2C%20Limerick%2C%20Ireland!5e0!3m2!1sen!2str!4v1680113232441!5m2!1sen!2str" width="1220" height="455" allowFullScreen="" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;