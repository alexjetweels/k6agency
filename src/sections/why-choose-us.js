import React from 'react';
import 'styles/styles.scss';

export default function WhyChooseUs() {
  return (
    <section className='about'>
      <div className='container'>
        <div className='about-content'>
          <div className='about-icon'>
            <ion-icon name='cube'></ion-icon>
          </div>

          <h2 className='h2 about-title'>Why Choose Us ?</h2>

          <p className='about-text'>
            Facebook is gradually changing and it is more difficult and affects
            each business's Advertising. We have many years of advertising
            experience and have many ways to overcome all difficulties when
            customers advertise.
          </p>

          <button className='btn btn-outline'>Learn More</button>
        </div>

        <ul className='about-list'>
          <li>
            <div className='about-card'>
              <div className='card-icon'>
                <ion-icon name='thumbs-up'></ion-icon>
              </div>

              <h3 className='h3 card-title'>Esay To Use</h3>

              <p className='card-text'>
                Allow all White hat, light Grey hat products.
              </p>
            </div>
          </li>

          <li>
            <div className='about-card'>
              <div className='card-icon'>
                <ion-icon name='trending-up'></ion-icon>
              </div>

              <h3 className='h3 card-title'>Refund</h3>

              <p className='card-text'>
                We will refund amount left when you want stop work with our ads
                account.
              </p>
            </div>
          </li>

          <li>
            <div className='about-card'>
              <div className='card-icon'>
                <ion-icon name='shield-checkmark'></ion-icon>
              </div>

              <h3 className='h3 card-title'>Unlimited</h3>

              <p className='card-text'>
                Unlimited spending right after initialization.
              </p>
            </div>
          </li>

          <li>
            <div className='about-card'>
              <div className='card-icon'>
                <ion-icon name='server'></ion-icon>
              </div>

              <h3 className='h3 card-title'>VAT</h3>

              <p className='card-text'>ZERO %VAT.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
