import React from 'react'

const SiteArticlePreview = (props) => {

    return (
        <div className="col-12">
            <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".2s">
                
                <div className="post-thumb">
                    <img src="http://via.placeholder.com/1100x733.png?text=Placeholder" alt="" />
                </div>
                
                <div className="post-content">
                    <a href="#">
                        <h4 className="post-headline">{props.title}</h4>
                    </a>
                    <p>{props.preview}</p>
                    <a href="#" className="read-more">Continue Reading..</a>
                </div>
            </div>
        </div>

    )

}

export default SiteArticlePreview