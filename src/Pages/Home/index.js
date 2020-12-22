import React from 'react'
import SiteSidebar from '../../Components/SiteSidebar'
import HomeMainSection from './HomeMainSection'

const Home = () => {
    return (
        <section className="blog_area section_padding_0_80">
            <div className="container">
                <div className="row justify-content-center">
                    <HomeMainSection />
                    <SiteSidebar />
                </div>
            </div>
        </section>
    )
}

export default Home