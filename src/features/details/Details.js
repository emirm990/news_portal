import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getNewsById, details} from '../home/homeSlice';

export function Details() {

  const [dataFromSession, setDataFromSession] = useState(sessionStorage.getItem('data') != 'undefined' || !sessionStorage.getItem('data') ? JSON.parse(sessionStorage.getItem('data')) : {});
  let { id } = useParams();
  const dispatch = useDispatch();
  dispatch(getNewsById(Number(id)));
  const data = useSelector(details);
  
  function storeDataToSession(){
      if(data){
        sessionStorage.setItem('data', JSON.stringify(data));
      }
      
  }
  
  function formatDate(date){
    let dateObject = new Date(date);
    if(dateObject){
        return dateObject.toLocaleDateString("en-GB");
    }
    return null;
  }

  useEffect(() => {
    storeDataToSession();
  }, [data]);

  return (
    <div className="details-container">
        <div className="details-image-container">
            <img src={data ? data.urlToImage ?? '/placeholder.png' : dataFromSession.urlToImage} alt=""/>
            <div className='details-image-info'>
                <p>{data ? data.author : dataFromSession.author}</p>
                <p>{formatDate(data ? data.publishedAt : dataFromSession.publishedAt)}</p>
            </div>
        </div>
        <div className="details-content">
            <h1>{data ? data.title : dataFromSession.title}</h1>
            <div>
                <div>
                    {data ? data.description : dataFromSession.description}
                </div>
                <a href={data ? data.url : dataFromSession.url} target="_blank" rel="noreferrer">
                    {data ? data.content : dataFromSession.content}
                </a>
            </div>
        </div>
    </div>
  );
}