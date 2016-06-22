import React, { Component } from 'react';
import styles from './page.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PrimaryButton from './site/buttons/PrimaryButton'
import Dropdown from './site/dropdown/Dropdown'

class Page extends Component {

  render() {
    const text = 'Site Page';

    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.page__container}>
          <div>
            {text}
            <Dropdown className="site__dropdown" />
          </div>
          <PrimaryButton />
        </div>
        <Footer />
      </div>
    );
  }   
}

export default Page;
