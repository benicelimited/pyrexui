import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import { Link } from 'react-router-dom';


const DiscordAuthButton = () => {
  const CLIENT_ID = '981554056478732288';
  const REDIRECT_URI = 'https://pyrexui-benicelimited.vercel.app/dash'; // replace with your redirect URI
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const session = ReactSession.get('id')
    console.log(session)
    if(session){
      setIsLoggedIn(true)
    }

  },[ReactSession])
  const handleClick = async () => {
    
      // Send the user to the Discord OAuth2 authorization page
      window.location = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=identify%20email`;

      // Once the user is redirected back to your app with a code, use it to get an access token
  
  };

  return (
    <>
      {isLoggedIn === true ? (
          <button className="button_zal">
          <Link to="/resi">Dashboard</Link>
        </button>
      ) : (
        <button className="button_zal" onClick={handleClick}>
          Discord Login
        </button>
      )}
    </>
  );
};

export default DiscordAuthButton;
