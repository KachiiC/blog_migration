import React from 'react'
import HeaderLogo from './HeaderLogo'

const HeaderMenu = () => {

    const menuItems = [
        {
            menu_name: "Home",
        },
        {
            menu_name: "Features",
        },
        {
            menu_name: "Categories",
        },
        {
            menu_name: "Archive",
        },
        {
            menu_name: "About"
        },
        {
            menu_name: "Contact"
        }
    ]

    const displayMenus = menuItems.map((menu, index) => {
        return (
            <li className="nav-item" key={index}>
                <a className="nav-link" href="http://127.0.0.1:3000/">
                    {menu.menu_name}
                </a>
            </li>
        )
    })

    return (
        <header className="header_area">
            <div className="container">
                <HeaderLogo />
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                            <div className="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
                                <ul className="navbar-nav" id="yummy-nav">
                                    {displayMenus}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default HeaderMenu