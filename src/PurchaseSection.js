import React, { useState } from "react";

function PurchaseSection() {

  const [tier1Quantity, setTier1Quantity] = useState(1);
  const [pyrexQuantity, setPyrexQuantity] = useState(1);
 
  const handleTier1QuantityChange = (event) => {
    setTier1Quantity(Number(event.target.value));
  };

  const handlePyrexQuantityChange = (event) => {
    setPyrexQuantity(Number(event.target.value));
  };
  const handleClick = () =>{
    
  }

  return (
    <div className="box-iner">
      <h2 className="white font-weight-600 margin-bottom-15">Purchase</h2>
      <div className="purchase1">
        <h3 className="white font-size-15 font-weight-600">TIER-1 ISP</h3>
        <div className="purchase_iner">
          <h2>$15</h2>
          <ul className="pools_ul">
            <li>Exclusive Private ISPs hosted in Ashburn, VA</li>
            <li>AT&T, Sprint, Verizon, Comcast, Cox</li>
            <li>Footsites, Shopify, Retail, Nike, Gmail OC</li>
            <li>Unlimited Bandwidth</li>
            <li>10GB/s Network Connection</li>
            <li>User:Pass Authentication</li>
            <li>Unlocked 24/7</li>
          </ul>
          <div className="margin-top-20">
            <div className="col1 form-group">
              <label>Select Quantity</label>
              <select className="select" value={tier1Quantity} onChange={handleTier1QuantityChange}>
                <option className="option" value={1}>1</option>
                <option className="option" value={5}>5</option>
                <option className="option" value={10}>10</option>
                <option className="option" value={50}>50</option>
                <option className="option" value={100}>100</option>
              </select>
            </div>
            <div className="col2">
              <button className="blue-button" onClick={null}>Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>

      <div className="purchase1">
        <h3 className="white font-size-15 font-weight-600">Pyrex fiber isp</h3>
        <div className="purchase_iner">
          <h2>$50</h2>
          <ul className="pools_ul">
            <li>Dedicated Residential ISP proxies hosted in NY</li>
            <li>Private Fiber-Optic network</li>
            <li>Optimized for Nike/SNKRS</li>
            <li>Works on all retail, Shopify, Gmail OC</li>
            <li>Unlimited Bandwidth</li>
            <li>10GB/s Network Connection</li>
            <li>User:Pass Authentication </li>
            <li>  Unlocked 24/7</li>
          </ul>
          <div className="margin-top-20">
            <div className="col1 form-group">
              <label>Select Quantity </label>
              <select className="select" value={tier1Quantity} onChange={handlePyrexQuantityChange}>
                <option className="option" value={1}>1</option>
                <option className="option" value={5}>5</option>
                <option className="option" value={10}>10</option>
                <option className="option" value={50}>50</option>
                <option className="option" value={100}>100</option>
              </select>
            </div>
            <div className="col2">
              <button className="blue-button" onClick={null}>
                Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseSection
