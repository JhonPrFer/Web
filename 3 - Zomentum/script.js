let main = document.getElementsByTagName('main')[0];

let cards = [
    {
        titulo:'Your channel program on steroids',
        descricao:'Tired of finding MSPs that can help you boost your channel sales?  You’re in luck, because they’re all here.',
        image:'images/figure1.svg',
        classe: 'cards reverse-card',
        seta: ``
    },
    {
        titulo:'Become the vendor everyone wants to buy from',
        descricao:'Gain brand authority and visibility with the help of the largest IT service ecosystem. Find customers who are looking for your solution right now!',
        image:'images/figure2.svg',
        classe: 'cards',
        seta: `
        <a href="">Signup now</a>
        <img src="images/Right menu Arrow.svg" alt="Menu arrow">
        `
    },
    {
        titulo:'It’s like having Your best Salesman on autopilot',
        descricao:'Share collaterals and documents that are automatically branded. Leverage a rich partner network that sells your solution exactly the way your best salesman would.',
        image:'images/figure3.svg',
        classe: 'cards reverse-card',
        seta: `<a href="">Signup now</a>
                <img src="images/Right menu Arrow.svg" alt="Menu arrow">
                `
    },
    {
        titulo:'Track your channel performance',
        descricao:'Monitor the health and revenue of your channel program and streamline your campaign to win more customers within Zomentum.',
        image:'images/figure4.svg',
        classe: 'cards',
        seta: `<a href="">Signup now</a>
                <img src="images/Right menu Arrow.svg" alt="Menu arrow">
                `

    },
]

function render(){
    cards.forEach((card)=>{
        services.innerHTML+=
        `
        <section class="${card.classe}" >
            <img src="${card.image}" alt="${card.alt}">
            <div class="text">
                <h3>${card.titulo}</h3>
                <p>${card.descricao}</p>
                <div class="signup">
                    ${card.seta}
                </div>
            </div>
        </section>
        `
    })
}

let services

function telahome() {
    main.innerHTML=
    `
    <div id="header">
                <header>
                    <img src="images/Logo.svg" alt="logo Zomentum">
                    <div id="nav">
                        <nav>
                            <a href="#features">Features</a>
                            <a href="#card1">Services</a>
                            <a href="">Contact</a>
                            <button><a href="">Get a demo</a></button>
                        </nav>
                        <div id="openMenu"><i class="fas fa-bars"></i></div>
                        <div id="closeMenu"><i class="fas fa-times"></i></div>
                    </div>
                </header>
            </div>
            <section id="hero">
               <div id="hero-texto">
                    <h1>Find the right partners to fuel your business growth</h1>
                    <p>Join a vibrant community of MSPs to forge long-lasting relationships with partners that help you create excellent customer experiences</p>
                </div>
                <div id="hero-img">
                    <img src="images/ImageHero1.svg" alt="partners">
                    <button>Register today</button>
                    <img src="images/ImageHero2.svg" alt="profit table">
                </div>
            </section>
            <section id="features">
                <h2>List. Sell. Grow</h2>
                <div id="icons">
                    <div>
                        <img src="images/icon1.svg" alt="icon1">
                        <p>Be a part of the only  All-In-One platform for IT</p>
                    </div>
                    <div>
                        <img src="images/icon2.svg" alt="icon2">
                        <p>Come closer to finding your next customer</p>
                    </div>
                    <div>
                        <img src="images/icon3.svg" alt="icon3">
                        <p>Grow your business with a single click</p>
                    </div>
                </div>
            </section>
            <section class="services">
            
            </section>
            <footer>
                <div class="footer-cima">
                    <div class="group1">
                        <div>
                            <h4>Product</h4>
                            <a href="">Features</a>
                            <a href="">Pricing</a>
                            <a href="">Integrations</a>
                            <a href="">Product</a>
                        </div>
                        <div>
                            <h4>Company</h4>
                            <a href="">About us</a>
                            <a href="">Contact us</a>
                            <a href="">Submit a ticket</a>
                            <a href="">Privacy policy</a>
                            <a href="">Terms & conditions</a>
                        </div>
                    </div>
                   <div class="group2">
                     <div id="guides">
                        <h4>Guides</h4>
                        <a href="">MSP</a>
                        <a href="">MSP Sales</a>
                    </div>
                     <div>
                        <h4>Contact Us</h4>
                        <a href="">Address</a>
                     </div>
                   </div> 
                </div>
                <div class="pos-footer"></div>
            </footer>
    `
    services = document.getElementsByClassName('services')[0];
    render()
}

telahome()

const btnOpen = document.getElementById('openMenu');
const btnClose = document.getElementById('closeMenu');

function toggleMenu(){
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');
    const body = document.getElementById('body');
    nav.classList.toggle('active');
    header.classList.toggle('active');
    body.classList.toggle('active');
}

btnOpen.addEventListener('click',toggleMenu);
btnClose.addEventListener('click',toggleMenu);

var year = new Date().getFullYear();

var date = `© ${year} Pactora Inc. All rights reserved.`

document.getElementsByClassName('pos-footer')[0].innerHTML = date;