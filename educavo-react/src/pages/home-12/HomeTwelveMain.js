import React from 'react';
import { useState,useEffect } from "react";
import Faq from './FaqSection';
import Blog from './BlogSection';
import Event from './EventSection';
import Courses from './CourseSection';
import Counter from './CounterSection';
import Service from './ServiceSection';
import Download from './DownloadSection';
import Testimonial from './TestimonialSection';
import WhyChooseUs from './WhyChooseUsSection';
import BrandFour from '../../components/Common/Brand/BrandFour';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerStyleEight from '../../components/Banner/BannerStyleEight';
import Popup from './popup';


import $ from 'jquery'; 

const HomeTwelveMain = () => {
	const[timePopup,setTimePopup]= useState(false)
	useEffect(()=>{
	setTimeout(() => {
		setTimePopup(true)

		}, 3000);},[])
	return (
		<React.Fragment>
			{/* Banner-area-start */}
			<BannerStyleEight />
			{/* Banner-area-end */}
           <Popup trigger={timePopup} settrigger={setTimePopup}/>
		    
			{/* Brand-area-start */}
			<Counter />
			{/* Brand-area-end */}

			{/* Service-area-start */}
			<WhyChooseUs />
			{/* Service-area-end */}

			{/* Course-area-start */}
			
			{/* Course-area-end */}

			{/* WhyChooseUs section start */}
			<Service />
			{/* WhyChooseUs section end */}

			{/* Counter section start */}
			
			{/* Counter section end */}

			{/* Faq section start */}
			    
			{/* Faq section end */}

			{/* testmonial-area-start */}
			<div id="ppa"><Testimonial /></div>
			{/* testmonial-area-end */}

			{/* Download-area-start */}
			<Download />
			{/* Download-area-end */}

			{/* Event-area-start */}
			
			{/* Event-area-end */}

			{/* blog-area-start */}
			
			{/* blog-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop 
				scrollClassName = 'scrollup green-color'
			/>
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeTwelveMain;