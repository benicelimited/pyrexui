import React,{useEffect , useState} from 'react'
import {ReactSession} from 'react-client-session';
import { useNavigate } from 'react-router-dom';

import s1 from "../src/img/s1.png";
import s2 from "../src/img/s2.png";
import s3 from "../src/img/s3.png";
import s4 from "../src/img/s4.png";
import s5 from "../src/img/s5.png";
import s6 from "../src/img/s6.png";
import t1 from '../src/img/1.png'
import t2 from '../src/img/2.png'
import t3 from '../src/img/3.png'
import t4 from '../src/img/4.png'
import t5 from '../src/img/5.png'
import t6 from '../src/img/6.png'
import logo from '../src/img/logo.png';
import wifi from '../src/img/wifi.png'
import wifi1 from '../src/img/wifi1.png'
import earthImage from '../src/img/earth1.png';
import earthImage2 from '../src/img/earth2.png'

import './animate.css'
import './responsive.css'
import './style.css'

import DiscordAuthButton from './DiscordOauth';
import { Particles } from "react-tsparticles";
import { loadFull } from 'tsparticles';
import WOW from 'wowjs';
import { Link } from 'react-scroll';





const Landing = () => {
    const [scrolled, setScrolled] = useState(false);
    const history = useNavigate()
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    let x = ['navbar', 'navbar-expand-md', 'main-nav', 'navigation', 'sidebar-left'];
    if (scrolled) {
        x.push('fixed-top', 'navbar-dark');
    }

    const particlesInit = async (main) => {
    
      // modify the options object with the presets you want to use
    
      await loadFull(main);
    };
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        console.log(event.target.value)
        setSelectedOption(event.target.value);
    };

    const handlePurchase = (event) => {
        try{
            console.log(event)
            event.preventDefault();
            // Redirect to the checkout page with the selected option
            history(`/checkout?selectedOption=${selectedOption}`);
        }catch(err){
            console.log(err.message)
        }
    };
    const check = (qty) =>{
        return
    }
  
    const openCity = (evt, cityName) => {
      let i, x, tablinks;
    
      x = document.getElementsByClassName("city");
    
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
    
      tablinks = document.getElementsByClassName("tablink");
    
      for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
      }
    
      document.getElementById(cityName).style.display = "block";
    
      evt.currentTarget.className += " w3-border-red";
    }
    

    return (
            
        <body> 
            <nav className="navbar navbar-expand-md main-nav navigation fixed-top sidebar-left">
                <div className="container">
                    <button className="navbar-toggler" type="button">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>			
                    <div className="navbar-collapse" id="main-navbar">
                        <a href="#home" className="navbar-brand">
                            <img src={logo} alt="k" className="logo logo-sticky d-block d-md-none"></img>
                            <img src={logo} alt="k" className="logo d-none d-md-block"></img>
                        </a>	
                            <ul className="nav navbar-nav">
                                <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                                <li className="nav-item"><a className="nav-link " href="#features">Features</a></li>
                                <li className="nav-item"><a className="nav-link " href="#pricing">Products</a></li>
                                <li className="nav-item"><a className="nav-link " href="#sitelist">Sitelist</a></li>
                                <li className="nav-item"><a className="nav-link " href="#faq">FAQ</a></li>
                            </ul>				 				 	 
                            <div className="dash_right"> 
                                <DiscordAuthButton /> 
                            </div>
                        </div>
                </div>
            </nav>
            
            <header className="header alter1-header section text-contrast" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 wow slideInRight center z-index-12">
                        <h3>  Welcome to</h3>
                        <h2>Pyrex Proxies</h2>
                        <h5> Pyrex Proxies offers an in-house solution with unmatched functionality. </h5>
                        <nav className="nav purchase_btn"> 
                            <button className="button_zal" onClick={()=>{}}>Buy Now</button>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="shape_container">
                <div className="shapes">
                    <div className="shape1 wow slideInRight animated" style={{animationDuration: "2s", visibility: "visible", animationName: "floating"}}>
                      <img alt="Shape" src={earthImage2} style={{animation: "float 3s infinite"}}/>
                    </div>
                    
                    <div className="shape2 wow slideInRight animated" style={{animationDuration: "2s", visibility: "visible", animationName: "floating"}}> 
                        <img alt="Shape" src={earthImage}/> 
                    </div>
                    <div className="shape3 wow slideInRight animated" style={{animationDuration: "2s", visibility: "visible", animationName: "floating"}}> 
                        <img alt="Shape" src={earthImage}/> 
                    </div>
                </div>
            </div>
            </header>
            <section className="section alter3-features" id="features">
                <div className="shape_container3">
                    <div className="containerbox">
                        <div className="childbox"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <h2 className="headings wow slideInDown" style={{animationDuration: "1s"}}>Our Features</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card shadow wow slideInDown" style={{animationDuration: "1s"}}>
                                    <div className="card-body">
                                        <div className="icon-box">
                                            <img src={t1}/>
                                        </div>
                                        <div className="air_feat">
                                            <h4 className="bold">Global Network</h4>
                                            <p>Anywhere in the world, we have IP's for you. Every country, every city, all pools fine tuned to ensure you have the smoothest experience possible while providing the best pricing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card shadow wow slideInDown" style={{animationDuration: "1s"}}>
                                    <div className="card-body">
                                        <div className="icon-box">
                                            <img src={t2}/>
                                        </div>
                                        <div className="air_feat">
                                            <h4 className="bold">Site Security</h4>
                                            <p>Anywhere in the world, we have IP's for you. Every country, every city, all pools fine tuned to ensure you have the smoothest experience possible while providing the best pricing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card shadow wow slideInDown" style={{animationDuration: "1s"}}>
                                    <div className="card-body">
                                        <div className="icon-box">
                                            <img src={t3}/>
                                        </div>
                                        <div className="air_feat">
                                            <h4 className="bold">Fastest speeds Available</h4>
                                            <p>Anywhere in the world, we have IP's for you. Every country, every city, all pools fine tuned to ensure you have the smoothest experience possible while providing the best pricing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card shadow wow slideInDown" style={{animationDuration: "1s"}}>
                                    <div className="card-body">
                                        <div className="icon-box">
                                            <img src={t4}/>
                                        </div>
                                        <div className="air_feat">
                                            <h4 className="bold">Online 24/7 Guarantee</h4>
                                            <p>Anywhere in the world, we have IP's for you. Every country, every city, all pools fine tuned to ensure you have the smoothest experience possible while providing the best pricing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card shadow wow slideInDown" style={{animationDuration: "1s"}}>
                                    <div className="card-body">
                                        <div className="icon-box">
                                            <img src={t5}/>
                                        </div>
                                        <div className="air_feat">
                                            <h4 className="bold">Instant Delivery</h4>
                                            <p>Anywhere in the world, we have IP's for you. Every country, every city, all pools fine tuned to ensure you have the smoothest experience possible while providing the best pricing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card shadow wow slideInDown" style={{animationDuration: "1s"}}>
                                    <div className="card-body">
                                        <div className="icon-box">
                                            <img src={t6}/>
                                        </div>
                                        <div className="air_feat">
                                            <h4 className="bold">24/7 Customer Service</h4>
                                            <p>Anywhere in the world, we have IP's for you. Every country, every city, all pools fine tuned to ensure you have the smoothest experience possible while providing the best pricing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>					
                    <div className="shape_container4">
                        <div className="containerbox">
                            <div className="childbox"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pricing">
                <div className="shape_container">
                    <div className="shapes">
                        <div className="shape4 wow slideInRight animated" style={{animationduration: '2s', visibility: "visible", animationName: "floating"}}> 
                            <img alt="Shape" src={wifi}/> 
                        </div>
                        <div className="shape5 wow slideInRight animated" style={{animationduration: '2s', visibility: "visible", animationName: "floating"}}> 
                            <img alt="Shape" src={wifi} /> 
                        </div>
                        <div className="shape6 wow slideInRight animated" style={{animationduration: '2s', visibility: "visible", animationName: "floating"}}> 
                            <img alt="Shape" src={wifi1} /> 
                        </div>
                        <div className="shape7 wow slideInRight animated" style={{animationduration: '2s', visibility: "visible", animationName: "floating"}}> 
                            <img alt="Shape" src={wifi1}/> 
                        </div>
                    </div>
                </div>
                <div className="container whoweare" id="accounts"> 
                    <div className="row"> 
                        <div className="col-lg-12 text-center wow slideInDown" style={{animationduration: '2s', visibility: "visible", animationName: "slideInLeft"}}>
                            <h2>  Our Pricing </h2>	
                        </div>	   
                        <div className="col-lg-12 text-center wow slideInLeft" style={{animationduration: '2s', visibility: "visible", animationName: "slideInLeft"}}>
                            <div className="w3-row">
                            <div onClick={(e) => openCity(e, 'London')} className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding w3-border-red">Residential</div>
                            <div onClick={(e) => openCity(e, 'Paris')} className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">ISP</div>
                            </div>
                            <div id="London" className="w3-container city">
                                <div className="row justify-content-center"> 
                                    <div className="col-lg-5 wow slideInDown" style={{ animationDuration: '1s' }}>
                                    <div className="features_wraper">
                                        <div className="logo_product">
                                        <img src={logo} alt="" />
                                        </div>
                                        <h4>BASIC</h4>
                                        <h3> <span>$</span>5 Per Gb</h3>
                                        <ul>
                                        <li><i className="fa fa-check-circle" aria-hidden="true"></i> Private network with 7M+ residential IPs</li>
                                        <li> <i className="fa fa-check-circle" aria-hidden="true"></i>Footsites, Footlocker EU, Finishline, Yeezy Supply, Supreme, etc</li>
                                        <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Supporting all regions/countries with custom pools</li>
                                        <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Useful for restocks, raffles, email/account gen, & Yeezy Supply</li>
                                        <li> <i className="fa fa-check-circle" aria-hidden="true"></i> DATA NEVER EXPIRES!</li>
                                        </ul>
                                        <select onChange={handleOptionChange}>
                                        <option value={1}>$5 Per 1 GB</option>
                                        <option value={2}>$10 Per 2 GB</option>
                                        <option value={3}>$20 Per 4 GB</option>
                                        <option value={4}>$50 Per 10 GB</option>
                                        </select>
                                        <form onSubmit={handlePurchase}>
                                        <div className="hiden_quantity">
                                            <button className="button_zal" type="submit">Purchase Now</button>
                                        </div>
                                        </form>
                                    </div>
                                    </div>
                                    <div className="col-lg-5 wow slideInDown" style={{ animationDuration: '1s' }}>
                                    <div className="features_wraper">
                                        <div className="logo_product">
                                        <img src={logo} alt="" />
                                        </div>
                                        <h4>STANDARD</h4>
                                        <h3> <span>$</span>12 Per Gb</h3>
                                        <ul>
                                        <li><i className="fa fa-check-circle" aria-hidden="true"></i> Private network with 7M+ residential IPs</li>
                                        <li> <i className="fa fa-check-circle" aria-hidden="true"></i>Footsites, Footlocker EU, Finishline, Yeezy Supply, Supreme, etc</li>
                                        <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Supporting all regions/countries with custom pools</li>
                                        <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Useful for restocks, raffles, email/account gen, & Yeezy Supply</li>
                                        <li> <i className="fa fa-check-circle" aria-hidden="true"></i> DATA NEVER EXPIRES!</li>
                                        </ul>
                                        <select onChange={handleOptionChange}>
                                        <option>$12 Per 1 GB</option>
                                        <option>$24 Per 2 GB</option>
                                        <option>$48 Per 4 GB</option>
                                        <option>$120 Per 10 GB</option>
                                        </select>
                                        <form onSubmit={null} enctype='text/plain'>
                                        <div className="hiden_quantity">
                                            <button className="button_zal" type="submit">Coming Soon</button>
                                        </div>
                                        </form>
                                    </div>
                                    </div>
                                    <div className="col-lg-5 wow slideInDown" style={{ animationDuration: '1s' }}>
                                        <div className="features_wraper">
                                            <div className="logo_product">
                                            <img src={logo} alt="" />
                                            </div>
                                            <h4>PREMIUM</h4>
                                            <h3> <span>$</span>15 Per Gb</h3>
                                            <ul>
                                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> Private network with 7M+ residential IPs</li>
                                            <li> <i className="fa fa-check-circle" aria-hidden="true"></i>Footsites, Footlocker EU, Finishline, Yeezy Supply, Supreme, etc</li>
                                            <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Supporting all regions/countries with custom pools</li>
                                            <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Useful for restocks, raffles, email/account gen, & Yeezy Supply</li>
                                            <li> <i className="fa fa-check-circle" aria-hidden="true"></i> DATA NEVER EXPIRES!</li>
                                            </ul>
                                            <select onChange={handleOptionChange}>
                                            <option>$15 Per 1 GB</option>
                                            <option>$30 Per 2 GB</option>
                                            <option>$60 Per 4 GB</option>
                                            <option>$150 Per 10 GB</option>
                                            </select>
                                            <form onSubmit={null}>
                                            <div className="hiden_quantity">
                                                <button className="button_zal" type="submit">Coming Soon</button>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 wow slideInDown" style={{ animationDuration: '1s' }}>
                                    <div className="features_wraper">
                                        <div className="logo_product">
                                        <img src={logo} alt="" />
                                        </div>
                                        <h4>ELITE</h4>
                                        <h3> <span>$</span>18 Per Gb</h3>
                                        <ul>
                                        <li><i className="fa fa-check-circle" aria-hidden="true"></i> Private network with 7M+ residential IPs</li>
                                        <li> <i className="fa fa-check-circle" aria-hidden="true"></i>Footsites, Footlocker EU, Finishline, Yeezy Supply, Supreme, etc</li>
                                        <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Supporting all regions/countries with custom pools</li>
                                        <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Useful for restocks, raffles, email/account gen, & Yeezy Supply</li>
                                        <li> <i className="fa fa-check-circle" aria-hidden="true"></i> DATA NEVER EXPIRES!</li>
                                        </ul>
                                        <select onChange={handleOptionChange}>
                                        <option>$18 Per 1 GB</option>
                                        <option>$36 Per 2 GB</option>
                                        <option>$72 Per 4 GB</option>
                                        <option>$180 Per 10 GB</option>
                                        </select>
                                        <form onSubmit={null}>
                                            <div className="hiden_quantity">
                                                <button className="button_zal" type="submit">Coming Soon</button>
                                            </div>
                                        </form>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Paris" className="w3-container city displayNo">
                            <div className="row justify-content-center"> 
                                <div className="col-lg-5 wow slideInDown" style={{animationDuration: '1s'}}>
                                <div className="features_wraper"> 
                                    <div className="logo_product">
                                    <img src={logo} alt=""/>
                                    </div>
                                    <h4>TIER-1 ISP</h4>
                                    <h3> <span>$</span>40 Per Ips</h3>
                                    <ul>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Exclusive Private ISPs hosted in Ashburn, VA</li>
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i>AT&T, Sprint, Verizon, Comcast, Cox</li>
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Footsites, Shopify, Retail, Nike, Gmail OC</li> 
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i>  Unlimited Bandwidth</li> 
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i> 10GB/s Network Connection </li> 
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i> User:Pass Authentication </li> 
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Unlocked 24/7 </li>  
                                    </ul>
                                    <select> 
                                    <option>$5 Per 1 GB  </option>
                                    <option>$5 Per 1 GB  </option>
                                    <option>$5 Per 1 GB  </option>
                                    <option>$5 Per 1 GB  </option>
                                    </select> 
                                    <form onSubmit={() => check("3")} encType='text/plain'>
                                    <div className="hiden_quantity">
                                        <button className="button_zal" type="submit"><a href="#"> Purchase Now </a></button>
                                    </div>
                                    </form>
                                </div>
                                </div> 
                                                                
                                <div className="col-lg-5 wow slideInDown" style={{animationDuration: '1s'}}>
                                <div className="features_wraper">
                                    <div className="logo_product">
                                    <img src={logo} alt=""/>
                                    </div>
                                    <h4>PYREX FIBER ISP</h4>
                                    <h3> <span>$</span>35 Per Ips</h3>
                                    <ul>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Dedicated Residential ISP proxies hosted in NY</li>
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i>Private Fiber-Optic network</li>
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Optimized for Nike/SNKRS</li> 
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i>  Works on all Retail, Shopify, Gmail OC</li> 
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Unlimited Bandwidth </li> 
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i> 10GB/s Network Connection </li> 
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i> User:Pass Authentication </li> 
                                    <li> <i className="fa fa-check-circle" aria-hidden="true"></i> Unlocked 24/7 </li> 
                                    </ul>
                                    <select> 
                                    <option>$5 Per 1 GB  </option>
                                    <option>$5 Per 1 GB  </option>
                                    <option>$5 Per 1 GB  </option>
                                    <option>$5 Per 1 GB  </option>
                                    </select> 
                                    <form onSubmit={() => check("3")} encType='text/plain'>
                                    <div className="hiden_quantity">
                                        <button className="button_zal" type="submit"><a href="#"> Purchase Now </a></button>
                                    </div>
                                    </form>
                                </div>
                                </div> 
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            
           <Particles
             id="tsparticles"
             init={particlesInit}
             style={{
               position: "absolute",
               width: "100%",
               height: "100%",
               backgroundColor: "transparent",
               backgroundImage: "none",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "50% 50%",
               zIndex: 1,
               top: 0,
               minHeight: "600px",
             }}
             options={{
               particles: {
                 number: {
                   value: 80,
                   density: {
                     enable: true,
                     value_area: 800,
                   },
                 },
                 color: {
                   value: ["#FFA500"]
                 },
                 shape: {
                   type: "circle",
                   stroke: {
                       width: 0,
                       color: "#FFA500"
                   }
                 },
                 size: {
                   value: 3,
                   random: true,
                   anim: {
                     enable: false,
                     speed: 40,
                     size_min: 0.1,
                     sync: false,
                   }
                 },
                 line_linked: {
                   enable: false,
                 },
                 move: {
                   enable: true,
                   speed: 5,
                   direction: "none",
                   random: true,
                   straight: false,
                   out_mode: "out",
                   bounce: false,
                   attract: {
                     enable: false,
                     rotateX: 600,
                     rotateY: 1200,
                   },
                 },
               },
               retina_detect: true,
             }}
           />
           
            <section className="section alter3-features" id="sitelist">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 wow slideInDown" style={{animationDuration: '1s'}}>
                        <h2 className="headings"> Dominating Multiple Platforms </h2>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="sitelists wow slideInDown" style={{animationDuration: '1s'}}>
                        <div className="flex">
                            <img src={s1} alt="platform 1"/>
                            <img src={s2} alt="platform 2"/>
                            <img src={s3} alt="platform 3"/>
                            <img src={s4} alt="platform 4"/>
                            <img src={s5} alt="platform 5"/>
                            <img src={s6} alt="platform 6"/>  
                        </div> 
                        </div> 
                    </div>  					
                    </div>
                </div>	
            </section>
            <section className="section faqs-dd edge top-left" id="faq">
            <div className="container">
                <h2 className="faq-heading">Frequently Asked Questions</h2>
                <div className="faq-container">
                <div className="faq-content">
                    <button className="acc-btn">Why Choose Pyrex Proxies?</button>
                    <div className="acc-content">
                    <p>Why Choose Pyrex Proxies?</p>
                    </div>

                    <button className="acc-btn">Where Do I Receive My Proxies?</button>
                    <div className="acc-content">
                    <p>Where Do I Receive My Proxies?</p>
                    </div>

                    <button className="acc-btn">How Do I Renew My Proxies?</button>
                    <div className="acc-content">
                    <p>How Do I Renew My Proxies?</p>
                    </div>

                    <button className="acc-btn">Where Do I Manage My Residential Proxies?</button>
                    <div className="acc-content">
                    <p>Where Do I Manage My Residential Proxies?</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 footer-contact wow slideInLeft" style={{animationDuration:"2s"}}>
                                <img src={logo} className="footer-logo"/>
                                <p> © 2023 <strong>Pyrex Proxies </strong>All Right Reserved.</p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links wow slideInLeft" style={{animationDuration:"2s"}}>
                                <h4>Company</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Dashboard</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Purchase </a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Discord </a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links wow slideInLeft" style={{animationDuration:"2s"}}>
                                <h4>Legal</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="terms.html">Terms of Service </a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="privacy.html">Privacy &amp; Policy </a></li> 
                                <li><i className="bx bx-chevron-right"></i> <a href="privacy.html">Refund Policy </a></li> 
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-newsletter wow slideInLeft" style={{animationDuration:"2s"}}>
                                <h4>Follow Us</h4>
                                <div className="social-links">
                                    <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </body>
        

    )
}

export default Landing