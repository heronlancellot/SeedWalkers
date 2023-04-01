import React from 'react'
import styles from '../styles/Header.module.css';
import { Web3Button } from '@web3modal/react'


const Header = () => {
  return (
    <Header className={styles.header__container}>
      <div className={styles.header__container_metamask}>
        <Web3Button/>
      </div>
    </Header>
  );
};

export default Header;
