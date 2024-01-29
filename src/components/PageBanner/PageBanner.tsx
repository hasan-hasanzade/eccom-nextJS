import styles from './pagebanner.module.scss';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type PageBannerProps = {
  title: string;
  img: string | StaticImageData;
};

export const PageBanner: React.FC<PageBannerProps> = ({ title, img }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.title}>{title}</div>
      <div className={`${styles.image} ${styles._ibg}`}>
        <Image
          src={img}
          alt="background"
          width={1903}
          height={445}
          quality={100}
          sizes="(min-width: 1440px) 733px, (min-width: 1000px) calc(46.19vw + 77px), (min-width: 820px) 733px, 92.6vw"
        />
      </div>
    </section>
  );
};
