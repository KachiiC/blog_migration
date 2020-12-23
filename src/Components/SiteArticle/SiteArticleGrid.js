import React from 'react'

const SiteArticleGrid = (props) => {

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single-post wow fadeInUp">
                
                <div className="post-thumb">
                    <img src="http://via.placeholder.com/450x300.png?text=Placeholder" alt="" />
                </div>
                
                <div className="post-content">
                    <div className="post-meta d-flex">
                        <div className="post-author-date-area d-flex">
                            
                            <div className="post-author">
                                <a href="#">By Author</a>
                            </div>
                            
                            <div className="post-date">
                                <a href="#">Date</a>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <h4 className="post-headline">{props.title}</h4>
                    </a>
                </div>
            </div>
        </div>

    )

}

export default SiteArticleGrid