import React from 'react'
// Data
import IconData from 'Data/IconData'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HeaderIcons = () => {

    const iconsList = IconData.map((iconItem, index) => {
        return (
            <a href={iconItem.link} key={index}>
                <FontAwesomeIcon icon={iconItem.icon} size="lg"/>
            </a>
        )
    })

    return (
        <div className="top_header_area">
            <div className="container">
                <div className="row">
                    <div className="col-5 col-sm-6">
                        <div className="top_social_bar">
                            {iconsList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderIcons