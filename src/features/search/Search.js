import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchNewsAsync,fetchNewsAsync, currentPage } from '../home/homeSlice';
export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const currentPageIndicator = useSelector(currentPage);

  function handleSearch(keyCode){
      if(keyCode === 'Enter'){
        dispatch(searchNewsAsync(searchTerm))
      }
    //   if(!searchTerm){
    //     dispatch(fetchNewsAsync(currentPageIndicator))
    //   }
  }
  useEffect(() => {
      if(!searchTerm){
        dispatch(fetchNewsAsync(currentPageIndicator))
    }
  } ,[searchTerm]);
  function selectElement(){
      return(
        <select name="category" id="category">
            <option value="relevancy">Relevancy</option>
            <option value="popularity">Popularity</option>
            <option value="publishedAt">Date</option>
        </select>
      )
  }
  return (
    <div id="search">
        <div>
            <input type="search" placeholder="Search..." onChange={e => setSearchTerm(e.target.value)} onKeyUp={e => handleSearch(e.code) } />
        </div>
        <div>
            {searchTerm ? selectElement() : null}
        </div>
    </div>
  );
}