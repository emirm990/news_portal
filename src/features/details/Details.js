import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getNewsById, details} from '../home/homeSlice';

export function Details() {
  let { id } = useParams();
  const dispatch = useDispatch();
  dispatch(getNewsById(Number(id)));
  const data = useSelector(details);

  function formatDate(date){
    let dateObject = new Date(date);
    if(dateObject){
        return dateObject.toLocaleDateString("en-GB");
    }
    return null;
  }
  return (
    <div className="details-container">
        <div className="details-image-container">
            <img src={data.urlToImage ?? '/placeholder.png'} alt=""/>
            <div className='details-image-info'>
                <p>{data.author}</p>
                <p>{formatDate(data.publishedAt)}</p>
            </div>
        </div>
        <div className="details-content">
            <h1>{data.title}</h1>
            <div>
                <div>
                    {data.description}
                </div>
                <a href={data.url} target="_blank" rel="noreferrer">
                    {data.content}
                </a>
            </div>
        </div>
    </div>
  );
}