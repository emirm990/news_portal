import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchNewsAsync,fetchNewsAsync, currentPage } from '../home/homeSlice';
export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('relevancy');
  const dispatch = useDispatch();
  const currentPageIndicator = useSelector(currentPage);

  function handleSearch(){
      dispatch(searchNewsAsync({'searchTerm' : searchTerm, 'searchCategory': searchCategory}))
  }
  function handleCategoryChange(e){
     setSearchCategory(e.target.value);
     handleSearch();
  }
  useEffect(() => {
      if(!searchTerm){
        dispatch(fetchNewsAsync(currentPageIndicator))
      }
  } ,[searchTerm, searchCategory]);
  function selectElement(){
      return(
        <select name="category" id="category" onChange={e => handleCategoryChange(e)}>
            <option value="relevancy">Relevancy</option>
            <option value="popularity">Popularity</option>
            <option value="publishedAt">Date</option>
        </select>
      )
  }
  return (
    <form id="search" onSubmit={e => e.preventDefault()}>
        <input type="search" placeholder="Search..." onChange={e => setSearchTerm(e.target.value)} />
        {searchTerm ? selectElement() : null}
        <button onClick={e => handleSearch(e)}>Search</button>
    </form>
  );
}