import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import Dash from './Dash';

const Auth = () => {
  const navigate = useNavigate();
  const CLIENT_ID = '981554056478732288';
  const REDIRECT_URI = 'http://localhost:3000/auth'; // replace with your redirect URI
  const CLIENT_SECRET ="t-0O6C_0_koL3Tpor6owPkm6yxv26Lmk"
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.post(
          'https://discord.com/api/oauth2/token',
          {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET, // replace with your client secret
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI,
            scope: 'identify email',
          }
        );

        // Use the access token to get the user's email and Discord information
        const { access_token } = response.data;
        const userResponse = await axios.get(
          'https://discord.com/api/users/@me',
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        const emailResponse = await axios.get(
          'https://discord.com/api/users/@me/connections',
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        const { id, username, discriminator } = userResponse.data;
        const email = emailResponse.data.find(
          (connection) => connection.type === 'email'
        ).email;

        // Send an Axios request to your backend for user details from the database
        const response = await axios.get(`localhost:2005/users`, {
          params: { id },
        });

        // Set the session data using the user object
        ReactSession.set('username', username);

        if (ReactSession.get('username') !== '') {
          navigate('/dash');
        } else {
          navigate('/');
        }
      } catch (error) {
        // Handle error cases here
        console.log(error);
      }
    };

    fetchData();
  }, [code, CLIENT_ID, CLIENT_SECRET, navigate]);

  return <Dash />;
};

export default Auth;
