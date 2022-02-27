import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../card/Card';
import { Loader } from '../../layouts/helpers/Loader';
import {
  incrementPage,
  hasMorePages,
  news,
  currentPage,
  fetchNewsAsync,
  currentEndPoint,
  getStatus,
} from './homeSlice';

export function Home() {
  const data = useSelector(news);
  const endPoint = useSelector(currentEndPoint);
  const currentPageIndicator = useSelector(currentPage);
  const moreDataAvailable = useSelector(hasMorePages);
  const status = useSelector(getStatus);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsAsync({currentPageIndicator,'endPoint': endPoint}));
  },[currentPageIndicator]);
  
  const newsList = data.map((item, index) =>
    <Card key={index} data={item} id={index}/>
  );

  return (
      <div>
        <div className="cardsContainer">
          { data.length > 0 ? newsList : <h3 className="no-results">No results...</h3> } 
        </div>
        <div className="button-container">
          {moreDataAvailable ? <button className="button" onClick={() => dispatch(incrementPage())}>Read more</button> : null}
        </div>
        <Loader status={status}/>
      </div>
  );
}