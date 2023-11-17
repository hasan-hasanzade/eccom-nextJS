import React from 'react';
import styles from './productcard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdDoneOutline } from 'react-icons/md';
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { addItem, removeItem } from '../../redux/cart/slice';
import { cartSelector } from '../../redux/cart/selectors';
import { CartItem } from '../../redux/cart/types';
import toast, { Toaster } from 'react-hot-toast';
import { forwardRef, Ref } from 'react';
import { motion } from 'framer-motion';

type ProductCardProps = {
  _id: string;
  category: string;
  imageUrl: string;
  title: string;
  price: number;
  rating: number;
};

export const ProductCard: React.FC<ProductCardProps> = forwardRef(
  ({ _id, category, imageUrl, title, price, rating }, ref: Ref<HTMLDivElement>) => {
    const [isAdded, setIsAdded] = React.useState(false);

    const dispatch = useAppDispatch();

    const cartItems = useSelector(cartSelector);

    React.useEffect(() => {
      const existingItem = cartItems.find((item) => item._id === _id);
      setIsAdded(!!existingItem);
    }, [cartItems, _id]);

    const notify = () => toast.success('Item Added to Cart');

    const handleAddItem = () => {
      const item = {
        _id,
        imageUrl,
        title,
        price,
      } as CartItem;

      const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);

      if (!existingItem) {
        dispatch(addItem(item));
        notify();
      } else {
        dispatch(removeItem(item._id));
        const notify = () => toast.error('Item Deleted from Cart');
        notify();
      }
    };

    return (
      <>
        <div ref={ref} className={styles.content}>
          <article className={styles.item}>
            <div className={styles.category}>
              <span className={styles.categoryTitle}>{category}</span>
            </div>
            <Link href={`/items/${_id}`} className={`${styles.image} ${styles._ibg}`}>
              <Image className={styles.image} src={imageUrl} alt="Product" width={283} height={349}/>
            </Link>
            <div className={styles.bottom}>
              <div className={styles.main}>
                <div className={styles.name}>{title}</div>
                <button onClick={handleAddItem} className={styles.add}>
                  {isAdded ? (
                    <MdDoneOutline size={30} color="#7eb693" />
                  ) : (
                    <AiOutlinePlusCircle size={30} />
                  )}
                </button>
              </div>
              <div className={styles.pricing}>
                <div className={styles.price}>
                  <div className={styles.new}>${price}</div>
                </div>
                <div className={styles.rating}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={rating > 5 ? rating - 4 : rating}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
        <Toaster position="bottom-left" reverseOrder={false} />
      </>
    );
  },
);

export const MProductCard = motion(ProductCard);
