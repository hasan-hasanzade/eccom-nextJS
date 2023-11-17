'use client';

import React from 'react';
import styles from './register.module.scss';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FcAddImage } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/store';
import { selectIsAuth, selectorUserImg } from '../../redux/auth/selectors';
import { setUserImageUrl } from '../../redux/auth/slice';
import { fetchRegister } from '../../redux/auth/asyncActions';
import axios from '../../axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

export default function Register(){
  const inputFileRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const isAuth = useSelector(selectIsAuth);

  const { userImageUrl } = useSelector(selectorUserImg);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values: Record<string, string>) => {
    const dataToSend = {
      ...values,
      userImageUrl: userImageUrl,
    };

    const data = await dispatch(fetchRegister(dataToSend));

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

    if (fetchRegister.fulfilled.match(data)) {
      const token = data.payload.token;
      window.localStorage.setItem('token', token);
    } else if (fetchRegister.rejected.match(data)) {
      console.log('Cannot Register');
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

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const formData = new FormData();
      const file = e.target.files?.[0];
      if (file !== undefined) {
        formData.append('image', file);

        const { data } = await axios.post('/upload', formData);

        dispatch(setUserImageUrl(data.url));
      } else {
        alert('No file selected');
      }
    } catch (err) {
      console.warn(err);
      alert('Failed to upload file');
    }
  };

  return (
    <section className={styles.sign}>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <div className={`${styles.image} ${styles._ibg}`}>
        <Image src='/img/bgsign.jpg' alt="Background Image" width={2400} height={1904}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h3>Sign Up</h3>

        <div className={styles.user}>
          {userImageUrl ? (
            <>
              {/* <Button variant="contained" color="error" onClick={onClickRemoveImage}>
                Delete
              </Button> */}
              <Image
                className={styles.userImage}
                src={`http://localhost:3333${userImageUrl}`}
                alt="user"
                width={100}
                height={100}
              />
            </>
          ) : (
            <>
              {/* <img onClick={() => inputFileRef.current?.click()} src={user} alt="user" className={styles.noUser} /> */}
              <p onClick={() => inputFileRef.current?.click()} className={styles.noUser}>
                <FcAddImage size={55} />{' '}
              </p>
              <input ref={inputFileRef} onChange={handleChangeFile} type="file" hidden />
            </>
          )}
        </div>

        <input
          className={`${styles.input} ${errors.fullName ? styles['errorBorder'] : ''}`}
          type="text"
          {...register('fullName', { required: 'Enter your full name' })}
          placeholder="Fullname"
        />
        {errors.fullName?.message && <p className={styles.error}>Name is required.</p>}
        <input
          className={`${styles.input} ${errors.email ? styles['errorBorder'] : ''}`}
          type="email"
          {...register('email', { required: 'Enter your Email' })}
          placeholder="Email"
        />
        {errors.email?.message && <p className={styles.error}>Email is required.</p>}
        <input
          className={`${styles.input} ${errors.password ? styles['errorBorder'] : ''}`}
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Enter your password' })}
        />
        {errors.password?.message && <p className={styles.error}>Password is required.</p>}
        <div className={styles.btn}>
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </div>
        <div className={styles.social}>
          <div className={styles.icon}>
            <AiFillGoogleCircle size={20} /> Google
          </div>
          <div className={styles.icon}>
            <BsFacebook size={18} /> Facebook
          </div>
        </div>
      </form>
      <Toaster position="bottom-left" reverseOrder={false} />
    </section>
  );
};
