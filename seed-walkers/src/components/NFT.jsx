import React from 'react'
import styles from '../styles/NFT.module.css';

const NFT = () => {
  return (
    <div className={styles.nft__container}>
        <div className={styles.nft__container_image}>
            <img src="./constants/cat-imagee.png" alt="NFT Dinâmico" />

        </div>
        <h1>NFT</h1>
    </div>
  )
}

export default NFT