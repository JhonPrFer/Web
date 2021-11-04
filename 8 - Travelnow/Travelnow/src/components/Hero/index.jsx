import "./style.css"


const Hero = () =>{

    return(
        <section className="hero" id="hero">
            <div className="hero_text">
                <h1 className="hero_text_title">Find your next place to travel</h1>
                <p className="hero_text_paragrath">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                <div className="search_box">
                    <input type="text" placeholder="Burj khalifa, Dub" className="search_box_input" />
                    <button className="search_box_button">Search</button>
                </div>
            </div>
            <img src="/images/hero_img.svg" alt="car on travel" className="hero_image" />
        </section>
    )

}

export default Hero;