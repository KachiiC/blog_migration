import React from 'react'

const HeaderBanner = (props) => {

    return (
        <div className="breadcumb-area" 
            style={
                { backgroundImage: `url(${props.image})` }
            }
        >
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="bradcumb-title text-center">
                            <h2>Archive Page</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeaderBanner