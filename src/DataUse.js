import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {ReactSession} from 'react-client-session'

const DataUse = () => {
    const [info,setInfo] = useState({data:{totalData:0, dataUsed:0, remainingData: 0}})

    useEffect(()=>{
      let getInfo = async ()=>{
        const id = ReactSession.get('id')
        console.log(id)
        const {data} = await axios.get(`http://localhost:2005/getuserinfo?id=${id}`);
        setInfo(data.resi)
      }
      getInfo()
      
    },[])
  return (
    <div className="box-iner">
        <h2 className="white font-weight-600 margin-bottom-15">Data Used</h2>
        <div className="right_checkouts">
                <div className="prog">
                    <p> Total Data: {info.data.totalData}</p>
                    <div className="progress">
                        <div className="progress-bar pinkbg" role="progressbar" style={{width:`${info.data.totalData > 0 ?'100':'0'}%`}} aria-valuenow={`${info.data.totalData > 0 ?'100':'0'}`} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            
            <div className="prog">
            <p>  Data Used:{info.data.dataUsed}</p>
            <div className="progress">
                <div className="progress-bar pinkbg" role="progressbar" style={{width:`${info.data.dataUsed}%`}} aria-valuenow={`${info.data.dataUsed}`} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            
            <div className="prog">
            <p>  Remaining Amount:{info.data.remainingData}</p>
            <div className="progress">
                <div className="progress-bar pinkbg" role="progressbar" style={{width:`${info.data.remainingData}`}} aria-valuenow={`${info.data.remainingData}`} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DataUse