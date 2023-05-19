import React from 'react'
import './Searchbar.css'
import { useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Searchbar = () => {
  const [inputSearch,setInputSearch]=useState("")
  const params = useParams();
  const navigate=useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    
    setInputSearch(e.target.value);

    navigate(`/searchpage/${inputSearch}`);
  };
  useEffect(() => {
    if (params.hasOwnProperty("SearchQuery")){
      setInputSearch(params.SearchQuery);
    }
    }, [params]);
  
  
  
  
  
 
  return (
    <>
          <form className='search-bar' onSubmit={handleSearch}>
            <input type="search" placeholder='Search...' onChange={(e)=> setInputSearch(e.target.value)} value={inputSearch} required/>
           <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </>
  )
}

export default Searchbar
