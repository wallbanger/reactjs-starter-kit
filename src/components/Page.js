import React, { Component } from 'react';
import styles from './page.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PrimaryButton from './site/buttons/PrimaryButton';
class Page extends Component {

  render() {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.page__container}>
          <div className={styles.page__content}>
            {text}
          </div>
          <PrimaryButton />
        </div>
        <Footer />
      </div>
    );
  }   
}

export default Page;
