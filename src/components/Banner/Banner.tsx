'use client'

import React from 'react';
import styles from './banner.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Banner() {
  const leftAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 1, delay: custom * 0.5 },
    }),
  };
  const rightAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 1, delay: custom * 0.5 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
      className="container">
      <div className={styles.offer}>
        <Link href="/shop?category=fruits">
          <motion.div custom={1} variants={leftAnimation} className={styles.fruit}>
            <div className={styles.content}>
              <div className={styles.ftitle}>Natural!!</div>
              <div className={styles.fsubtitle}>
                Get Garden <br /> Fresh Fruits
              </div>
            </div>
            <div className={styles.banner}>
              <Image src='/img/hero/fruits.png' alt="fruit" width={683} height={367}/>
            </div>
          </motion.div>
        </Link>
        <Link href="/shop?category=vegetables">
          <motion.div custom={1} variants={rightAnimation} className={styles.veget}>
            <div className={styles.vcontent}>
              <div className={styles.vtitle}>Offer!!</div>
              <div className={styles.vsubtitle}>
                Get 10% off <br /> on Vegetables
              </div>
            </div>
            <div className={styles.vbanner}>
              <Image src='/img/hero/veget.png' alt="vegetables" width={683} height={367} />
            </div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};
