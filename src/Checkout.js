import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './index.css'

const Checkout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedOption = queryParams.get('selectedOption');
  // Function to get the product information based on the selected option
  const getProductInfo = () => {
    // Implement your logic to fetch the product information based on the selected option
    // For this example, I'll provide a sample implementation

    // Define an object to map the selected option to the corresponding product information
    const productInfoMap = {
      '1': {
        name: 'Product 1',
        price: 5,
      },
      '2': {
        name: 'Product 2',
        price: 10,
      },
      '3': {
        name: 'Product 3',
        price: 20,
      },
      '4': {
        name: 'Product 4',
        price: 50,
      },
    };

    // Get the product information based on the selected option
    const productInfo = productInfoMap[selectedOption]

    return productInfo;
  };

  // Get the product information
  const productInfo = getProductInfo();
  const handleReturnClick = () => {
    window.history.back();
  };

  useEffect(() => {
    document.title = 'Pyrex Proxies | Checkout';
  }, []);

  return (
    <body>
    <div className="main-container">
        <div className="main-section flex">	
        <div className="middle-section width-100 background-2 border-left-1 border-right-1">		
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 padding-left-right-0">	
                        <h2 className="white  font-weight-600 margin-bottom-15"> Checkout</h2>
                        <div className="box-iner">
                            <div className="flex check-lists">
                                <div className="width-80 shash_1"> 
                                    <input type="checkbox" />
                                    {/*<img src={productInfo.image} alt={productInfo.name} className="product-image" />*/}
                                    <div className="product-head">
                                    <h5>{productInfo.name}</h5>
                                    <p>{productInfo.description}</p>
                                    </div>
                                </div>
                                <div className="width-20 right-edits">
                                    <p>Price: ${productInfo.price}</p>
                                </div>
                            </div> 
                        </div> 
                        
                        <div className="box-iner flex">
                            <div className="width-70">  
                                <div className="padding-right-2 margin-bottom-15"> 
                                    <label> Email</label>								
                                    <input type="text" placeholder="Enter your email" className="textbox"/>								
                                </div> 
                                <div className="padding-right-2 margin-bottom-15"> 
                                    <label> Address Line 1</label>								
                                    <input type="text" placeholder="Enter your address" className="textbox"/>								
                                </div>
                                
                                <div className="padding-right-2 margin-bottom-15"> 
                                    <label> Address Line 2</label>								
                                    <input type="text" placeholder="Enter your address" className="textbox"/>								
                                </div>
                                <div className="flex margin-bottom-15">
                                    <div className="width-50 padding-right-2">
                                        <label>Post code  </label> 
                                        <input type="text"  className="textbox" placeholder="Enter your post code"/> 
                                    </div>
                                    <div className="width-50 padding-right-2"> 
                                            <label>City  </label>
                                        <input type="text"  className="textbox" placeholder="Enter your  city"/> 
                                    </div>
                                </div>

                                <div className="flex margin-bottom-15">
                                    <div className="width-50 margin-right-15"> 
                                        <label>State</label>
                                        <input type="text"  className="textbox" placeholder="Enter your State"/> 
                                    </div>
                                    <div className="width-50 padding-right-2"> 
                                            <label>Country  </label>
                                        <input type="text"  className="textbox" placeholder="Enter your country"/> 
                                    </div>
                                </div>  
                            </div>   
                        </div>
    
                        <div className="box-iner flex">
                            <div className="width-70">  
                                <div className="flex">
                                    <div className="width-50 pay-card margin-right-15"> 
                                        <input type="radio" id="payment" name="paymentmethod" value="payment" />
                                        <label>Debit card/Credit card</label>
                                        <img src="" className="payment-img"/>
                                        
                                    </div>
                                    <div className="width-50 pay-card"> 
                                        <input type="radio" id="payment" name="paymentmethod" value="payment"/>
                                        <label>Paypal</label>
                                        <img src="" className="payment-img"/>
                                        
                                    </div>
                                </div>
    

                                    <div className="padding-right-2 margin-bottom-15"> 
                                        <label> Cardholder name</label>								
                                        <input type="text" placeholder="Pyrex Proxies" className="textbox"/>								
                                    </div>
                                
                                    <div className="padding-right-2 margin-bottom-15"> 
                                        <label> Card number</label>								
                                        <input type="text" placeholder="35776357082" className="textbox card-text"/>								
                                    </div>

                                    <div className="flex">
                                        <div className="padding-right-2 width-80 margin-bottom-15"> 
                                            <label> Expiry date</label>								
                                            <input type="text" placeholder="10/25" className="textbox"/>								
                                            </div>
                                        <div className="padding-right-2 width-20 margin-bottom-15"> 
                                            <label> CVV</label>								
                                            <input type="text" placeholder="***" className="textbox"/>								
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className='box-iner flex'>
                            <div className="width-30">
                                <div className="order-details"> 
                                    <h5> Order Details </h5>
                                    <div className="flex">
                                        <div className="left-text">Subtotal: </div>
                                        <div className="right-value"> ${productInfo.price}</div>
                                    </div>

                                    <div className="flex">
                                        <div className="left-text">Tax: </div>
                                        <div className="right-value">$12</div>
                                    </div>
                                    <div className="horizontal-line"> </div>
                                    <div className="flex margin-bottom-15">
                                    <div className="width-75 margin-right-15">  
                                        <input type="text"  className="textbox" placeholder="Enter your cupon code"/> 
                                    </div>
                                    <div className="width-25 padding-right-2"> 
                                        <button className="blue-button border-radius-5 margin-auto font-weight-600">  Apply </button>
                                    </div>
                                </div>
                                
                                    <div className="flex">
                                        <div className="left-text">Total: </div>
                                        <div className="right-value"> ${productInfo.price + 12}</div>
                                    </div>
                                    <div className="margin-bottom-15 margin-top-30 text-center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <button className="blue-button border-radius-5 font-size-13 font-weight-600">Pay Now</button>
                                    <button className="blue-button border-radius-5 font-size-13 font-weight-600" onClick={handleReturnClick}>Return</button>
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

  )
}

export default Checkout