import React from 'react';

import '../styles/contact.scss';
import { Link } from 'components/link';
import { Box } from 'theme-ui';
import List from 'components/list';

export default function Contact() {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-grid'>
          <div className='footer-brand'>
            <Link href='#' className='footer-brand__logo'>
              K6 Agency
            </Link>

            <ul className='social-list'>
              <li>
                <a
                  href='https://t.me/kdzagency'
                  className='social-link'
                  target='_blank'
                  title='Telegram K6 Agency'
                >
                  <ion-icon name='send'></ion-icon>
                </a>
              </li>

              <li>
                <a
                  href='https://t.me/QKTRAN'
                  target='_blank'
                  className='social-link'
                  title='Telegram PK Tran'
                >
                  <ion-icon name='send'></ion-icon>
                </a>
              </li>

              <li>
                <a
                  href='https://wa.me/84919596701'
                  target='_blank'
                  className='social-link'
                  title='Whatsapp'
                >
                  <ion-icon name='logo-whatsapp'></ion-icon>
                </a>
              </li>

              <li>
                <a
                  href='skype:live:.cid.91108a17bfc43958'
                  className='social-link'
                  target='_blank'
                  title='Skype'
                >
                  <ion-icon name='logo-skype'></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className='footer-list'>
              <li>
                <p className='footer-list-title'>Contact Info</p>
              </li>

              <li>
                <p className='footer-list-item-info'>Phone:</p>{' '}
                <p className='footer-list-item'>+84919596701</p>
              </li>

              <li>
                <p className='footer-list-item-info'>Email:</p>{' '}
                <p className='footer-list-item'>khaimaster2208@gmail.com</p>
              </li>

              <li>
                <p className='footer-list-item-info'>Address:</p>{' '}
                <p className='footer-list-item'>
                  106 Hoang Quoc Viet, Nghia Do ward, Cau Giay district, Hanoi
                  city, Vietnam
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <p className='copyright-text'>
          &copy; 2024{' '}
          <Link href='#'>
            <b>K6 Agency</b>{' '}
          </Link>{' '}
          All Rights Reserved.
        </p>
      </Box>
    </footer>
  );
}
