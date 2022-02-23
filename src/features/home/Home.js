import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../card/Card';
import {
  incrementPage,
  hasMorePages,
  news,
  currentPage,
  fetchNewsAsync,
} from './homeSlice';
import styles from './Home.module.css';

export function Home() {
  const data = useSelector(news);
  const currentPageIndicator = useSelector(currentPage);
  const moreDataAvailable = useSelector(hasMorePages);
  console.log(moreDataAvailable);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsAsync(currentPageIndicator));
    dispatch(incrementPage());
  },[]);
  
  const newsList = data.map((item) =>
    <Card key={item.url} data={item}/>
  );

  function incrementPageAndFetchNews(payload) {
        dispatch(incrementPage(payload))
        dispatch(fetchNewsAsync(payload))
      }
  return (
    <div>
      <div className={styles.cardsContainer}>
        { newsList }
      </div>
      <div>
        {moreDataAvailable ? <button onClick={() => incrementPageAndFetchNews(currentPageIndicator)}>Read more</button> : null}
      </div>
    </div>
  );
}