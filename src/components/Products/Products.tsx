'use client';

import React from 'react';
import styles from './products.module.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { productSelector } from '../../redux/product/selectors';
import { fetchProducts } from '../../redux/product/asyncActions';
import { motion } from 'framer-motion';
import Loading from './loading';

export default function Products() {
  const items = useSelector(productSelector);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    try {
      dispatch(fetchProducts());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 1, delay: custom * 0.5 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
      className={styles.products}>
      <div className="container">
        <h3 className={styles.title}>
          Categories
        </h3>
        <div  className={styles.subtitle}>
          Our Products
        </div>
        {items.length !== 0 ? (
          <div className={styles.body}>
            {items.slice(8, 16).map((obj: any) => (
              <ProductCard
                key={obj._id}
                rating={obj.rating}
                _id={obj._id}
                category={obj.category}
                imageUrl={obj.imageUrl}
                title={obj.title}
                price={obj.price}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </motion.section>
  );
}
