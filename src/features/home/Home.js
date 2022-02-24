import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../card/Card';
import {
  incrementPage,
  hasMorePages,
  news,
  currentPage,
  fetchNewsAsync,
} from './homeSlice';

export function Home() {
  const data = useSelector(news);
  const currentPageIndicator = useSelector(currentPage);
  const moreDataAvailable = useSelector(hasMorePages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsAsync(currentPageIndicator))
  },[currentPageIndicator]);
  
  const newsList = data.map((item, index) =>
    <Card key={index} data={item} id={index}/>
  );

  return (
    <div>
      <div className="cardsContainer">
        { newsList }
      </div>
      <div className="button-container">
        {moreDataAvailable ? <button className="button" onClick={() => dispatch(incrementPage())}>Read more</button> : null}
      </div>
    </div>
  );
}