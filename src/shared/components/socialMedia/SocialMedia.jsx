import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import "./SocialMedia.scss"

const SocialMedia = ({iconSize, children}) => {
  console.log(children)
  return (
    <div className="social-links">
      <span className='social-link'><a href="http://instagram.com/ir.itf" title='Instagram' target='_blank'><InstagramIcon fontSize={iconSize}/></a></span> 

      <span className='social-link'><a href="https://t.me/irantennisfederation" title='Telegram' target='_blank'><TelegramIcon fontSize={iconSize}/></a></span>
      
      <span className='social-link'><a href="https://www.youtube.com/channel/UC0g9QQxsIZabUn8Iva-mZzA" title='Youtube' target='_blank'><YouTubeIcon fontSize={iconSize}/></a></span>

      {children && (
        children
      )}
    </div>
  );
}

export default SocialMedia