'use client'

import React from 'react';
import styles from './cartempty.module.scss';
import Image from 'next/image';

type CartEmptyProps = {
  onClose: () => void;
};

export const CartEmpty: React.FC<CartEmptyProps> = ({ onClose }) => {
  return (
    <div className={styles.content}>
      <Image className={styles.image} src='/img/cart/empty-cart.png' alt="cart empty" width={200} height={200} quality={100} sizes='100vw'/>
      <div className={styles.text}>
        You have no items in your cart. <br /> Let's go buy something!
      </div>
      <button onClick={onClose} className={styles.btn}>
        Back
      </button>
    </div>
  );
};
