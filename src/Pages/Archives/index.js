import React from 'react'
// Components
import SiteArticleGrid from 'Components/SiteArticle/SiteArticleGrid'
// Data 
import ArticlesData from 'Data/ArticlesData'

const Archives = () => {

    const displayArticles = ArticlesData.map((article, index) => {
        return (
            <SiteArticleGrid title={article.title} />
        )
    })

    return (
        <section class="archive-area section_padding_80">
            <div class="container">
                <div class="row">
                    {displayArticles}
                </div>
            </div>
        </section>
    )
}

export default Archives