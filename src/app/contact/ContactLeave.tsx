'use client';

import React from 'react';
import styles from './contactus.module.scss';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import Newsletter from '../../components/Newsletter/Newsletter';
import bg from '../../../public/img/contact-page/bgcontact.jpg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactUs() {
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
      <PageBanner title={'Contact Us'} img={bg} />
      <motion.section
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
        className={styles.hero}>
        <div className="container">
          <div className={styles.body}>
            <motion.div custom={1} variants={textAnimation} className={styles.image}>
              <Image
                src="/img/contact-page/fruits.jpg"
                alt="Fruits"
                width={623}
                height={640}
                quality={100}
                sizes="(min-width: 1480px) 585px, (min-width: 1000px) calc(35.87vw + 61px), calc(100vw - 30px)"
              />
            </motion.div>
            <div className={styles.content}>
              <motion.div custom={2} variants={textAnimation} className={styles.heading}>
                <h2 className={styles.title}>Let's Find Out. Where Our Organic Farms Located.</h2>
              </motion.div>
              <motion.div custom={3} variants={textAnimation} className={styles.text}>
                <p>
                  Please contact us using the information below. To locate, contact us in the <br />
                  nearest organic store or office closest to you, visit our office websites.
                </p>
              </motion.div>
              <div className={styles.items}>
                <motion.div custom={4} variants={textAnimation} className={styles.item}>
                  <div className={styles.img}>
                    <Image
                      src="/img/contact-page/icon1.svg"
                      alt="Contact Image"
                      width={35}
                      height={35}
                      quality={100}
                    />
                  </div>
                  <div className={styles.desc}>
                    <h5>Message</h5>
                    <span>support@organic.com</span>
                  </div>
                </motion.div>
                <motion.div custom={5} variants={textAnimation} className={styles.item}>
                  <div className={styles.img}>
                    <Image
                      src="/img/contact-page/icon2.svg"
                      alt="Phone Image"
                      width={35}
                      height={35}
                      quality={100}
                    />
                  </div>
                  <div className={styles.desc}>
                    <h5>Contact Us</h5>
                    <span>+01 123 456 789</span>
                  </div>
                </motion.div>
              </div>
              <motion.div custom={6} variants={textAnimation} className={styles.social}>
                <a href="https.instagram.com">
                  <Image
                    src="/img/footer/inst.png"
                    alt="instagram"
                    width={60}
                    height={60}
                    quality={100}
                  />
                </a>
                <a href="https.facebook.com">
                  <Image
                    src="/img/footer/fb.png"
                    alt="facebook"
                    width={60}
                    height={60}
                    quality={100}
                  />
                </a>
                <a href="https.twitter.com">
                  <Image
                    src="/img/footer/tw.png"
                    alt="twitter"
                    width={60}
                    height={60}
                    quality={100}
                  />
                </a>
                <a href="https.printerest.com">
                  <Image
                    src="/img/footer/pr.png"
                    alt="instagram"
                    width={60}
                    height={60}
                    quality={100}
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
        className={styles.location}>
        <div className="container">
          <div className={styles.wrapper}>
            <motion.div custom={1} variants={textAnimation} className={styles.loc_body}>
              <div className={styles.loc_inner}>
                <div className={styles.heading}>
                  <h4 className={styles.subtitle}>Location</h4>
                  <h2 className={styles.title}>Our Farms</h2>
                </div>
                <div className={styles.text}>
                  <p>
                    Organick product farms are located in <br />
                    main cities of the following places.
                  </p>
                </div>
                <div className={styles.loc_items}>
                  <div className={styles.loc_item}>
                    <div className={styles.loc_img}>
                      <Image
                        src="/img/contact-page/icon3.svg"
                        alt="Location Image"
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className={styles.loc_desc}>
                      <h5>New York, USA:</h5>
                      <span>
                        299 Park Avenue New York, <br />
                        New York 10171, USA.
                      </span>
                    </div>
                  </div>
                  <div className={styles.loc_item}>
                    <div className={styles.loc_img}>
                      <Image
                        src="/img/contact-page/icon3.svg"
                        alt="Location Image"
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className={styles.loc_desc}>
                      <h5>London, UK:</h5>
                      <span>
                        30 Stamford Street, Base Way, <br />
                        London 5478, UK.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <section>
        <div className="container">
          <form className={styles.form}>
            <div className={styles.inputs}>
              <div className={styles.inputItem}>
                <label htmlFor="full-name">Full Name*</label>
                <input
                  className={styles.input}
                  type="text"
                  maxLength={256}
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.inputItem}>
                <label htmlFor="full-name">Full Adress*</label>
                <input
                  className={styles.input}
                  type="text"
                  maxLength={256}
                  name="name"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className={styles.inputs}>
              <div className={styles.inputItem}>
                <label htmlFor="full-name">Company*</label>
                <input
                  className={styles.input}
                  type="text"
                  maxLength={256}
                  name="name"
                  placeholder="Enter Company Name"
                />
              </div>
              <div className={styles.inputItem}>
                <label htmlFor="full-name">Subject</label>
                <input
                  className={styles.input}
                  type="text"
                  maxLength={256}
                  name="name"
                  placeholder="How We Can Help You"
                />
              </div>
            </div>
            <div className={styles.areaItem}>
              <textarea
                className={styles.area}
                placeholder="Hello there, I would like to..."></textarea>
            </div>
            <div className={styles.action}>
              <a href="/shop" className={styles.button}>
                Send Message{' '}
                <span className={styles.arrow}>
                  <BsFillArrowRightCircleFill />
                </span>{' '}
              </a>
            </div>
          </form>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
