'use client'

import React from 'react';
import styles from './products.module.scss';
import { MProductCard } from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { productSelector } from '../../redux/product/selectors';
import { fetchProducts } from '../../redux/product/asyncActions';
import { motion } from 'framer-motion';

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

  const productAnimation = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
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
        <motion.h3 custom={1} variants={textAnimation} className={styles.title}>
          Categories
        </motion.h3>
        <motion.div custom={1} variants={textAnimation} className={styles.subtitle}>
          Our Products
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={'visible'}
          viewport={{ amount: 0.2, once: true }}
          className={styles.body}>
          {items.slice(8, 16).map((obj, i) => (
            <MProductCard
              custom={i + 1}
              variants={productAnimation}
              key={obj._id}
              rating={obj.rating}
              _id={obj._id}
              category={obj.category}
              imageUrl={obj.imageUrl}
              title={obj.title}
              price={obj.price}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
