'use client'

import React from 'react';
import styles from './recentblogs.module.scss';
import { PageBanner } from '@/components/PageBanner/PageBanner';
import  Newsletter  from '@/components/Newsletter/Newsletter';
import bg from '../../../public/img/blogs-page/bgblog.jpg';
import { MBlog } from '../../components/Blog/Blog';
import { blogSelector } from '../../redux/blog/selectors';
import { fetchBlogs } from '../../redux/blog/asyncActions';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { BlogSkeleton } from './BlogSkeleton';
import { motion } from 'framer-motion';

export default function RecentBlogs() {
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useAppDispatch();

  const blogs = useSelector(blogSelector);

  React.useEffect(() => {
    setIsLoading(true);

    dispatch(fetchBlogs())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading blogs:', error);
        setIsLoading(false);
      });
  }, [dispatch]);

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
    <>
      <PageBanner title={'Recent News'} img={bg} />
      <section className={styles.blogs}>
        <div className="container">
          <div className={styles.body}>
            {isLoading
              ? [...new Array(6)].map((_, index) => <BlogSkeleton key={index} />)
              : blogs.map((obj, i) => (
                  <motion.div
                    initial="hidden"
                    whileInView={'visible'}
                    viewport={{ amount: 0.2, once: true }}
                    className={styles.blogCard}
                    key={obj._id}>
                    <MBlog custom={i + 1} variants={blogAnimation} {...obj} />
                  </motion.div>
                ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};
