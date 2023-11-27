
'use client'

import React from 'react';
import styles from './about.module.scss';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
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
    <>
      <motion.section
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
        className={styles.about}>
        <div className="container">
          <div className={styles.wrapper}>
            <motion.div custom={1} variants={textAnimation} className={styles.image}>
              <Image src='/img/about/citrus.png' alt="cover" width={733} quality={100} height={697}/>
            </motion.div>
            <div className={styles.body}>
              <motion.h2 custom={2} variants={textAnimation} className={styles.subtitle}>
                About Us
              </motion.h2>
              <motion.p custom={2} variants={textAnimation} className={styles.title}>
                We Believe in Working Accredited Farmers
              </motion.p>
              <motion.p custom={2} variants={textAnimation} className={styles.text}>
                Welcome to the world of natural and organic. Here you can discover the bounty of
                nature. We have grown on the principles of health, and care. We aim to give our
                customers a healthy chemical-free meal for perfect nutrition.
              </motion.p>
              <motion.div custom={3} variants={textAnimation} className={styles.content}>
                <div className={styles.icon}>
                  <div className={styles.block}>
                    <img src='/img/about/vegan.svg' alt="vegan" width={50} height={50}/>
                  </div>
                </div>
                <div className={styles.item}>
                  <h5 className={styles.heading}>Organic Foods Only</h5>
                  <p className={styles.description}>
                    The Product that you ordered will be verified that we have or not if have we
                    will start to move on with the next step.
                  </p>
                </div>
              </motion.div>
              <motion.div custom={4} variants={textAnimation} className={styles.content}>
                <div className={styles.icon}>
                  <div className={styles.mblock}>
                    <Image src='/img/about/mailbox.svg' alt="vegan" width={50} height={50}/>
                  </div>
                </div>
                <div className={styles.item}>
                  <h5 className={styles.heading}>Quality Standards</h5>
                  <p className={styles.description}>
                    Once your product is packed it will be delivered to your nearby locality you can
                    directly visit the to buy the product.
                  </p>
                </div>
              </motion.div>
              <motion.div custom={5} variants={textAnimation} className={styles.btn}>
                <Link href="/shop">
                  <button className={styles.button}>
                    Shop Now{' '}
                    <span className={styles.arrow}>
                      <BsFillArrowRightCircleFill />
                    </span>{' '}
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
