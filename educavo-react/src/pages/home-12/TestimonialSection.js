import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonialFive from '../../components/Testimonial/SingleTestimonialFive';


import quote from '../../assets/img/testimonial/home12/quote.png';
import author1 from '../../assets/img/testimonial/style5/1.png';
import author2 from '../../assets/img/testimonial/style5/2.png';
import author3 from '../../assets/img/testimonial/style5/3.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    return (
        <React.Fragment>
            <div className="rs-testimonial home12-style">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title4 mb-50 md-mb-30 text-center"
                        subtitleClass="sub-title primary"
                        subtitle="Testimonial"
                        titleClass="title mb-0"
                        title="What Students Saying"
                    />
                    <Slider {...testimonialSettings}>
                        <SingleTestimonialFive
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author1}
                            Title="Sachin Pawar"
                            Designation="CA final Student "
                            Description="The reading hall has exceeded my expectations. The staff is always friendly and helpful, and the facilities are well-equipped with everything I need to study effectively. The comfortable chairs, ample lighting, and quiet atmosphere allow me to focus on my work without any distractions. I have also found the reading materials to be comprehensive. Overall, the reading hall has been instrumental in helping me achieve academic success, and I would highly recommend it to anyone looking for a top-notch study environment."
                        />
                        
                        <SingleTestimonialFive
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author3}
                            Title="Ankit Sabadra"
                            Designation="UPSC Aspirant"
                            Description="I recently started using the reading hall to prepare for my upcoming exams, and I have been blown away by the experience. The staff is always welcoming and helpful, and they go out of their way to ensure that I have everything I need to study effectively. The reading hall is always clean and well-maintained, and I love the quiet and peaceful atmosphere that allows me to concentrate fully on my studies. The resources available are extensive, and I have found everything I need to succeed in my studies. I would highly recommend the reading hall to any student who is serious about achieving academic success. It has been an absolute game-changer for me, and I cannot thank the staff enough for their support."
                        />
                        <SingleTestimonialFive
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author2}
                            Title="Yogesh Parab"
                            Designation="Student"
                            Description="The reading hall is truly a hidden gem for students who are looking for a quiet and supportive study environment. As a busy college student, I have struggled to find a place to study that is both comfortable and conducive to productivity. However, the reading hall has exceeded my expectations on both fronts. The facilities are always clean and well-maintained, and the staff is incredibly friendly and supportive. The reading materials available are comprehensive and diverse, making it easy to find the resources I need to succeed in my studies. Overall, I have had a fantastic experience using the reading hall, and I would highly recommend it to any student who is looking for a reliable and comfortable study environment."
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial