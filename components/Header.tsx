// @ts-check
import React from 'react';
import Link from 'next/link';

import {Hidden} from '@material-ui/core';
import {soundcloud, ig} from '../static';

/** @type {{search: React.CSSProperties}} */
const styles = {
  root: {
    display: 'flex' as 'flex',
    width: '100%',
    backgroundColor: 'black' as 'black',
    height: '70px',
    position: 'relative' as 'relative',
  },
  links: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  link: {
    marginRight: '8px',
    marginLeft: '8px',
    fontFamily: 'Comfortaa, sans-serif',
    color: 'white',
  },
  social: {
    display: 'flex' as 'flex',
    alignItems: 'center' as 'center',
    height: '70px',
    width: 'auto',
    position: 'absolute' as 'absolute',
    right: '0',
    marginRight: '5px',
  },
  icon: {
    height: '50px',
    marginRight: '15px',
  },
  iconMobile: {
    height: '30px',
    marginRight: '8px',
  },
};

class Header extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.links}>
          <Link href="/">
            <a style={styles.link}>Home</a>
          </Link>
          <Link href="/Shop">
            <a style={styles.link}>Shop</a>
          </Link>
        </div>
        <div style={styles.social}>
          <Hidden xsDown>
            <a href={'https://soundcloud.com/oatniq'}>
              <img src={soundcloud} style={styles.icon} />
            </a>
            <a href={'https://www.instagram.com/oatniq/?hl=en'}>
              <img src={ig} style={styles.icon} />
            </a>
          </Hidden>
          <Hidden smUp>
            <a href={'https://soundcloud.com/oatniq'}>
              <img src={soundcloud} style={styles.iconMobile} />
            </a>
            <a href={'https://www.instagram.com/oatniq/?hl=en'}>
              <img src={ig} style={styles.iconMobile} />
            </a>
          </Hidden>
        </div>
      </div>
    );
  }
}

export default Header;
