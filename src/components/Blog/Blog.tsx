import React from 'react';
import { BsFillArrowRightCircleFill, BsFillPersonFill } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import styles from './blog.module.scss';
import { motion } from 'framer-motion';
import { forwardRef, Ref } from 'react';

type BlogProps = {
  title: string;
  imageUrl: string;
  author: string;
  text: string;
  date: number;
  month: string;
  _id: string;
};

export const Blog: React.FC<BlogProps> = forwardRef(
  ({ title, imageUrl, author, text, date, month, _id }, ref: Ref<HTMLDivElement>) => {


    return (
      <div ref={ref} className={styles.card}>
        <div className={styles.picture}>
          
            <Image className={styles.cardimg} src={imageUrl} alt="Blog" width={1920} height={480}/>

          <div className={styles.circle}>
            <span>{date}</span>
            <span className={styles.month}>{month}</span>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.inner}>
            <div className={styles.name}>
              {' '}
              <BsFillPersonFill color="#EFD372" /> {author}
            </div>
            <h4 className={styles.blogname}>{title}</h4>
            <p className={styles.text}>{text}</p>
            <Link href={`/blogs/${_id}`} className={styles.button}>
              Read More{' '}
              <span className={styles.arrow}>
                <BsFillArrowRightCircleFill />
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  },
);

export const MBlog = motion(Blog);
