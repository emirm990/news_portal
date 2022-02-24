import React from 'react';
import { Link } from "react-router-dom";

export function Card({data, id}) {
  return (
    <div className="cardItem animateCard">
      <div className="cardItem__header">
        <img src={data.urlToImage ?? 'placeholder.png'} alt={data.source.name}></img>
        <h4>{data.title}</h4>
      </div>
      <p> {data.description} </p>
      <Link to={"/details/" + id}  className="cardItem__overlay "state={data}>
        <p>
          <strong>READ FULL ARTICLE</strong>
        </p>
      </Link>
    </div>
  );
}