import React, { useState, useEffect } from 'react';
import ResidentialPage from './ResidentialPage';
import { ReactSession } from 'react-client-session';
import axios from 'axios'
import Landing from './Landing';

const Dash = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const CLIENT_ID = '981554056478732288';
        const REDIRECT_URI = 'http://localhost:3000/dash'; // replace with your redirect URI
        const CLIENT_SECRET = "ZAC6gSJk-YKtrZYWZDZefkoLjYZPxGVK";

        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        const config = {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        };

        const data = new URLSearchParams({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: REDIRECT_URI,
          scope: 'identify email',
        });

        const response = await axios.post(
          'https://discord.com/api/oauth2/token',
          data.toString(),
          config
        );
        console.log(response.data);

        const { access_token } = response.data;

        const userResponse = await axios.get('https://discord.com/api/users/@me', {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        const { id, username, discriminator, email,avatar } = userResponse.data;
        console.log(userResponse.data)
        const userInfo = await axios.post(`https://api-jrzg.onrender.com/users`,userResponse.data,{headers:{"Content-Type":'application/json'}});
        ReactSession.set('id', id);
        setIsLoggedIn(true);
        setUser(userInfo.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // Return a cleanup function to abort pending axios requests if the component is unmounted
    return () => {
      axios.CancelToken.source().cancel();
    };
  }, []);

  return isLoggedIn ? <ResidentialPage user={user}/> : <Landing />;
};

export default Dash;
