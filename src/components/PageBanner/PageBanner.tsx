import styles from './pagebanner.module.scss';
import Image from 'next/image';
import { StaticImageData } from "next/image"

type PageBannerProps = {
  title: string;
  img: string | StaticImageData;
};

export const PageBanner: React.FC<PageBannerProps> = ({ title, img }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.title}>{title}</div>
      <div className={`${styles.image} ${styles._ibg}`}>
        <Image src={img} alt="background" width={1920} height={450}/>
      </div>
    </section>
  );
};
