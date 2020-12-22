import React from 'react'
// Components
import SiteSidebarAbout from './SidebarAbout'
import SiteSidebarIcons from './SidebarIcons'
import SiteSidebarPost from './SidebarPost'


const SiteSidebar = () => (
    
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
        <div class="blog-sidebar mt-5 mt-lg-0">
            <SiteSidebarAbout />
            <SiteSidebarIcons />
            <SiteSidebarPost />
        </div>
    </div>

)
export default SiteSidebar