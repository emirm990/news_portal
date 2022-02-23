import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../card/Card';
import {
  news,
  fetchNewsAsync,
} from './homeSlice';
import styles from './Home.module.css';

export function Home() {
  const data = useSelector(news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsAsync());
  },[]);
 
  const newsList = data.map((item) =>
    <Card key={item.url} data={item}/>
  );

  return (
    <div className={styles.cardsContainer}>
      { newsList }
    </div>
  );
}