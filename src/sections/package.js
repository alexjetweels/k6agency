import { Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/react';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from '../components/price-card';
import ButtonGroup from '../components/button-group';
import SectionHeader from '../components/section-header';

import { Icon } from '@iconify/react';

const packages = {
  personal: [
    {
      id: 1,
      data: [
        {
          id: 1,
          name: 'Personal account (new)',
          description: 'Limit $50',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Never used before, with the ability to change time zone and currency.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $50 USD per day.',
              isAvailable: true,
            },
            {
              id: 3,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Regular spending can increase the limit.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 2,
          name: 'Personal account (new)',
          description: 'Limit $250',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Never used before, with the ability to change time zone and currency.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $50 USD per day.',
              isAvailable: true,
            },
            {
              id: 3,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Regular spending can increase the limit.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 3,
          header: 'Suggested',
          headerIcon: <Icon icon='lets-icons:check-fill' />,
          name: 'Personal account (new)',
          description: 'Limit $1500',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Never used before, with the ability to change time zone and currency.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $1500 USD per day.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 4,
          header: 'Suggested',
          headerIcon: <Icon icon='lets-icons:check-fill' />,
          name: 'Personal account (new)',
          description: 'No limit',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Never used before, with the ability to change time zone and currency.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $5000 USD per day.',
              isAvailable: true,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      data: [
        {
          id: 1,
          name: 'Personal account (old)',
          description: 'Limit $50',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Used for previous White hat campaigns with many successful payouts, high reliability and good health.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $50 USD per day.',
              isAvailable: true,
            },
            {
              id: 3,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Regular spending can increase the limit.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 2,
          name: 'Personal account (old)',
          description: 'Limit $250',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Used for previous White hat campaigns with many successful payouts, high reliability and good health.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $50 USD per day.',
              isAvailable: true,
            },
            {
              id: 3,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Regular spending can increase the limit.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 3,
          header: 'Suggested',
          headerIcon: <Icon icon='lets-icons:check-fill' />,
          name: 'Personal account (old)',
          description: 'Limit $1500',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Used for previous White hat campaigns with many successful payouts, high reliability and good health.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $1500 USD per day.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 4,
          header: 'Suggested',
          headerIcon: <Icon icon='lets-icons:check-fill' />,
          name: 'Personal account (old)',
          description: 'No limit',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Used for previous White hat campaigns with many successful payouts, high reliability and good health. ',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend from 5000 usd to unlimited per day.',
              isAvailable: true,
            },
          ],
        },
      ],
    },
  ],
  business: [
    {
      id: 1,
      data: [
        {
          id: 1,
          name: 'Business Manager (normal)',
          description: 'Limit $50',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Created with reputable profiles, good health, long life.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $50 USD per day.',
              isAvailable: true,
            },
            {
              id: 3,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Regular spending can increase the limit.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 2,
          name: 'Business Manager (normal)',
          description: 'Limit $250',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Created with reputable profiles, good health, long life.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $50 USD per day.',
              isAvailable: true,
            },
            {
              id: 3,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Regular spending can increase the limit.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 3,
          header: 'Suggested',
          headerIcon: <Icon icon='lets-icons:check-fill' />,
          name: 'Business Manager (normal)',
          description: 'Limit $1500',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Created with reputable profiles, good health, long life.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $1500 USD per day.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 4,
          header: 'Suggested',
          headerIcon: <Icon icon='lets-icons:check-fill' />,
          name: 'Business Manager (normal)',
          description: 'No limit',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Created with reputable profiles, good health, long life.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $5000 USD per day.',
              isAvailable: true,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      data: [
        {
          id: 1,
          name: 'Business Manager (verified)',
          description: 'Limit $50',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Verified with Facebook and has a "blue mark," extremely good health, and is great to use for long-term White hat and Black hat campaigns.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $50 USD per day.',
              isAvailable: true,
            },
            {
              id: 3,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Regular spending can increase the limit.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 2,
          name: 'Business Manager (verified)',
          description: 'Limit $250',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Verified with Facebook and has a "blue mark," extremely good health, and is great to use for long-term White hat and Black hat campaigns.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $250 USD per day.',
              isAvailable: true,
            },
            {
              id: 3,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Regular spending can increase the limit.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 3,
          header: 'Suggested',
          headerIcon: <Icon icon='lets-icons:check-fill' />,
          name: 'Business Manager (verified)',
          description: 'Limit $1500',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Verified with Facebook and has a "blue mark," extremely good health, and is great to use for long-term White hat and Black hat campaigns.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend up to $1500 USD per day.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 4,
          header: 'Suggested',
          headerIcon: <Icon icon='lets-icons:check-fill' />,
          name: 'Business Manager (verified)',
          description: 'No limit',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Verified with Facebook and has a "blue mark," extremely good health, and is great to use for long-term White hat and Black hat campaigns.',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Can spend from 5000 usd to unlimited per day.',
              isAvailable: true,
            },
          ],
        },
      ],
    },
  ],
  fanpage: [
    {
      id: 1,
      data: [
        {
          id: 1,
          name: 'Fanpage',
          description: 'New fanpage',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Created on reputable profiles, can be used immediately and can be renamed, no followers.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 2,
          name: 'Fanpage',
          description: 'Old fanpage',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Created a long time ago and has long-standing posts, has a real following.',
              isAvailable: true,
            },
          ],
        },
        {
          id: 3,
          header: 'Suggested',
          headerIcon: <Icon icon='lets-icons:check-fill' />,
          name: 'Fanpage',
          description: 'Verified fanpage',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Verified with Facebook and has a "blue mark," extremely good health.',
              isAvailable: true,
            },
          ],
        },
      ],
    },
  ],
  profile: [
    {
      id: 1,
      data: [
        {
          id: 1,
          name: 'Profile',
          description: 'Profile',
          points: [
            {
              id: 1,
              icon: <Icon icon='lets-icons:check-fill' />,
              text: 'Crafted and cared for by us, in good health, verified for instant advertising use.',
              isAvailable: true,
            },
          ],
        },
      ],
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { business, fanpage, personal, profile } = packages;
  const [state, setState] = useState({
    active: 'personal',
    pricingPlan: personal,
  });

  const handlePricingPlan = (plan) => {
    if (plan === 'personal') {
      setState({
        ...state,
        active: 'personal',
        pricingPlan: personal,
      });
    }
    if (plan === 'business') {
      setState({
        ...state,
        active: 'business',
        pricingPlan: business,
      });
    }

    if (plan === 'fanpage') {
      setState({
        ...state,
        active: 'fanpage',
        pricingPlan: fanpage,
      });
    }

    if (plan === 'profile') {
      setState({
        ...state,
        active: 'profile',
        pricingPlan: profile,
      });
    }
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <Box id='pricing' sx={{ variant: 'section.pricing' }}>
      <Container>
        <SectionHeader slogan='Pricing Plan' title='My services include' />
        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === 'personal' ? 'active' : ''}
              type='button'
              aria-label='personal'
              onClick={() => handlePricingPlan('personal')}
            >
              Personal Ads Account
            </button>
            <button
              className={state.active === 'business' ? 'active' : ''}
              type='button'
              aria-label='business'
              onClick={() => handlePricingPlan('business')}
            >
              Business Manager
            </button>
            <button
              className={state.active === 'fanpage' ? 'active' : ''}
              type='button'
              aria-label='fanpage'
              onClick={() => handlePricingPlan('fanpage')}
            >
              Fanpage
            </button>
            <button
              className={state.active === 'profile' ? 'active' : ''}
              type='button'
              aria-label='profile'
              onClick={() => handlePricingPlan('profile')}
            >
              Profile
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className='pricing__wrapper'>
          {state.pricingPlan.map((item, index) => (
            <Carousel key={index} {...sliderParams}>
              {item.data.map((packageData) => (
                <Box
                  sx={styles.pricingItem}
                  key={`${state.active}-card--key${packageData.id}`}
                >
                  <PriceCard data={packageData} />
                </Box>
              ))}
            </Carousel>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul ': {
        display: 'flex',
        margin: '0',
        padding: '0',
      },
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['10px 15px', '10px 15px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
