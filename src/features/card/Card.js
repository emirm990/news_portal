import React from 'react';
import styles from '../home/Home.module.css';

export function Card({data}) {
  
  return (
    <div className={styles.cardItem + ' ' + styles.animateCard}>
      <div className={styles.cardItem__header}>
        <img src={data.urlToImage ?? 'placeholder.png'} alt={data.source.name}></img>
        <h4>{data.title}</h4>
      </div>
      <p> {data.description} </p>
      <div className={styles.cardItem__overlay}>
        <p>
          <strong>READ FULL ARTICLE</strong>
        </p>
      </div>
    </div>
  );
}