'use client';

import React from 'react';
import styles from './checkoutsuccess.module.scss';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import { clearCart } from '../../redux/cart/slice';
import { useAppDispatch } from '../../redux/store';

export default function CheckoutSuccess() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="container">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Checkout Successful</h2>
        <div className={styles.icon}>
          <AiOutlineFileDone color="#7EB693" size={75} />
        </div>{' '}
        <div className={styles.content}>
          <p className={styles.text}>Your order might take some time to process.</p>
          <p className={styles.text}>Check your order status at your profile after about 10mins.</p>
          <p className={styles.text}>
            Incase of any inqueries contact the support at <strong>support@organic.com</strong>
          </p>
        </div>
        <Link href="/">
          <button className={styles.button}>
            go to home page
            <span className={styles.arrow}>
              <BsFillArrowRightCircleFill />
            </span>{' '}
          </button>
        </Link>
      </div>
    </div>
  );
};
