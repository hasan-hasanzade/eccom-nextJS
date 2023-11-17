'use client'

import React from 'react';
import styles from './blogs.module.scss';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import { MBlog } from '../Blog/Blog';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { blogSelector } from '../../redux/blog/selectors';
import { fetchBlogs } from '../../redux/blog/asyncActions';
import { motion } from 'framer-motion';

export const BlogsBlock: React.FC = () => {
  const blogItems = useSelector(blogSelector);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    try {
      dispatch(fetchBlogs());
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

  const blogAnimation = {
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
      className={styles.blogs}>
      <div className="container">
        <div className={styles.heading}>
          <motion.div custom={1} variants={textAnimation} className={styles.subtitle}>
            Blogs
          </motion.div>
          <motion.div custom={2} variants={textAnimation} className={styles.title}>
            <h2>
              Discover weekly content about <br /> organic food, & more
            </h2>
            <Link href="/blogs">
              <button className={styles.button}>
                More News{' '}
                <span className={styles.arrow}>
                  <BsFillArrowRightCircleFill />
                </span>{' '}
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView={'visible'}
          viewport={{ amount: 0.2, once: true }}
          className={styles.body}>
          {blogItems.slice(2, 4).map((obj, i) => (
            <MBlog custom={i + 1} variants={blogAnimation} key={obj._id} {...obj} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
