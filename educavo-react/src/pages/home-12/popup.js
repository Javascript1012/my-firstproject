import React from "react";

import './pop.css'
import emailjs from 'emailjs-com';



const popup=(props) => {


    const sendEmail = props=> event=> {
        event.preventDefault()
        emailjs.sendForm('service_vxqn7fa','template_xkuimur',event.target,'vwM5iZm6ybBjEP1NW')
        props.settrigger(false)
      }
    
       
  return (props.trigger)?(
    
    <div className="overlay" >
        
            <div className="rs-faq-part style1 pt-100 pb-100 md-pt-70 md-pb-70">
        
    
    <div className="container">
        <div className="row">
            <div className="col-lg-6 padding-0">
                
                    <div className="title mb-40 md-mb-14">
                    
                    </div>
                    
                        
                    </div>
                </div>
            </div>
            <div className="col-lg-6 padding-0">
                <div className="rs-free-contact">
                    <div className="sec-title3" >
                        
                        <h2 className="title white-color" >Register your Intrest</h2>
                    </div>
                    <form 
 id="contact-form"  onSubmit={sendEmail(props)}>
                         {props.children}
                         <div className="row">
                            <div className="col-lg-6 mb-30 col-md-12">
                                <input className="from-control" type="text" id="name" name="name" placeholder="Name" required />
                            </div> 
                            <div className="col-lg-6 mb-30 col-md-12">
                                <input className="from-control" type="text" id="email" name="email" placeholder="Email" required />
                            </div> 
                            <div className="col-lg-6 mb-30 col-md-12">
                                <input className="from-control" type="text" id="phone" name="phone" placeholder="Phone" required />
                            </div>   
                            <div className="col-lg-6 mb-30 col-md-12">
                                
                                <input className="from-control" type="dropdown" id="subject" name="location" placeholder="Location" required />
                                
                            </div>
                            
                            
                        </div>
                        <div className="form-btn">
                            <input className=" readon submit-requset" type="submit" value="Submit-Requset" />
                        {props.children}||
                        <input className=" readon submit-requset" type="submit" value="Go to Website" onClick={()=>props.settrigger(false)}/>
                       
                       
                         </div>
                        
                            
                       {/* <button class="close-btn" onClick={()=>props.settrigger(false)} >close </button>
                        {props.children} */}
                       
                       
                       
                        
             
                    </form>
                    
                    </div>
                </div>
            </div>
        </div>
        
   



  ):"" ;
}

export default popup