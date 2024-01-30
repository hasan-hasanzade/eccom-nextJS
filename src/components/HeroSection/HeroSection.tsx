'use client';

import React from 'react';
import styles from './herosection.module.scss';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    }),
  };
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
        className={styles.hero}>
        <div className="container">
          <div className={styles.body}>
            <motion.div custom={1} variants={textAnimation} className={styles.subtitle}>
              100% Natural Food
            </motion.div>
            <motion.h1 custom={2} variants={textAnimation} className={styles.title}>
              Choose the best healthier way <br /> of life
            </motion.h1>
            <Link href="/shop">
              <motion.button custom={2.5} variants={textAnimation} className={`${styles.button} ${styles.btnAnim}`}>
                Explore Now{' '}
                <span className={styles.arrow}>
                  <BsFillArrowRightCircleFill />
                </span>{' '}
              </motion.button>
            </Link>
          </div>
        </div>
        <div className={`${styles.image} ${styles._ibg}`}>
          <Image
            src="/img/hero/bg.png"
            alt="background image"
            width={1903}
            height={900}
            quality={100}
            sizes="100vw"
          />
        </div>
      </motion.section>
    </>
  );
}
