import React from 'react'
import "./Player.css"
import Sidebar from './Sidebar'
import Body from './Body';
import Footer from './Footer';

function Player(/*props*/{ spotify }) {//prop drilling is used to pass spotify to the Player then to the body component
  return (
      <div className='player'>
      {/*<h1>Welcome to Spotify</h1>*/}
      <div className='player_body'>
      {/*Sidebar*/}
     <Sidebar/>
        {/*Body*/}
        <Body spotify={spotify} />
      </div>
      {/*Footer*/}
      <Footer/>
    </div>
  )
}

export default Player