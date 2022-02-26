import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchNewsAsync, 
  currentPage,
  currentEndPoint, 
  changeEndPoint, 
  getSearchTerm, 
  getSearchCategory, 
  setSearchCategory, 
  setSearchTerm
} from '../home/homeSlice';

export function Search() {

  const searchTerm = useSelector(getSearchTerm);
  const searchCategory = useSelector(getSearchCategory);
  const dispatch = useDispatch();
  const currentPageIndicator = useSelector(currentPage);
  const endPoint = useSelector(currentEndPoint);
  
  function handleSearch(forceEndPoint){
      forceEndPoint = forceEndPoint || endPoint;
      dispatch(fetchNewsAsync({'endPoint': forceEndPoint, currentPageIndicator, 'searchTerm': searchTerm, 'searchCategory': searchCategory}));
  }

  function handleCategoryChange(e){
     dispatch(setSearchCategory(e.target.value));
  }

  useEffect(() => {
      if(!searchTerm){
        dispatch(changeEndPoint({'endPoint': 'top-headlines', 'searchTerm': '', 'searchCategory': ''}));
        handleSearch('top-headlines');
      }else{
        dispatch(changeEndPoint({'endPoint': 'everything','searchTerm': searchTerm, 'searchCategory': searchCategory}));
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
        <input type="search" value={searchTerm} placeholder="Search..." onChange={e => dispatch(setSearchTerm(e.target.value))} />
        {searchTerm ? selectElement() : null}
        <button onClick={e => handleSearch()}>Search</button>
    </form>
  );
}