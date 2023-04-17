import React from 'react';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import SectionTitle from '../../components/Common/SectionTitle';
import ContactForm from '../../components/Contact/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';

import bannerbg from '../../assets/img/breadcrumbs/imagelib.jpg';


const ContactMain = () => {

    return (
        <React.Fragment>

            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="LOCATIONS"
                pageName="LOCATIONS"
                breadcrumbsImg={null}
            />
            {/* SiteBreadcrumb */}

            {/* Contact Section Start */}
            <div className="rs-contact style1 event-bg pt-110 md-pt-80 pb-100 md-pb-80">
                <div className="container pb-66 md-pb-46">
                    <div className="row gutter-35">
                        <div className="col-md-4">
                            <ContactInfo
                                boxClass="sm-mb-30"
                                title="Address"
                                iconClass="flaticon-location"
                                address="
                                Sidharth tower,Thane Rail Station,Thane (W) ,Mumbai 400601"


                            />
                        </div>
                        <div className="col-md-4">
                            <ContactInfo
                                boxClass="sm-mb-30"
                                title="Email Address"
                                iconClass="flaticon-email"
                                email="contact@educavo.com"
                            />
                        </div>
                        <div className="col-md-4">
                            <ContactInfo
                                boxClass=""
                                title="Phone Number"
                                iconClass="flaticon-phone"
                                phone="☏ - 9156905552"
                            />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row y-middle">
                        <div className="col-lg-6 md-mb-30">
                            <div className="map-canvas">
                                <iframe src="https://maps.google.com/maps?q=readershub library thane railway station &t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-60 md-pl-14">
                            <div className="contact-widget">
                                <SectionTitle
                                    sectionClass="sec-title3 mb-36"
                                    titleClass="title black-color mb-14"
                                    title="Get in Touch"
                                    descClass="new-desc"
                                    description="Have some suggestions or just want to say hi? Our  support team are ready to help you 24/7.call or Whatsapp on this no  - 9156905552"
                                />
                                {/* Contact Form */}
                                
                                {/* Contact Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Section End */}
        </React.Fragment>

    );
}


export default ContactMain;