import "./style.css"

const Header = ()=>{

    function toogleMenu(){
        const nav = document.getElementById('nav')
        const header = document.getElementById('header')
        const body = document.getElementsByTagName('body')[0]
        nav.classList.toggle('active')
        header.classList.toggle('active')
        body.classList.toggle('active')
    }

    return(
        <header className="header" id="header">
             <h1 className="header_title"><span style={{color:'#FBB667'}}>Travel</span>now</h1>
                <nav id="nav" className="header_nav">
                    <a className="header_nav_link" href="#hero" onClick={toogleMenu}>Discover</a>
                    <a className="header_nav_link" href="#destinations" onClick={toogleMenu}>Destination</a>
                    <a className="header_nav_link" href="#aboutUs" onClick={toogleMenu}>About us</a>
                    <button className="header_nav_button">Book A Tour</button>
                </nav>
                <button className="header_button">Book A Tour</button>
            <img src="images/open-menu.svg" alt="open-menu-button" id="openMenuBtn" className="openMenuBtn" onClick={toogleMenu}/>
            <img src="images/close-menu.svg" alt="close-menu-button" id="closeMenuBtn" className="closeMenuBtn" onClick={toogleMenu} />
        </header>
    )
}

export default Header;