import React,{useState,useEffect} from 'react'
import './index.css'
import Generate from './Generate';
import Navbar from './Navbar';
import axios from 'axios';
import {ReactSession} from 'react-client-session'
import OrderHistoryTable from './OrderHistoryTable'
import DataUse from './DataUse';
import JoinUs from './JoinUs';


export default function ResidentialPage(){
    function Head() {
            useEffect(() => {
            document.title = 'Pyrex Proxies | Residential';
            window.history.pushState({}, document.title, "/resi");
        }, []);
    }
    Head()
    


    const [info,setInfo] = useState({username:''})

    useEffect(()=>{
      let getInfo = async ()=>{
        const id = ReactSession.get('id')
        console.log(id)
        const {data} = await axios.get(`http://localhost:2005/getuserinfo?id=${id}`);
        setInfo(data)
      }
      getInfo()
      
    },[])
  return (
    <>
    <head>
      <meta charSet="utf-8" />
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="icon" href="./img/logo.png" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </head>
    <Navbar user={info} />
    <body>
    <div className="main-container"> 
        <div className="main-section flex">	
        <div className="middle-section width-100 background-2 border-left-1 border-right-1">		
            <div className="container">
            <div className="row">
                <div className="col-lg-6 padding-left-right-0">	
                    <Generate />
                    <OrderHistoryTable page='resi'/>
                    <JoinUs />
                </div>
                
                <div className="col-lg-6 pading-left-33"> 
                <DataUse />
                <div className="box-iner">
                        <h2 className="white font-weight-600 margin-bottom-15">Purchase </h2>
                        <div className="purchase1">
                            <h3 className="white font-size-15 font-weight-600"> Basic</h3>
                            <div className="purchase_iner"> 
                                <h2> $5</h2> 
                                <ul className="pools_ul">
                                    <li> Private network with 7M+ residential IPs</li>
                                    <li>Footsites, Footlocker EU, Finishline, Yeezy Supply, Supreme, etc</li>
                                    <li>Supporting all regions/countries with custom pools</li>
                                    <li> Useful for restocks, raffles, email/account gen, & Yeezy Supply</li>
                                    <li> DATA NEVER EXPIRES!</li>
                                </ul>
                                <div className="margin-top-20"> 
                                <div className="col1 form-group">
                                    <label>Select Quantity  </label>
                                    <select className="select">
                                        <option className="option">1</option>
                                        <option className="option"> 5 </option>
                                        <option className="option"> 10 </option>
                                        <option className="option"> 20 </option>
                                        <option className="option"> 50 </option>
                                    </select>
                                    </div>
                                    <div className="col2">
                                    <button className="blue-button">  Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                        </div>
                        </div>

                        <div className="purchase1">
                            <h3 className="white font-size-15 font-weight-600"> Standard</h3>
                            <div className="purchase_iner"> 
                                <h2> $25</h2> 
                                <ul className="pools_ul">
                                    <li>Extremely stable and reliable with a 99.99% uptome</li>
                                    <li>72M+ ethically sourced IPs</li>
                                    <li>Good for Footsites, Yeezy Supply, Shopify PP, Supreme, etc</li> 
                                    <li> DATA NEVER EXPIRES!</li>
                                </ul>
                                <div className="margin-top-20"> 
                                <div className="col1 form-group">
                                    <label>Select Quantity  </label>
                                    <select className="select">
                                        <option className="option">1</option>
                                        <option className="option"> 5 </option>
                                        <option className="option"> 10 </option>
                                        <option className="option"> 20 </option>
                                        <option className="option"> 50 </option>
                                    </select>
                                    </div>
                                    <div className="col2">
                                    <button className="blue-button">  Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                        </div>
                        </div>
                        
                        <div className="purchase1">
                            <h3 className="white font-size-15 font-weight-600">Premium</h3>
                            <div className="purchase_iner"> 
                                <h2><span>$50 </span></h2> 
                                <ul className="pools_ul">
                                    <li> Low-key provider with great performance </li>
                                    <li>40M+ real device IPs</li>
                                    <li>Great for Footsites, Yeezy Supply, Shopify PP, Supreme, etc</li> 
                                    <li> DATA NEVER EXPIRES!</li>
                                </ul>
                                <div className="margin-top-20"> 
                                <div className="col1 form-group">
                                    <label>Select Quantity  </label>
                                    <select className="select">
                                        <option className="option">1</option>
                                        <option className="option"> 5 </option>
                                        <option className="option"> 10 </option>
                                        <option className="option"> 20 </option>
                                        <option className="option"> 50 </option>
                                    </select>
                                    </div>
                                    <div className="col2">
                                    <button className="blue-button">  Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                        </div>
                        </div>
                        
                    <div className="purchase1">
                            <h3 className="white font-size-15 font-weight-600"> Elite</h3>
                            <div className="purchase_iner"> 
                                <h2> $100</h2> 
                                <ul className="pools_ul">
                                    <li> Industry Standard for Highest Quality</li>
                                    <li>100M+ ethically sourced IPs</li>
                                    <li>Perfect for Footsites, Yeezy Supply, Shopify PP, Supreme etc</li> 
                                    <li> DATA NEVER EXPIRES!</li>
                                </ul>
                                <div className="margin-top-20"> 
                                <div className="col1 form-group">
                                    <label>Select Quantity  </label>
                                    <select className="select">
                                        <option className="option">1</option>
                                        <option className="option"> 5 </option>
                                        <option className="option"> 10 </option>
                                        <option className="option"> 20 </option>
                                        <option className="option"> 50 </option>
                                    </select>
                                    </div>
                                    <div className="col2">
                                    <button className="blue-button">  Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                        </div>
                        </div>
                </div>	
                
            
                </div>			   
            </div>
            </div>
        </div>
        </div>
    </div>
    </body>
    </>


  )
}