import React from 'react'
// Components
import ArticlesList from './ArticlesList'
import FeaturedArticle from './FeaturedArticle'

const HomeMainSection = () => {
    
    return (
        <div class="col-12 col-lg-8">
            <div class="row">
                <FeaturedArticle />
                <ArticlesList />
            </div>
        </div>
    )

}

export default HomeMainSection