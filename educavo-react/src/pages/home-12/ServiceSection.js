import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceSeven from '../../components/Service/SingleServiceSeven';

import serviceImg1 from '../../assets/img/services/home12/1.png';
import serviceImg2 from '../../assets/img/services/home12/2.png';
import serviceImg3 from '../../assets/img/services/home12/3.png';

import bgImg from '../../assets/img/bg/home12/services-bg.jpg';

const bgStyle = {
    backgroundImage: `url(${bgImg})`,
}

const Service = () => {
    return (
        <React.Fragment>
            <div id="rs-services" className="rs-services home12-style" style={bgStyle}>
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title4 text-center mb-50"
                        subtitleClass="sub-title"
                        subtitle="Increase Your Skill"
                        titleClass="title"
                        title="Explore Top Subjects"
                    />
                    <div className="row">
                        <div className="col-lg-4 md-mb-30">
                            <SingleServiceSeven
                                serviceClass='services-item'
                                serviceImg={serviceImg1}
                                serviceTitle='Web Development'
                                catLink='/course-categories'
                                serviceDesc='Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services'
                            />
                        </div>
                        <div className="col-lg-4 md-mb-30">
                            <SingleServiceSeven
                                serviceClass='services-item'
                                serviceImg={serviceImg3}
                                serviceTitle='Web Design'
                                catLink='/course-categories'
                                serviceDesc='Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience. User experience is central to the web designing process. Websites have an array of elements presented in ways that make them easy to navigate'
                            />
                        </div>
                        <div className="col-lg-4">
                            <SingleServiceSeven
                                serviceClass='services-item'
                                serviceImg={serviceImg2}
                                serviceTitle='SEO Optimization'
                                catLink='/course-categories'
                                serviceDesc='Search engine optimization is a set of technical and content practices aimed at aligning a website page with a search engine’s ranking algorithm so it can be easily found, crawled, indexed, and surfaced in the SERP for relevant queries.'
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 text-center pt-44">
                        <Link className="readon green-btn" to="/course">View All Subjects </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Service;