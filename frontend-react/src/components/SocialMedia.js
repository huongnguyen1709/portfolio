import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://www.linkedin.com/in/huongnguyen1709/' target='_blank'>
          <BsLinkedin />
        </a>
      </div>

      <div>
        <a href='https://github.com/huongnguyen1709' target='_blank'>
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
