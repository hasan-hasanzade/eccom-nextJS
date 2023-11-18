import React from 'react';
import PaymentForm from '@/components/PaymentForm/PaymentForm';
import CheckoutItems from '@/components/CheckoutItems/CheckoutItems';
import styles from './checkout.module.scss';

export default function CheckOut() {
  return (
    <section className={styles.checkout}>
      <div className="container">
        <div className={styles.wrap}>
          <PaymentForm />
          <CheckoutItems />
        </div>
      </div>
    </section>
  );
};
