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
              <input className={styles.input_news} placeholder="Your Email Address" type="text" />
              <div className={styles.button}>Subscribe</div>
            </motion.div>
          </div>
          <div className={`${styles.image} ${styles._ibg}`}>
            <Image
              src="/img/news/bgnews.png"
              alt="background"
              width={1350}
              height={337}
              quality={100}
              sizes="(min-width: 1440px) 733px, (min-width: 1000px) calc(46.19vw + 77px), (min-width: 820px) 733px, 92.6vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
