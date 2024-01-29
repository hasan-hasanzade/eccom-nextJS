'use client';

import React from 'react';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './testimonials.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const testimonials = [
    {
      name: 'Sarah Taylor',
      role: 'Consumer',
      text: 'The quality of organic produce is extremely high...',
    },
    {
      name: 'Chris Jordan',
      role: 'Store Owner',
      text: 'I have been using the Organic Grocer for over a year now...',
    },
    {
      name: 'Jenny Larson',
      role: 'Consumer',
      text: 'Simply dummy text of the printing and typesetting industry...',
    },
  ];

  const handlePreviousClick = () => {
    setCurrentTestimonial(
      (prevIndex: number) => (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNextClick = () => {
    setCurrentTestimonial((prevIndex: number) => (prevIndex + 1) % testimonials.length);
  };

  let slidesToShow = 1;
  const PreviousBtn = (props: { className: string; onClick: () => void }) => {
    const { className, onClick } = props;
    return (
      <>
        <div className={className} onClick={onClick}>
          <AiOutlineLeft style={{ color: '#274C5B', fontSize: '50px' }} />
        </div>
      </>
    );
  };
  const NextBtn = (props: { className: string; onClick: () => void }) => {
    const { className, onClick } = props;
    return (
      <>
        <div className={className} onClick={onClick}>
          <AiOutlineRight style={{ color: '#274C5B', fontSize: '50px' }} />
        </div>
      </>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: true,
    prevArrow: <PreviousBtn className={styles.wer} onClick={handlePreviousClick} />,
    nextArrow: <NextBtn className={styles.wer} onClick={handleNextClick} />,
    responsive: [
      {
        breakpoint: 664,
        settings: {
          arrows: false,
        },
      },
    ],
  };

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
      className={styles.testimonials}>
      <div className="container">
        <div className={styles.body}>
          <motion.div custom={1} variants={textAnimation} className={styles.subtitle}>
            Testimonials
          </motion.div>
          <motion.h3 custom={2} variants={textAnimation} className={styles.title}>
            What Our Customer Saying?
          </motion.h3>
          <motion.div custom={3} variants={textAnimation} className={styles.content}>
            <Slider {...settings}>
              <div className={styles.item}>
                <div className={styles.user}>
                  <Image
                    src="/img/testimonial/sara.png"
                    alt="consumer"
                    width={116}
                    height={115}
                    quality={100}
                    sizes="115px"
                  />
                </div>
                <div className={styles.rating}>
                  <Rating name="read-only" defaultValue={5} precision={0.5} readOnly />
                </div>
                <p className={styles.text}>
                  The quality of organic produce is extremely high, the service is second to none
                  and the taste of the food takes me back to my childhood when we were growing our
                  own.
                </p>
                <div className={styles.name}>Sarah Taylor</div>
                <div className={styles.role}>Consumer</div>
              </div>
              <div className={styles.item}>
                <div className={styles.user}>
                  <Image
                    src="/img/testimonial/chris.jpg"
                    alt="consumer"
                    width={115}
                    height={115}
                    quality={100}
                    sizes="115px"
                  />
                </div>
                <div className={styles.rating}>
                  <Rating name="read-only" defaultValue={5} precision={0.5} readOnly />
                </div>
                <p className={styles.text}>
                  I have been using the Organic Grocer for over a year now and I find the staff
                  friendly and helpful with a good knowledge of the products they sell.
                </p>
                <div className={styles.name}>Chris Jordan</div>
                <div className={styles.role}>Store Owner</div>
              </div>
              <div className={styles.item}>
                <div className={styles.user}>
                  <Image
                    src="/img/testimonial/jenny.jpg"
                    alt="consumer"
                    width={115}
                    height={115}
                    quality={100}
                    sizes="115px"
                  />
                </div>
                <div className={styles.rating}>
                  <Rating name="read-only" defaultValue={5} precision={0.5} readOnly />
                </div>
                <p className={styles.text}>
                  Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply
                  dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                </p>
                <div className={styles.name}>Jenny Larson</div>
                <div className={styles.role}>Consumer</div>
              </div>
            </Slider>
          </motion.div>
        </div>
        <div className={styles.countup}>
          <motion.div custom={4} variants={textAnimation} className={styles.green}>
            <div className={styles.gray}>
              <motion.div className={styles.count}>
                <CountUp end={100} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                %
              </motion.div>
              <div className={styles.desc}>Organic</div>
            </div>
          </motion.div>
          <motion.div custom={5} variants={textAnimation} className={styles.green}>
            <div className={styles.gray}>
              <div className={styles.count}>
                <CountUp end={285} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
              <div className={styles.desc}>Active Product</div>
            </div>
          </motion.div>
          <motion.div custom={6} variants={textAnimation} className={styles.green}>
            <div className={styles.gray}>
              <div className={styles.count}>
                <CountUp end={350} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </div>
              <div className={styles.desc}>Organic Orchads</div>
            </div>
          </motion.div>
          <motion.div custom={7} variants={textAnimation} className={styles.green}>
            <div className={styles.gray}>
              <div className={styles.count}>
                <CountUp end={25} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </div>
              <div className={styles.desc}>Years of Farming</div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={`${styles.image} ${styles._ibg}`}>
        <Image
          src="/img/testimonial/bgtest.png"
          alt="Background Image"
          width={1903}
          height={1107}
          quality={100}
          priority={false}
          sizes="100vw"
        />
      </div>
    </motion.section>
  );
}
