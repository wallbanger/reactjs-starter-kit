import React, { Component } from 'react'
import styles from './footer.css';
import Logo from '../site/logo/Logo'

class Footer extends Component {

  render() {
    let className = styles.footer;
    let text = 'Site Footer';

    return (
      <div className={className}>
        <div></div>{text}
        <Logo className={styles.footer__logo} />
      </div>
    );
  }
}

export default Footer;

