import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.contact}>
            <h5 className={styles.title}>Contact Us</h5>
            <div className={styles.content}>
              <div className={styles.item}>
                <div className={styles.heading}>Email</div>
                <div className={styles.text}>support@Organia.com</div>
              </div>
              <div className={styles.item}>
                <div className={styles.heading}>Phone</div>
                <div className={styles.text}>777 8888 599</div>
              </div>
              <div className={styles.item}>
                <div className={styles.heading}>Address</div>
                <div className={styles.text}>88 road, Brooklyn street USA</div>
              </div>
            </div>
          </div>
          <div className={styles.logo}>
            <div className={styles.block}>
              <Image className={styles.image} src='/img/logo.png' alt="logo" width={155} height={224}/>
              <div className={styles.comp}>Organick</div>
            </div>
            <p className={styles.desc}>
              Simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum simply
              dummy text of the printing
            </p>
            <div className={styles.social}>
              <a href="https://www.instagram.com/">
                <Image src='/img/footer/inst.png' alt="instagram" width={60} height={61}/>
              </a>
              <a href="https://www.facebook.com/">
                <Image src='/img/footer/fb.png' alt="facebook" width={60} height={61}/>
              </a>
              <a href="https://twitter.com/">
                <Image src='/img/footer/tw.png' alt="twitter" width={60} height={61} />
              </a>
              <a href="https://www.pinterest.com/">
                <Image src='/img/footer/pr.png' alt="printerest" width={60} height={61}/>
              </a>
            </div>
          </div>
          <div className={styles.page}>
            <div className={styles.title}>Pages</div>
            <div className={styles.links}>
              <Link href="/our-team" className={styles.link}>
                Our Team
              </Link>
              <Link href="/services" className={styles.link}>
                Services
              </Link>
              <Link href="/about" className={styles.link}>
                About Us
              </Link>
              <Link href="/blogs" className={styles.link}>
                Blogs
              </Link>
              <Link href="/contact" className={styles.link}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <p>
          Copyright &#169; Organic | Designed by{' '}
          <a href="/#" className={styles.btn}>
            VictorFlow
          </a>{' '}
          - Powered by{' '}
          <a className={styles.btn} href="https://hasanzade.net/">
            Hasan Hasanzade
          </a>
        </p>
      </div>
    </footer>
  );
};
