'use client'

import React from 'react';
import styles from './checkoutitems.module.scss';
import { cartSelector } from '../../redux/cart/selectors';
import { useSelector } from 'react-redux';
import { CartItemBlock } from '../CartItem/CartItemBlock';

export default function CheckoutItems() {
  const items = useSelector(cartSelector);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className={styles.checkoutItems}>
      <div className={styles.body}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <div className={styles.head}>Order List</div>
          </div>
          <div className={styles.items}>
            {items.map((item: any) => (
              <CartItemBlock key={item._id} {...item} />
            ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.shipping}>Free Shipping</div>
            <div className={styles.total}>
              <div className={styles.text}>Subtotal:</div>
              <div className={styles.number}>$ {totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
