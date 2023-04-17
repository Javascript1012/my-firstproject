import React from 'react';
import { Link } from 'react-router-dom';

const SiteBreadcrumb = (props) => {
	const { breadcrumbsClass, innerClass, titleClass, pageTitle, parentCategory, pageCategory,  breadcrumbsImg,id ,padding} = props;

	return (
		<div  id={id} className={breadcrumbsClass ? breadcrumbsClass : 'rs-breadcrumbs breadcrumbs-overlay'}>
			<div className="breadcrumbs-img">
				
			</div>
			<div className={innerClass ? innerClass : 'breadcrumbs-text white-color'}>
				<h1 className={titleClass ? titleClass : 'page-title'}>{pageTitle ? pageTitle : 'Breadcrumbs'}</h1>
				
				
			</div>
		</div>
	);
}

export default SiteBreadcrumb;




