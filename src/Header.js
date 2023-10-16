import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';

function Header({ spotify }) {
    const [{ user }, dispatch] = useDataLayerValue();
  return (
      <div className='header'>
          <div className='header__left'>
              <SearchIcon className='' />
              <input placeholder='Search for Artists, Songs or Podcasts' type='text' />
              
          </div>
          <div className='header__right'>
              <Avatar src={user?.images[0].url} alt={user?.display_name} />{/*used to pull the user image from the url and display it*/}
              <h4>{ user?.display_name }</h4>{/*optional chaining*/}
          </div>
    </div>
  )
}

export default Header