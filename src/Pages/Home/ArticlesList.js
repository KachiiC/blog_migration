import React from 'react'
// Data
import ArticlesData from 'Data/ArticlesData'
// Components
import SiteArticleList from 'Components/SiteArticle/SiteArticleList'


const SiteArticlesList = () => {

    const displayArticlesList = ArticlesData.slice(1,5).map((article, index) => (
            <SiteArticleList
                key={index}
                title={article.title}
                preview={article.paragraph}
            />
        )
    )

    return (
        <>
            <div>
                {displayArticlesList}
            </div>
        </>
    )
}
export default SiteArticlesList