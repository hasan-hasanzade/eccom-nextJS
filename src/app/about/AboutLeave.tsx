'use client';
import React from 'react';
import { PageBanner } from '@/components/PageBanner/PageBanner';
import Newsletter from '@/components/Newsletter/Newsletter';
import Offer from '../../components/Offer/Offer';
import { motion } from 'framer-motion';
import styles from './about.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import bg from '../../../public/img/about-page/about-banner.jpg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

export default function AboutLeave() {
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
  const cardAnimation = {
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
    <>
      <PageBanner title={'About Us'} img={bg} />
      <motion.section
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
        className={styles.hero}>
        <div className="container">
          <div className={styles.body}>
            <motion.div custom={1} variants={textAnimation} className={styles.image}>
              <Image
                src="/img/about-page/hero.png"
                alt=""
                width={675}
                height={466}
                quality={100}
                sizes="(min-width: 1440px) 733px, (min-width: 1000px) calc(46.19vw + 77px), (min-width: 820px) 733px, 92.6vw"
              />
            </motion.div>
            <div className={styles.content}>
              <motion.div custom={2} variants={textAnimation} className={styles.heading}>
                <h4 className={styles.subtitle}>Only pure and organic</h4>
                <h2 className={styles.title}>
                  Fresh from farm <br /> Return to purity
                </h2>
              </motion.div>
              <div className={styles.texts}>
                <motion.p custom={3} variants={textAnimation}>
                  Our rich experience helps us in ensuring that the products brought to you are 100%
                  chemical-free. To live a better, healthier, and wholesome life by providing them
                  with 100% certified, authentic organic food.
                </motion.p>
                <motion.p custom={3} variants={textAnimation}>
                  Welcome to the world of nature and organic. Here you can discover the bounty of
                  nature. We have grown on the principles of health and care. We aim to give our
                  customers a healthy chemical-free meal for perfect nutrition.{' '}
                </motion.p>
              </div>
              <div className={styles.priority}>
                <motion.div custom={4} variants={textAnimation} className={styles.item}>
                  <div className={styles.trac}>
                    <Image src="/img/about-page/Tractor.png" alt="" width={46} height={46} />
                  </div>
                  <h5 className={styles.text}>
                    Modern Agriculture <br />
                    Equipmnet
                  </h5>
                </motion.div>
                <motion.div custom={4} variants={textAnimation} className={styles.item}>
                  <div className={styles.chem}>
                    <Image src="/img/about-page/chemical-plant.png" alt="" width={56} height={57} />
                  </div>
                  <h5 className={styles.text}>
                    No Chemicals & <br />
                    Hormones Are Used
                  </h5>
                </motion.div>
              </div>
              <motion.div custom={5} variants={textAnimation} className={styles.action}>
                <Link href="/shop">
                  <button className={styles.button}>
                    {' '}
                    Explore More{' '}
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
      <motion.section
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
        className={styles.store}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.store_body}>
              <motion.div custom={1} variants={textAnimation} className={styles.heading}>
                <h2 className={styles.subtitle}>Why Organick Store?</h2>
                <h5 className={styles.title}>
                  We Cultivating the chemical & <br /> Fertilizer Free Products
                </h5>
              </motion.div>
              <motion.p custom={3} variants={textAnimation} className={styles.texts}>
                After a lot of struggles in our lives, we now are popular and now we are producing
                the best organic products. Initially.
              </motion.p>
              <div className={styles.store_content}>
                <motion.div custom={4} variants={textAnimation}>
                  <div className={styles.store_wrap}>
                    <h6 className={styles.store_title}>100% Natural Product</h6>
                  </div>
                  <div className={styles.texts}>
                    <p className={styles._pl}>
                      In our listing, we have several collections of organic products and <br />{' '}
                      place where you need to choose the product you want.{' '}
                    </p>
                  </div>
                </motion.div>
                <motion.div custom={5} variants={textAnimation}>
                  <div className={styles.store_wrap}>
                    <h6 className={styles.store_title}>Same Day Delivery</h6>
                  </div>
                  <div className={styles.texts}>
                    <p className={styles._pl}>
                      If you are not comfortable going to the nearby market place we <br /> also
                      will deliver your product to your doorstep.{' '}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div custom={2} variants={textAnimation} className={styles.store_image}>
              <Image
                src="/img/about-page/green.jpg"
                alt="green products"
                width={678}
                height={580}
                quality={100}
                sizes="(min-width: 1440px) 733px, (min-width: 1000px) calc(46.19vw + 77px), (min-width: 820px) 733px, 92.6vw"
              />
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView={'visible'}
            viewport={{ amount: 0.2, once: true }}
            className={styles.cards}>
            <motion.div custom={1} variants={cardAnimation} className={styles.card}>
              <div className={styles.inner}>
                <div className={styles.icon}>
                  <Image src="/img/about-page/return-purchase.png" alt="" width={46} height={46} />
                </div>
                <h6>Return Policy</h6>
                <p>If the product having any issues you can return the product.</p>
              </div>
            </motion.div>
            <motion.div custom={2} variants={cardAnimation} className={styles.card}>
              <div className={styles.inner}>
                <div className={styles.icon}>
                  <Image src="/img/about-page/natural-food.png" alt="" width={42} height={42} />
                </div>
                <h6>100% Fresh</h6>
                <p>Fully organic and fresh products are delivered at door step.</p>
              </div>
            </motion.div>
            <motion.div custom={3} variants={cardAnimation} className={styles.card}>
              <div className={styles.inner}>
                <div className={styles.icon}>
                  <Image src="/img/about-page/phone-time.png" alt="" width={44} height={44} />
                </div>
                <h6>Support 24/7</h6>
                <p>Our support team is available for take care the customers.</p>
              </div>
            </motion.div>
            <motion.div custom={4} variants={cardAnimation} className={styles.card}>
              <div className={styles.inner}>
                <div className={styles.icon}>
                  <Image src="/img/about-page/card-security.png" alt="" width={44} height={44} />
                </div>
                <h6>Secured Payment</h6>
                <p>Fully secured payment methods are used for buying product.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
        className={styles.team}>
        <div className="container">
          <motion.div custom={1} variants={textAnimation} className={styles.heading}>
            <h2 className={styles.subtitle}>The Team</h2>
            <h5 className={styles.title}>Our Organic Experts</h5>
            <p>
              We have grown on the principles of health, ecology, and care. We aim to give our{' '}
              <br />
              customers a healthy chemical-free meal for perfect nutrition.
            </p>
          </motion.div>
          <motion.div custom={2} variants={textAnimation} className={styles.team_cards}>
            <div className={styles.team_card}>
              <div className={`${styles.team_img} ${styles._ibg}`}>
                <Image src="/img/about-page/giovani.jpg" alt="Giovanni" width={429} height={423} quality={80} sizes="(min-width: 1440px) 733px, (min-width: 1000px) calc(46.19vw + 77px), (min-width: 820px) 733px, 92.6vw"/>
              </div>
              <div className={styles.bottom}>
                <div className={styles.desc}>
                  <div className={styles.name}>Shane Watson</div>
                  <div className={styles.prof}>Farmer</div>
                </div>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/">
                    <AiFillFacebook size={22} />
                  </a>
                  <a href="https://www.instagram.com/">
                    <AiOutlineInstagram size={22} />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.team_card}>
              <div className={`${styles.team_img} ${styles._ibg}`}>
                <Image src="/img/about-page/maria.jpg" alt="Giovanni" width={429} height={423} quality={80} sizes="(min-width: 1440px) 733px, (min-width: 1000px) calc(46.19vw + 77px), (min-width: 820px) 733px, 92.6vw"/>
              </div>
              <div className={styles.bottom}>
                <div className={styles.desc}>
                  <div className={styles.name}>Maria Thomas</div>
                  <div className={styles.prof}>Marketing</div>
                </div>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/">
                    <AiFillFacebook size={22} />
                  </a>
                  <a href="https://www.instagram.com/">
                    <AiOutlineInstagram size={22} />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.team_card}>
              <div className={`${styles.team_img} ${styles._ibg}`}>
                <Image src="/img/about-page/riga.jpg" alt="Giovanni" width={429} height={423} quality={80} sizes="(min-width: 1440px) 733px, (min-width: 1000px) calc(46.19vw + 77px), (min-width: 820px) 733px, 92.6vw"/>
              </div>
              <div className={styles.bottom}>
                <div className={styles.desc}>
                  <div className={styles.name}>Angelina Flora</div>
                  <div className={styles.prof}>Financiar</div>
                </div>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/">
                    <AiFillFacebook size={22} />
                  </a>
                  <a href="https://www.instagram.com/">
                    <AiOutlineInstagram size={22} />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <Newsletter />
      <Offer />
    </>
  );
}
