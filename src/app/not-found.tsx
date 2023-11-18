import React from 'react';
import styles from './notfound.module.scss';
// import bg from '../../assets/img/notfound-page/error.jpg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound()  {
  return (
    <section className={styles.notfound}>
      <div className={`${styles.image} ${styles._ibg}`}>
        <Image src='/img/notfound-page/error.jpg' alt="Background Image" width={1920} height={898}/>
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2>404</h2>
            <h4>Page Not Found</h4>
            <p>The page you are looking for doesn't exist or has been moved</p>
            <div className={styles.btn}>
              <Link href="/">
                <button className={styles.button}>
                  Go To Home Page{' '}
                  <span className={styles.arrow}>
                    <BsFillArrowRightCircleFill />
                  </span>{' '}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
