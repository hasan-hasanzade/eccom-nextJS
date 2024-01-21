import React from 'react';
import styles from './searcherror.module.scss';
import Image from 'next/image';
import { useAppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/filter/slice';

type SearchErrorProps = {
  setErrorMessage: (error: boolean) => void;
  getFilteredItems: () => void;
};

export const SearchError: React.FC<SearchErrorProps> = ({ setErrorMessage, getFilteredItems }) => {
  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(setSearchValue(''));
    setErrorMessage(false);
    getFilteredItems();
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.image}>
            <Image src='/img/search-err/search.png' alt="err" width={800} height={800}/>
          </div>
          <div className={styles.content}>
            <h4 className={styles.title}>
              Your search did not match any products. You may consider to:
            </h4>
            <ul className={styles.list}>
              <li className={styles.item}>Check the spelling</li>
              <li className={styles.item}>Use less keywords</li>
              <li className={styles.item}>Use different keywords</li>
            </ul>
            <button onClick={handleBack}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};
