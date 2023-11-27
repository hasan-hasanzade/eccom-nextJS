'use client'

import React from 'react';
import styles from './commentsblock.module.scss';
import { authData, selectIsAuth } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { commentSelector, commentTextSelector } from '../../redux/comment/selectors';
import { fetchComment, fetchCommentPost } from '../../redux/comment/asyncActions';
import { setCommentText, commentSlice } from '../../redux/comment/slice';
import profile from '../../../public/img/user.png';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';

export default function CommentsBlock() {
  const dispatch = useAppDispatch();

  const comments = useSelector(commentSelector);

  const commentText = useSelector(commentTextSelector);

  const isAuth = useSelector(selectIsAuth);
  const isAuthData = useSelector(authData);

  const avatarUrl = isAuthData?.avatarUrl;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCommentText(e.target.value));
  };

  const handleCommentSubmit = async () => {
    const text = commentText;

    try {
      const newComment = await dispatch(fetchCommentPost(text));

      dispatch(fetchComment());

      dispatch(commentSlice.actions.setCommentText(''));
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  React.useEffect(() => {
    dispatch(fetchComment());
  }, []);

  const notify = () =>
    toast.error('To add a comment, please log in.', {
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

  return (
    <section className={styles.comments}>
      <div className={styles.body}>
        <h5 className={styles.heading}>Comments</h5>
        {comments.map((obj) => (
          <div key={obj._id} className={styles.item}>
            <div className={styles.image}>
              {obj.author && (
                <div className={styles.image}>
                  {obj.author.avatarUrl ? (
                    <Image src={`https://server-tisf.onrender.com${obj.author.avatarUrl}`} alt="user" width={35} height={35}/>
                  ) : (
                    <Image src={profile} alt="user" width={35} height={35}/>
                  )}
                </div>
              )}
            </div>
            <div className={styles.desc}>
              <span className={styles.name}>{obj.author?.fullName}</span>
              <span className={styles.text}>{obj.text}</span>
            </div>
          </div>
        ))}
        <div className={styles.post}>
          <div className={styles.userImage}>
            {isAuth && avatarUrl ? (
              <Image src={`https://server-tisf.onrender.com${avatarUrl}`} alt="" width={35} height={35}/>
            ) : (
              <Image src={profile} alt="" width={35} height={35}/>
            )}
          </div>
          <div className={styles.postInput}>
            <input
              onChange={handleInputChange}
              className={styles.input}
              type="text"
              placeholder="Write a Comment"
              value={commentText}
            />
          </div>
        </div>
        <div className={styles.buttonSubmit}>
          {isAuth ? (
            <button type="submit" onClick={handleCommentSubmit} className={styles.btn}>
              Add comment
            </button>
          ) : (
            <button onClick={notify} className={styles.btn}>
              Add comment
            </button>
          )}
        </div>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </section>
  );
};
