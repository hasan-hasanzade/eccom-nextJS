'use client';

import React from 'react';
import styles from './newsletter.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Newsletter() {
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
    <motion.section
      initial="hidden"
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
      className={styles.newsletter}>
      <div className="container">
        <div className={styles.body_news}>
          <div className={styles.content_news}>
            <motion.div custom={1} variants={leftAnimation} className={styles.text_news}>
              <p>
                Subscribe to <br /> our Newsletter
              </p>
            </motion.div>
            <motion.div custom={1} variants={rightAnimation} className={styles.actions}>
              <input className={styles.inputNews} placeholder="Your Email Address" type="text" />
              <div className={styles.button}>
                Subscribe
              </div>
            </motion.div>
          </div>
          <div className={`${styles.image} ${styles._ibg}`}>
            <Image quality={100} src='/img/news/bgnews.png' alt="background" width={1350} height={1337} priority={false}/>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
