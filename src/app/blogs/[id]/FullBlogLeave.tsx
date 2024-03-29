'use client'

import React from 'react';
import Newsletter from '@/components/Newsletter/Newsletter';
import styles from './fullblog.module.scss';
import CommentsBlock from '@/components/CommentsBlock/CommentsBlock';
import { useAppDispatch } from '@/redux/store';
import { useSelector } from 'react-redux';
import { blogItemSelector } from '../../../redux/blog/selectors';
import { fetchSingleBlog } from '../../../redux/blog/asyncActions';
import Image from 'next/image';
import Loading from '@/app/loading';

type PropsId = {
  params: {
    id : string;
  };
};

export default function FullBlog({ params: { id } }: PropsId) {
  const dispatch = useAppDispatch();
  const data = useSelector(blogItemSelector);

  React.useEffect(() => {
    if (id) {
      dispatch(fetchSingleBlog(id));
    }
  }, [id]);

  if (!data) {
    return <Loading />;
  }

  const { imageUrl, month, date, title, text, mainText, author } = data;

  return (
    <>
      <section className={styles.image}>
        <div className={styles.img}>
          <Image src={imageUrl} alt="" width={1080} height={720} quality={100}/>
        </div>
      </section>
      <section className={styles.content}>
        <div className="container">
          <div className={styles.heading}>
            <div className={styles.body}>
              <div className={styles.top}>
                <div className={styles.posted}>
                  <span className={styles.top_text}>Posted On:</span>
                  <span className={styles.top_date}>
                    {month} {date}, 2023
                  </span>
                </div>
                <div className={styles.author}>
                  <span>by</span>
                  {author}
                </div>
              </div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
          <div className={styles.texts}>
            <p>{mainText}</p>
            <blockquote>
              “The first rule of any organic used in a business is that nature applied to an
              efficient operation will magnify the efficiency. The second is that organic applied to
              an inefficient operation will magnify the health.”
            </blockquote>
            <h6>Make perfect organic product with us</h6>
            <ol>
              <li>
                It brings the right people together with all the right information and tools to get
                work done
              </li>
              <li>We provide operational efficiency, data security, and flexible scale</li>
              <li>
                Your best work, together in one package that works seamlessly from your computer
              </li>
              <li>Delivers the tools you need to save time Improve field performance always</li>
            </ol>
          </div>
          <CommentsBlock />
        </div>
      </section>
      <Newsletter />
    </>
  );
};
