import React, { Component, PropTypes } from 'react'
import Logo from '../site/logo/Logo'
import styles from './header.css';

class Header extends Component {

  render() {
    return (
      <div className={styles.header}>
        <Logo className={styles.header__logo} />
        <div>
          Site Header
        </div>
      </div>
    );
  }
}

export default Header;
