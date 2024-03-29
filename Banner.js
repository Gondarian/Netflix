import React,{useEffect,useState} from 'react';
import './Banner.css';
import axios from 'axios';
import requests from './requests';
function Banner() {
    const [movie,setMovie]=useState([]);
  useEffect(()=>{
        async function fetchData(){
        const request=await axios.get(requests.fetchNetflixOriginals);
      //    console.log(request);
       setMovie(request?.data.results[
        Math.floor(Math.random() *requests.data.results.length)
       ]);
        return request;
      }
   fetchData();
    },[]);
    function truncate(str,n){
      return str?.length > n? str.substr(0,n-1) + "..." :str;
    }
  return (
      <header className='banner'
      style={{
        backgroundSize:"cover",
        backgroundImage:`url("http;//image.tmdb.org/t/p/orginal/${movie?.backdrop_path}")`,
        backgroundPosition:"center center"
      }}

    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name||movie.orginal_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button'> Play</button>
          <button className='banner_button'> My List</button>
        </div>
        <h1 className='banner_discription'>{truncate(movie?.overview,150)}</h1>
        <div className='banner_fadbutton'/>

      </div>
      </header>

  )
}

export default Banner;