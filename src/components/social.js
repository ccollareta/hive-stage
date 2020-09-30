import React from 'react';
import { Link } from 'gatsby';
import SocialData from '../../meta/social.yml'
import fb from '../images/fb.png';
import tw from '../images/twitter.png';
import yt from '../images/yt.png';
import ig from '../images/ig.png';

const Social = () => (
  
    <ul className="social-icons">
    {SocialData.facebook.length > 0 &&
     <li>
     <a href={SocialData.facebook}>
         <img src={fb} />
     </a>
      </li>
      }
      {SocialData.twitter.length > 0 &&
        <li>
     <a href={SocialData.twitter}>
         <img src={tw} />
     </a>
      </li>
      }
      {SocialData.youtube.length > 0 &&
        <li>
        <a href={SocialData.youtube}>
            <img src={yt} />
        </a>
         </li>
      }
      {SocialData.instagram.length > 0 &&
        <li>
        <a href={SocialData.instagram}>
            <img src={ig} />
        </a>
         </li>
      }
      </ul>
);

export default Social;
