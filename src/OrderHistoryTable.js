import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {ReactSession} from 'react-client-session'

function OrderHistoryTable(page) {

  const [info,setInfo] = useState([])

    useEffect(()=>{
      let getInfo = async ()=>{
        const id = ReactSession.get('id')
        const {data} = await axios.get(`https://api-jrzg.onrender.com/users?id=${id}`);
        setInfo(page === 'resi' ? data.resi.orders : data.isp.orders)
      }
      getInfo()
      
    },[])
  return (
    <div className="box-iner">
      <h2 className="margin-top-20 white font-weight-600 margin-bottom-15">Recent Orders</h2>
      <div className="table-content margin-top-20">
        <div className="margin-top-16 table-scrolling padding-right-10">
          <table className="ab-table-border-2ed" cellpadding="0" border="0">
            <thead>
              <tr className="tr-th">
                <th>ID</th>
                <th>Amount</th>
                <th>Data</th>
                <th>Plan</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {info.map((order, index) => (
                <tr key={index}>
                  <td>
                    <h4>{order.id}</h4>
                  </td>
                  <td>
                    ${order.amount}
                  </td>
                  <td>{order.data}</td>
                  <td>
                    <h4>{order.plan}</h4>
                  </td>
                  <td>
                    <span className={order.status === 'Active' ? 'activ_1' : 'expire_1'}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryTable;
