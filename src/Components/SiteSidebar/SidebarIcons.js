import React from 'react'
// Data
import IconData from 'Data/IconData'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SiteSidebarIcons = () => {

    const displayeSidebarIcons = IconData.map((iconItem, index) => (
            <a href={iconItem.link} key={index}>
                <FontAwesomeIcon icon={iconItem.icon} size="lg"/>
            </a>
        )
    )

    return (
        <div className="single-widget-area subscribe_widget text-center">
            <div className="widget-title">
                <h6>Subscribe &amp; Follow</h6>
            </div>
            <div className="subscribe-link">
                {displayeSidebarIcons}
            </div>
        </div>
    )
}

export default SiteSidebarIcons