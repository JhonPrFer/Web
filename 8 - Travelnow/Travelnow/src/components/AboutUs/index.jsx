import "./style.css";
const AboutUs = ()=>{

    return(
      <section className="about_us" id="aboutUs">
          <img className="about_us_image" src="./images/camping_bus.svg" alt="trailer" />
            <div className="about_us_text">
                <h2 className="about_us_title">Our Quality Services</h2>
                <div className="about_us_cards_div">
                    <div className="about_us_card">
                        <img className="about_us_card_image" style={{padding: "19px"}} src="./images/ticket.svg" alt="ticket icon" />
                        <div className="about_us_card_text">
                            <h3 className="about_us_card_title">Ticket</h3>
                            <p className="about_us_card_paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                        </div>
                    </div>
                    <div className="about_us_card" >
                        <img className="about_us_card_image" style={{padding: "25px 12px"}} src="./images/car.svg" alt="car icon" />
                        <div className="about_us_card_text">
                            <h3 className="about_us_card_title">Driver</h3>
                            <p className="about_us_card_paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                        </div>
                    </div>
                    <div className="about_us_card">
                        <img className="about_us_card_image" style={{padding: "16px 18px"}} src="./images/plane.svg" alt="plane icon" />
                        <div className="about_us_card_text">
                            <h3 className="about_us_card_title">Tour</h3>
                            <p className="about_us_card_paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    )
}


export default AboutUs;