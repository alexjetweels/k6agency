import React, { useEffect } from 'react';
import { preLoaderAnim } from '../animations';
import Image from 'next/image';

import Logo from 'assets/kdzlogo.png';

import './styles.scss';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className='preloader'>
      <div className='texts-container'>
        <Image src={Logo} alt='K6 Agency' width={100} height={100} />
        <span>K6</span>
        <span>AGENCY</span>
      </div>
    </div>
  );
};

export default PreLoader;
