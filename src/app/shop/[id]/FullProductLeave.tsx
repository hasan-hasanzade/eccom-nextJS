'use client'

import React from 'react';
import  Newsletter from '@/components/Newsletter/Newsletter';
import styles from './fullproduct.module.scss';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/redux/store';
import { addItem, decreaseItem } from '@/redux/cart/slice';
import { cartSelector } from '@/redux/cart/selectors';
import { CartItem } from '@/redux/cart/types';
import { singleProductSelector } from '@/redux/product/selectors';
import { fetchSingleProduct } from '@/redux/product/asyncActions';
import FullSkeleton from './FullSkeleton';
import Loading from '@/app/loading';

type PropsId = {
  params: {
    id : string;
  };
};


export default function FullProduct({ params: { id } }: PropsId) {
  const [tab, setTab] = React.useState(1);
  const items = useSelector(cartSelector);
  const data = useSelector(singleProductSelector);
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (id) {
      dispatch(fetchSingleProduct(id)).then(() => {
        setIsLoading(false);
      });
    }
  }, [id]);



  if (window.innerWidth < 992) {
    if (!data) {
      return <Loading />;
    }
  }

  if (isLoading) {
    return <FullSkeleton />;
  }

  const { _id, imageUrl, title, price, category, rating } = data;

  const selectedItem = items.find((item) => item._id === _id);
  const count = selectedItem ? selectedItem.count : 0;

  const onClickAdd = () => {
    const item = {
      _id,
      imageUrl,
      title,
      price,
    } as CartItem;
    dispatch(addItem(item));
  };

  const onClickDecrease = () => {
    dispatch(decreaseItem(_id));
  };
  const onClickIncrease = () => {
    const item = {
      _id,
      imageUrl,
      title,
      price,
    } as CartItem;
    dispatch(addItem(item));
  };

  const onClickTab = (id: number) => {
    setTab(id);
  };

  return (
    <>
      <section className={styles.product}>
        <div className="container">
          <div className={styles.wrap}>
            <div className={styles.body}>
              <div className={styles.image}>
                <img src={imageUrl} alt="" />
                <div className={styles.category}>
                  <span>{category}</span>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>{title}</div>
              <div className={styles.rating}>
                <Rating name="half-rating-read" value={rating ?? ' '} precision={0.5} readOnly />
              </div>
              <div className={styles.prices}>
                <span className={styles.price}>${price}</span>
              </div>
              <p className={styles.desc}>
                Calabrese is an old-fashioned variety of broccoli renowned for its bluish-green
                heads and multiple side shoots. It can be grown as an early spring or fall crop. Its
                flavorful five-inch.
              </p>
              <div className={styles.action}>
                <div className={styles.actions}>
                  {count === 0 ? (
                    <button disabled={true} onClick={onClickDecrease} className={styles.disabled}>
                      <AiOutlineMinus color="#e6e6e6" size={26} />
                    </button>
                  ) : (
                    <button onClick={onClickDecrease} className={styles.minus}>
                      <AiOutlineMinus size={26} />
                    </button>
                  )}
                  <div className={styles.input}>{count}</div>
                  <button onClick={onClickIncrease} className={styles.plus}>
                    <AiOutlinePlus size={26} />
                  </button>
                </div>
                <button onClick={onClickAdd} className={styles.add}>
                  Add To Cart{' '}
                  <span className={styles.arrow}>
                    <BsFillArrowRightCircleFill />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.additional}>
        <div className="container">
          <div className={styles.buttons}>
            <button
              onClick={() => onClickTab(1)}
              className={`${styles.btn} ${tab === 1 ? styles.active_btn : ''}`}>
              Product Description
            </button>
            <button
              onClick={() => onClickTab(2)}
              className={`${styles.btn} ${tab === 2 ? styles.active_btn : ''}`}>
              Additional Info
            </button>
          </div>
          <p className={tab === 1 ? styles.text : styles.textShow}>
            Welcome to the world of natural and organic. Here you can discover the bounty of nature.
            We have grown on the principles of health, ecology, and care. We aim to give our
            customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs
            in raw.
          </p>
          <p className={tab === 2 ? styles.text : styles.textShow}>
            It contains a high concentration of nitrates, which have a blood pressure-lowering
            effect. This may lead to a reduced risk of heart attacks, heart failure, and stroke also
            rich in Vitamin C which helps in clearing blemishes and evens out your skin tone while
            giving it a natural glow lowering blood pressure and increasing exercise performance.
          </p>
        </div>
      </section>
      <Newsletter />
    </>
  );
};
