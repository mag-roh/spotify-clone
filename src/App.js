import React from 'react';
import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

// creating a constructor of SpotifyWebApi
const spotify = new SpotifyWebApi();
 
function App() {
  //const [token, setToken] = useState(null);
  //dispacth is used to update the data layer
  const [{ user, token }, dispatch] = useDataLayerValue();//the { user } can be used to pull the current user anywhere in the app from the data layer, its similar to calling dataLayer.user
  //run code based on a given condition
  useEffect(() => {
    //code 
    //got the token from the url, then stripped it from the url, thats why the url shown on the browser is clean, stored it in the state _token and then checked if there is a token print i am logged in else go back to the login page.

    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      //setToken(_token);
      //Instead of setting a token, it will be dispatched to the data layer
      dispatch({
          type:'SET_TOKEN',
          token: _token,
      })

      //gives the access token to spotify API so that we can access all the spotify features

      spotify.setAccessToken(_token);
      //.getMe() is a method in the spotify API, it returns a promise
      spotify.getMe()
        .then((user) => {
         // console.log("Rohit", user);

          //dispatching the value of user into the data layer
          dispatch({
            type: 'SET_USER',
            user: user
          });
        });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      });

      spotify.getPlaylist('37i9dQZEVXcBXabbVeFvcP').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });
    }
    //console.log('I HAVE A TOKEN>>>>',token);
  }, []);//this code will run once the app component is loaded and also everytime the parameters given in the list change; runs once if the list is empty

  //console.log('Rohit', user);
  //console.log('MyToken', token);
  return (
    <div className="app">
      {/*Spotify logo*/}
      {/*login with spotify button*/}
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
