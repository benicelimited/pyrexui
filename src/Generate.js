import React, { useState, useEffect } from 'react';
import {ReactSession} from 'react-client-session'
import axios from 'axios'

const Generate = () => {
  const [proxyPools, setProxyPools] = useState([{}]);
  const [countries, setCountries] = useState([{}]);
  const [error, setError] = useState(null);
  const [proxyList, getProxyList] = useState([])
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchData = async (amount) => {
    const id = ReactSession.get('id')

      try {
        const {data} = await axios.get(`https://api-jrzg.onrender.com/getuserinfo?id=${id}`);
        setUserData(data.resi)
      } catch (e) {
        setError(e.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <div className="box-iner">
      <h2 className="white font-weight-600 margin-bottom-15">Generate</h2>
      <div className="flex margin-bottom-15">
        <div className="width-50 padding-right-2">
          <label className="white font-size-13 font-weight-600">
            Proxy Pool
          </label>
          <select className="select">
            {proxyPools.map((pool) => (
              <option key={pool.id} value={pool.id}>
                {pool.name}
              </option>
            ))}
          </select>
        </div>
        <div className="width-50 right">
          <label className="white font-size-13 font-weight-600">
            Country
          </label>
          <select className="select">
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex margin-bottom-15">
        <div className="width-50 padding-right-2">
          <label className="white font-size-13 font-weight-600">Type</label>
          <select className="select">
            <option value="sticky">Sticky</option>
            <option value="non-sticky">Non-Sticky</option>
          </select>
        </div>
        <div className="width-50 right">
          <label className="white font-size-13 font-weight-600">
            Quantity
          </label>
          <input
            type="number"
            className="textbox"
            placeholder="Enter Quantity"
          />
        </div>
      </div>

      <div className="margin-bottom-15 margin-top-30 text-center">
        <button className="blue-button border-radius-5 margin-auto font-size-13 font-weight-600">
          {userData.status === 'active'? "Generate" : "Purchase Plan"}
        </button>
      </div>
    </div>
    <div class="box-iner">	
			<h2 class="white font-weight-600 margin-bottom-15"> Proxy Generated</h2>
			<div class="margin-bottom-15">
			  <div class="proxy_generate"> 
							{proxyList.map((value,index)=>(
                <p key={index}>{value}</p>
              ))}
              
						</div>
					</div>
				</div>
    <div className="popup-footer-buttons flex margin-bottom-15 margin-top-15 ">
        <div className="width-45 margin-bottom-15">
            <button className="border-radius-5 border-0 background-3 task-btns width-80">  
                <h5 className="font-size-13 font-weight-600 white">  Copy </h5>
            </button>
        </div>
        <div className="width-50 margin-bottom-15">
            <button className="border-radius-5 border-0 background-3 task-btns width-80">   <h5 className="font-size-13 font-weight-600 white">  Download </h5> </button>
        </div>
    </div>
    </>
    

  );
};

export default Generate;
