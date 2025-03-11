import Image from 'next/image';
import React from 'react';

import Banner from 'assets/hero-banner.png';

import 'styles/banner-header.scss';

export default function BannerHeader() {
  return (
    <section className='hero' id='hero'>
      <div className='container'>
        <figure className='hero-banner'>
          <Image
            src={Banner}
            alt='Seo illustration'
            width={800} // Default width
            height={600} // Default height
            sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw' // Responsive sizes
            layout='responsive'
          />
        </figure>
        <div className='hero-content'>
          <h1 className='h1 hero-title'>
            Rental Facebook AD Accounts Services
          </h1>

          <div className='h4'>
            Unleash Your Potential – Infinite Accounts, Boundless Budgets
          </div>

          <button
            className='btn btn-primary'
            onClick={() => window.open('https://t.me/k6agency', '_blank')}
          >
            Get started now
          </button>
        </div>
      </div>
    </section>
  );
}
