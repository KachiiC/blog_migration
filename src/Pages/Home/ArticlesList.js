import React from 'react'
// Data
import ArticlesData from 'Data/ArticlesData'
// Components
import SiteArticlePreview from 'Components/SiteArticlePreview'


const ArticlesList = () => {

    const displayArticlesList = ArticlesData.slice(1,5).map((article, index) => (
            <SiteArticlePreview
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
export default ArticlesList