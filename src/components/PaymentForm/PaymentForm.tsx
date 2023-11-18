'use client'

import React, { useState } from 'react';
import Cards, { Focused } from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/lib/styles.scss';
import styles from './payment.module.scss';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function PaymentForm() {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    if (name === 'number') {
      const formattedValue = value.replace(/\D/g, '');

      if (formattedValue) {
        const formattedNumber = formattedValue
          .match(/.{1,4}/g)
          .join(' ')
          .substr(0, 19);

        setState((prev) => ({ ...prev, [name]: formattedNumber }));
      } else {
        setState((prev) => ({ ...prev, [name]: '' }));
      }
    } else if (name === 'expiry') {
      const formattedValue = value.replace(/\D/g, '');

      if (formattedValue) {
        const formattedExpiry = formattedValue.substr(0, 4).replace(/(\d{2})(\d{0,2})/, '$1/$2');
        setState((prev) => ({ ...prev, [name]: formattedExpiry }));
      } else {
        setState((prev) => ({ ...prev, [name]: '' }));
      }
    } else if (name === 'cvc') {
      const formattedCVC = value.replace(/\D/g, '').substr(0, 3);
      setState((prev) => ({ ...prev, [name]: formattedCVC }));
    } else if (name === 'name') {
      const formattedName = value.replace(/[^a-zA-Z ]/g, '');
      setState((prev) => ({ ...prev, [name]: formattedName }));
    } else {
      setState((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInputFocus = (e: any) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };


  const router = useRouter();
  const handleConfirm = () => {
    if (state.number && state.expiry && state.cvc && state.name) {
      
      router.push('/checkout-success');
    } else {
      const err = () =>
        toast.error('You entered an incorrect payment details.', {
          style: {
            border: '2px solid #fff',
            padding: '16px',
            color: '#fff',
            fontSize: '17px',
            backgroundColor: '#274C5B',
          },
          iconTheme: {
            primary: 'red',
            secondary: '#FFFAEE',
          },
        });
      err();
    }
  };

  const focusedProp = state.focus ? (state.focus as Focused) : undefined;

  return (
    <div className={styles.payment}>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={focusedProp}
      />
      <form className={styles.form}>
        <input
          className={styles.input}
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          className={styles.input}
          type="text"
          name="name"
          value={state.name}
          placeholder="Name"
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <div className={styles.bottom}>
          <input
            name="expiry"
            className={styles.bottomInputs}
            placeholder="Valid Thru"
            required
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            name="cvc"
            className={styles.bottomInputs}
            placeholder="CVC"
            required
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className={styles.btn}>
          <button onClick={handleConfirm} className={styles.button}>
            Confirm
          </button>
        </div>
      </form>
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};
