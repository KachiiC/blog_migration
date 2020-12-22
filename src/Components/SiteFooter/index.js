import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconData from 'Data/IconData'

const SiteFooter = () => {

    const displayIcons = IconData.map((iconItem, index) => (
            <div className="single-icon" key={index}>
                <a href={iconItem.link}>
                    <FontAwesomeIcon icon={iconItem.icon} size="lg"/>
                    <span> {iconItem.name} </span>
                </a>
            </div>
        )
    )

    return (
        <div className="social_icon_area clearfix">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-social-area d-flex">
                        {displayIcons}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SiteFooter