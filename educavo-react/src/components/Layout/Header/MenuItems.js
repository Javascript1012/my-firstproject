import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuItems = (props) => {
    const { parentMenu, secondParentMenu } = props;

    const location = useLocation();

    return (
        <React.Fragment>
            <li className={parentMenu === 'home' ? 'rs-mega-menu menu-item-has-children current-menu-item' : 'rs-mega-menu menu-item-has-children'}><Link to="/">Home</Link>
                <ul className="mega-menu">
                    
                            </ul>
                            </li>
                        
            <li className={parentMenu === 'about' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="#">locations</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/contact" className={location.pathname === "/contact" ? "active-menu" : ""}>DADAR</Link>
                    </li>
                    <li>
                        
                    <a href="/contact#bhivandi-breadcrumb" >BHANDUP</a>
                    </li>
                    <li>
                    <a href="/contact#Kharghar-breadcrumb" >KHARGAR</a>
                    </li>
                    <li>
                    <a href="/contact#Cotton-breadcrumb">COTTON GREEN</a>
                    </li>
                    <li>
                    <a href="/contact#Thane-breadcrumb">THANE</a>
                    </li>
                    <li>
                    <a href="/contact#Cotton-breadcrumb">ANDHERI</a>
                    </li>
                    <li>
                    <a href="/contact#Cotton-breadcrumb">VIDYAVIHAR</a>
                    </li>
                    <li>
                    <a href="/contact#-breadcrumb">PUNE</a>
                    </li>
                </ul>
            </li>
        
            <li className={parentMenu === 'course' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="#" as="#">Courses</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/course" className={location.pathname === "/course" ? "active-menu" : ""}>Courses One</Link>
                    </li>
                    <li>
                        <Link to="/course-2" className={location.pathname === "/course-2" ? "active-menu" : ""}>Courses Two</Link>
                    </li>
                    <li>
                        <Link to="/course-3" className={location.pathname === "/course-3" ? "active-menu" : ""}>Courses Three</Link>
                    </li>
                    <li>
                        <Link to="/course-4" className={location.pathname === "/course-4" ? "active-menu" : ""}>Courses Four</Link>
                    </li>
                    <li>
                        <Link to="/course-5" className={location.pathname === "/course-5" ? "active-menu" : ""}>Courses Five</Link>
                    </li>
                    <li>
                        <Link to="/course-6" className={location.pathname === "/course-6" ? "active-menu" : ""}>Courses Six</Link>
                    </li>
                    <li>
                        <Link to="/course/course-single" className={location.pathname === "/course/course-single" ? "active-menu" : ""}>Courses Single</Link>
                    </li>
                </ul>
            </li>
            
           
            <li className={parentMenu === 'contact' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="#">
                    Contact
                </Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="" className={location.pathname === "" ? "active-menu" : ""}>Contact One</Link>
                    </li>
                    <li>
                        <Link to="/contact-2" className={location.pathname === "/contact-2" ? "active-menu" : ""}>Contact Two</Link>
                    </li>
                    <li>
                        <Link to="/contact-3" className={location.pathname === "/contact-3" ? "active-menu" : ""}>Contact Three</Link>
                    </li>
                    <li>
                        <Link to="/contact-4" className={location.pathname === "/contact-4" ? "active-menu" : ""}>Contact Four</Link>
                    </li>
                </ul>
            </li>
        </React.Fragment>
    );
}

export default MenuItems;