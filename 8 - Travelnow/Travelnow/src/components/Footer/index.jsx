import "./style.css"

const Footer = ()=>{
    return (
        <footer>
            <div className="footer_up">
                <div className="footer_up_text">
                    <h1 className="title"><span style={{color:'#FBB667'}}>Travel</span>now</h1>
                    <p className="footer_up_text_p">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                </div>
                <div className="footer_up_linkbox">
                    <div className="footer_up_linkbox_links">
                        <h2 className="subtitle">Tour</h2>
                        <a className="link" href="#">Thiland</a>
                        <a className="link" href="#">Canada</a>
                        <a className="link" href="#">Korea</a>
                        <a className="link" href="#">Italy</a>
                    </div>
                    <div className="footer_up_linkbox_links">
                        <h2 className="subtitle">Support</h2>
                        <a className="link" href="#">Account</a>
                        <a className="link" href="#">Legal</a>
                        <a className="link" href="#">Contact</a>
                        <a className="link" href="#">Privacy Policy</a>
                    </div>
                    <div className="footer_up_linkbox_links">
                        <h2 className="subtitle">Userful Pages</h2>
                        <a className="link" href="#">Deals</a>
                        <a className="link" href="#">FAQs</a>
                        <a className="link" href="#">Why Us</a>
                    </div>
                </div>
            </div>
            <div className="footer_down">
                <p>@ 2020 · All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;