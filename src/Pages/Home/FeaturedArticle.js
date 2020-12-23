import React from 'react'
import ArticlesData from 'Data/ArticlesData'

const FeaturedArticle = () => {

    const article = ArticlesData[0]

    
    return (
        <div className="col-12">
            <div className="single-post wow fadeInUp">
                <div className="post-thumb">
                    <img src="http://via.placeholder.com/1350x900.png?text=Placeholder" alt="" />
                </div>
                
                <div className="post-content">
                    <a href="http://127.0.0.1:3000/">
                        <h2 className="post-headline">{article.title}</h2>
                    </a>
                    <p>{article.paragraph}</p>
                    <a href="http://127.0.0.1:3000/" className="read-more">Continue Reading..</a>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default FeaturedArticle