'use client';

import React from 'react';
import styles from './login.module.scss';
import { AiFillGoogleSquare, AiFillFacebook } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { selectIsAuth } from '../../redux/auth/selectors';
import { fetchLogin } from '../../redux/auth/asyncActions';
import { useRouter } from 'next/router';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
  const dispatch = useAppDispatch();

  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values: Record<string, string>) => {
    const data = await dispatch(fetchLogin(values));

    if (!data.payload) {
      const err = () =>
        toast.error('You entered an incorrect email or password.', {
          style: {
            border: '2px solid #fff',
            padding: '16px',
            color: '#fff',
            fontSize: '17px',
            backgroundColor: '#274C5B',
          },
          iconTheme: {
            primary: 'red',
            secondary: '#FFFAEE',
          },
        });
      err();
    }

    if (fetchLogin.fulfilled.match(data)) {
      const token = data.payload.token;
      window.localStorage.setItem('token', token);
    } else if (fetchLogin.rejected.match(data)) {
      console.log('err');
    }
  };

  if (isAuth) {
    const router = useRouter()
    const notify = () =>
      toast.success('Done', {
        style: {
          padding: '16px',
          color: '#274C5B',
          fontSize: '17px',
          backgroundColor: '#EFD372',
        },
        iconTheme: {
          primary: '#7EB693',
          secondary: '#FFFAEE',
        },
      });
    notify();
    return router.push('/');
  }

  return (
    <section className={styles.login}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h3>Log in</h3>
          <input
            className={`${styles.input} ${errors.email ? styles['errorBorder'] : ''}`}
            type="text"
            placeholder="Email"
            {...register('email', { required: 'Enter your Email' })}
          />
          {errors.email?.message && <p className={styles.error}>Email is required.</p>}
          <input
            className={`${styles.input} ${errors.email ? styles['errorBorder'] : ''}`}
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Enter your Password' })}
          />
          {errors.email?.message && <p className={styles.error}>Password is required.</p>}
          <div className={styles.btn}>
            <button className={styles.button}>Log In</button>
          </div>
          <div className={styles.social}>
            <div className={styles.icon}>
              <AiFillGoogleSquare size={20} /> Google
            </div>
            <div className={styles.icon}>
              <AiFillFacebook size={20} /> Facebook
            </div>
          </div>
        </form>
      </div>
      <div className={`${styles.image} ${styles._ibg}`}>
        <Image src='/img/login.jpg' alt="Background Image" width={5760} height={3840}/>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </section>
  );
};
