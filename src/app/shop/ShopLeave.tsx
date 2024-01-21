
'use client'
import React from 'react';
import styles from './shop.module.scss';
import { PageBanner } from '@/components/PageBanner/PageBanner';
import bg from '../../../public/img/shop/shop.jpg';
import { SideBar } from '@/components/SideBar/SideBar';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import Skeleton from '@/components/ProductCard/Skeleton';
import { Pagination } from '@/components/Pagination/Pagination';
import { SearchError } from '@/components/SearchError/SearchError';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { setPageCount, setCategoryName } from '../../redux/filter/slice';
import { filterSelector } from '../../redux/filter/selectors';
import { productSelector } from '../../redux/product/selectors';
import { resetItems } from '../../redux/product/slice';
import { fetchFilteredItems } from '../../redux/product/asyncActions';

export default function ShopLeave() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const currentPage = React.useRef(1);
  const limit = 8;

  const { searchValue, pageCount, categoryName, sortBy, priceRange } = useSelector(filterSelector);

  const items = useSelector(productSelector);

  const dispatch = useAppDispatch();



  React.useEffect(() => {
    if (categoryName !== 'all') {
      getFilteredItems();
    }
  }, [categoryName]);

  React.useEffect(() => {
    if (searchValue === '') {
      getFilteredItems();
    }
  }, [searchValue]);

  // React.useEffect(() => {
  //   if (categoryParam) {
  //     dispatch(setCategoryName(categoryParam));
  //   }
  // }, [categoryParam, dispatch]);

  const handlePageClick = (e: { selected: number }) => {
    currentPage.current = e.selected + 1;
    getFilteredItems();
  };

  const handlePriceFilter = () => {
    getFilteredItems();
  };

  React.useEffect(() => {
    currentPage.current = 1;
    getFilteredItems();
  }, [categoryName, sortBy]);

  const getFilteredItems = () => {
    setIsLoading(true);

    dispatch(
      fetchFilteredItems({
        searchValue,
        categoryName,
        sortBy,
        currentPage: currentPage.current,
        limit,
        priceRange,
      }),
    )
      .unwrap()
      .then((res) => {
        if (res.items.length === 0) {
          setErrorMessage(true);
        } else {
          setErrorMessage(false);
        }
        dispatch(setPageCount(res.pageCount));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setErrorMessage(true);
        setIsLoading(false);
      });
  };

  const handleSearch = () => {
    const searchTerm = searchValue.toLowerCase();

    if (searchTerm === '' || searchTerm.length === 1) {
      setErrorMessage(true);
      dispatch(resetItems());
      dispatch(setPageCount(0));
    } else {
      getFilteredItems();
    }
  };

  const handleCategory = () => {
    currentPage.current = 1;
    if (categoryName === 'all') {
      dispatch(
        fetchFilteredItems({
          searchValue,
          categoryName: '',
          sortBy,
          currentPage: 1,
          limit,
          priceRange,
        }),
      )
        .unwrap()
        .then((res) => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <PageBanner title={'Our Shop'} img={bg} />
      <section className={styles.shop}>
        <div className={styles.content}>
          <SideBar
            handleSearch={handleSearch}
            handleCategory={handleCategory}
            handlePriceFilter={handlePriceFilter}
            getFilteredItems={getFilteredItems}
          />
          <div className={styles.inner}>
            <div className={styles.body}>
              {errorMessage && !isLoading && (
                <SearchError
                  getFilteredItems={getFilteredItems}
                  setErrorMessage={setErrorMessage}
                />
              )}
              {isLoading
                ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj: any) => <ProductCard key={obj._id} {...obj} />)}
            </div>
            <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
          </div>
        </div>
      </section>
    </>
  );
};
