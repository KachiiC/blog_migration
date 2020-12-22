import React from 'react'

const SiteSidebarPost = () => {

    const postData = [
        {
            title: "post title 1",
            date: "date"
        },
        {
            title: "post title 2",
            date: "date 2"
        }

    ]

    const displayedSidebarPosts = postData.map((post, index) => {

        return (
            <div className="single-populer-post d-flex">
                <img src="http://via.placeholder.com/1350x900.png?text=Placeholder" alt="" />
                <div className="post-content">
                    <a href="http://127.0.0.1:3000/">
                        <h6>{post.title}</h6>
                    </a>
                    <p>{post.date}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="single-widget-area popular-post-widget">
            <div className="widget-title text-center">
                <h6>Populer Post</h6>
            </div>
            {displayedSidebarPosts}
        </div>
    )
}

export default SiteSidebarPost