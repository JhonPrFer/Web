import "./style.css"

const Destination = ()=>{

    return (
        <section className="destinations" id="destinations">
            <section className="destinations_up">
                <img className="destination_image" src="/images/travel.svg" alt="travel" />
                <section className="destinations_text">
                    <h2 className="destinations_text_title">Travel to any corner of the World</h2>
                    <p className="destinations_text_paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                    <div className="destinations_text_cards">
                        <div className="text_card">
                            <p className-="card_text"><span style={{color: "#FBB667",fontSize:"2.75rem",fontWeight:"700", fontFamily:"Nunito,sans-serif"}}>20</span> Years of Experience</p>
                        </div>
                        <div className="text_card">
                            <p className-="card_text"><span style={{color: "#FBB667",fontSize:"2.75rem",fontWeight:"700", fontFamily:"Nunito,sans-serif"}}>55</span> Destination Collaboration</p>
                        </div>
                        <div className="text_card">
                            <p className-="card_text"><span style={{color: "#FBB667",fontSize:"2.75rem",fontWeight:"700", fontFamily:"Nunito,sans-serif"}}>600+</span> Tourist Destination</p>
                        </div>
                    </div>
                    <button className="destinations_button">Explore Destination</button>
                </section>
            </section>
            <section className="destination_cards">
                <div className="card">
                    <img className="card_image" src="/images/Mountains.png" alt="moutains" />
                    <h4 className="card_title">Travel to Mountais</h4>
                    <p><img className="card_avaliation" src="/images/stars.svg" alt="avaliation" /></p>
                    <p className="card_price">$600</p>
                </div>
                <div className="card">
                    <img className="card_image" src="/images/Desert.png" alt="Desert" />
                    <h4 className="card_title">Travel to Desert</h4>
                    <p><img className="card_avaliation" src="/images/stars.svg" alt="avaliation" /></p>
                    <p className="card_price">$600</p>
                </div>
                <div className="card">
                    <img className="card_image" src="/images/Camping.png" alt="Camping" />
                    <h4 className="card_title">Camping in Mountains</h4>
                    <p><img className="card_avaliation" src="/images/stars.svg" alt="avaliation" /></p>
                    <p className="card_price">$600</p>
                </div>
            </section>
        </section>
    )

}


export default Destination