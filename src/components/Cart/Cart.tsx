'use client';

import React from 'react';
import styles from './cart.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { CartEmpty } from '@/components/CartEmpty/CartEmpty';
import { CartItemBlock } from '@/components/CartItem/CartItemBlock';
import { clearCart } from '../../redux/cart/slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { selectIsAuth } from '../../redux/auth/selectors';
import Link from 'next/link';

type CartProps = {
  onClose: () => void;
  items: any;
  totalPrice: number;
  opened: boolean;
};

export const Cart: React.FC<CartProps> = ({ onClose, items, totalPrice, opened }) => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useAppDispatch();

  const onClickClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <div className={styles.head}>Shopping Cart</div>
            <button onClick={onClose} className={styles.close}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className={styles.body}>
            {!totalPrice ? (
              <CartEmpty onClose={onClose} />
            ) : (
              items.map((item: any) => <CartItemBlock key={item._id} {...item} />)
            )}
          </div>
          <div className={styles.bottom}>
            <div className={styles.total}>
              <div className={styles.text}>Subtotal:</div>
              <div className={styles.number}>${totalPrice}</div>
            </div>
            <button onClick={onClickClear} className={styles.button}>
              Clear Cart
            </button>
            {totalPrice > 0 && (
              <>
                {isAuth ? (
                  <Link href="/checkout">
                    <button onClick={onClose} className={styles.btn}>
                      Checkout
                    </button>
                  </Link>
                ) : (
                  <Link href="/login">
                    <button onClick={onClose} className={styles.btn}>
                      Please Log in to checkout
                    </button>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
