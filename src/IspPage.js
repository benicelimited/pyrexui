import React,{useState,useEffect} from 'react'
import OrderHistoryTable from './OrderHistoryTable';
import './index.css'
import JoinUs from './JoinUs';
import PurchaseSection from './PurchaseSection';
import Navbar from './Navbar';
import {ReactSession} from 'react-client-session'
import axios from 'axios';


function IspPage() {
  
    const defaultVal = [ {
        id: '001',
        amount: 100,
        data: '15 GB',
        plan: 'Residential',
        status: 'Active',
      },
      {
        id: '002',
        amount: 50,
        data: '10 GB',
        plan: 'Business',
        status: 'Expired',
      }]
  
    const [info,setInfo] = useState({username:''})
    useEffect(()=>{
      
      let getInfo = async ()=>{
        const id = ReactSession.get('id')
        const {data} = await axios.get(`https://api-jrzg.onrender.com/getuserinfo?id=${id}`);
        setInfo(data)
      }
      getInfo()
      
    },[])
    function Head() {
            useEffect(() => {
            document.title = 'Pyrex Proxies | ISP';
        }, []);
    }
    Head()
  return (
    <>
    <Navbar user={info}/>
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
    <body>
    <div className="main-section flex">	
	<div className="middle-section width-100 background-2 border-left-1 border-right-1">		
		 <div className="container">
			<div className="row">
				<div className="col-lg-6 padding-left-right-0">	
                <OrderHistoryTable page='isp'/>
                <JoinUs />
			 </div> 
			  <div className="col-lg-6 pading-left-33"> 
				<PurchaseSection />
			  </div>			   
			</div>
		 </div>
	</div>
	</div>
    </body>
    </>
  )
}

export default IspPage