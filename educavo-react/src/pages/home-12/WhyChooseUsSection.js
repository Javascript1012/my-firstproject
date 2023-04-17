import React from 'react';

import aboutImg from '../../assets/img/choose/home12/1.png';
import icon1 from '../../assets/img/choose/home12/icon/1.gif';
import icon2 from '../../assets/img/choose/home12/icon/2.gif';
import icon3 from '../../assets/img/choose/home12/icon/3.gif';
import icon4 from '../../assets/img/choose/home12/icon/4.gif';
import icon5 from '../../assets/img/choose/home12/icon/5.gif';


import bgImg from '../../assets/img/bg/home12/why-learn-bg.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const WhyChooseUs = () => {

    return (
        <div className="why-choose-us style3" style={bgStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 md-mb-40">
                        <div className="img-part">
                            <img src={aboutImg} alt="" />                        
                        </div>
                    </div>
                    <div className="col-lg-6 pl-60 md-pl-14">
                        <div className="sec-title3 mb-30">
                            <h2 className=" title new-title margin-0 pb-14"> We Are 
Renowned For... </h2>
                            <div className="new-desc"></div>
                        </div>
                        <div className="services-part mb-20">
                            <div className="services-icon">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="services-text">
                                <h2 className="title">Fully Air Conditioned, CCTV monitored, Noise free premises</h2>
                                <p className="services-txt"> </p>
                            </div>
                        </div> 
                        <div className="services-part mb-20">
                            <div className="services-icon" >
                               
                                <img src={icon2} alt="" />
                            
                            </div>
                            <div className="services-text">
                                <h2 className="title">Specious Ergonomic desk with Charging Point</h2>
                                <p className="services-txt"> </p>
                            </div>
                        </div> 
                        <div className="services-part">
                            <div className="services-icon">
                                <img src={icon3} alt=""  />
                            </div>
                            <div className="services-text">
                                <h2 className="title">High speed WIFI</h2>
                                <p className="services-txt">  </p>
                            </div>
                            
                        </div>
                        <div className="services-part">
                            <div className="services-icon">
                                <img src={icon4} alt="" />
                            </div>
                            <div className="services-text">
                                <h2 className="title"> RO Drinking Water, Locker </h2>
                                <p className="services-txt">  .</p>
                            </div>
                            
                        </div>
                        <div className="services-part">
                            <div className="services-icon">
                                <img src={icon5} alt="" />
                            </div>
                            <div className="services-text">
                                <h2 className="title">Clean & Hygienic Washroom </h2>
                                <p className="services-txt">  </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;