'use client';

import React from 'react';
import styles from './eco.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Eco() {
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
      className={styles.eco}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image
            src="/img/eco/bgeco.jpg"
            alt="background"
            width={952}
            height={931}
            quality={100}
            // sizes="(min-width: 1460px) 665px, (min-width: 780px) calc(44.85vw + 19px), (min-width: 740px) 665px, 94.05vw"
          />
        </div>
        <div className={styles.body}>
          <div className={styles.inner}>
            <motion.div custom={1} variants={textAnimation} className={styles.subtitle}>
              Eco Friendly
            </motion.div>
            <motion.h2 custom={1} variants={textAnimation} className={styles.title}>
              Econis is a Friendly <br /> Organic Store
            </motion.h2>
            <div className={styles.content}>
              <motion.div custom={2} variants={textAnimation} className={styles.item}>
                <h5 className={styles.heading}>Start with Our Company First</h5>
                <p className={styles.text}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                  doloremque laudantium. Sed ut perspiciatis.
                </p>
              </motion.div>
              <motion.div custom={3} variants={textAnimation} className={styles.item}>
                <h5 className={styles.heading}>Learn How to Grow Yourself</h5>
                <p className={styles.text}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                  doloremque laudantium. Sed ut perspiciatis.
                </p>
              </motion.div>
              <motion.div custom={4} variants={textAnimation} className={styles.item}>
                <h5 className={styles.heading}>Farming Strategies of Today</h5>
                <p className={styles.text}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                  doloremque laudantium. Sed ut perspiciatis.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
