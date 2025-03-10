import React, { useContext } from 'react';
import { Box } from 'theme-ui';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';

import menuItems from './header.data';

import { Icon } from '@iconify/react';
import Link from 'next/link';

const social = [
  {
    path: '/',
    icon: <Icon icon={'mdi-light:facebook'} />,
  },
  {
    path: 'https://t.me/kdzagency',
    icon: <Icon icon={'ic:twotone-telegram'} />,
  },
];

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width='320px'
      drawerHandler={
        <Box sx={styles.handler}>
          <Icon icon='material-symbols:menu' fontSize={30} />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <Icon icon='material-symbols:close' color='#000000' fontSize={30} />
      }
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      {/* <Scrollbars autoHide> */}
      <Box sx={styles.content}>
        <Box sx={styles.menu}>
          {menuItems.map(({ path, label }, i) => (
            <Link href={path} key={i} className='no-underline'>
              {label}
            </Link>
          ))}
        </Box>

        <Box sx={styles.menuFooter}>
          <Box sx={styles.social}>
            {social.map(({ path, icon }, i) => (
              <Box as='span' key={i} sx={styles.social.icon}>
                <Link target='_blank' href={path}>
                  {icon}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* </Scrollbars> */}
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 36,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};

export default MobileDrawer;
