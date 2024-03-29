import React, { useState,useEffect} from "react"
import "./Row.css";
import axios from "./axios";
import youTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url="https://image.tmdb.org/t/p/orginal/";
function Row({title,fetchurl,islargeRow}){
  const [movies,setMovies]=useState([]);
  const [trailurl,setTrailerurl]=useState("")
   useEffect(()=>{
      async function fetchData(){
      const request=await axios.get(fetchurl);
    //    console.log(request);
     setMovies(request.data.results);
      return request;
    }
 fetchData();
  },[fetchurl]);
  const opts={
    height:'390',
    width:'100%',
    playerVars:{
      autoplay:1,  
    },
};
  const handleClick=(movie)=>{
    if(trailurl){
      setTrailerurl("");
    }
    else{
      movieTrailer(movie?.title || movie?.name || movie.orginal_name)
      .then((url)=>{
        const params =new URLSearchParams(new URL(url).search);
        setTrailerurl(params.get('v'));
      })
      .catch((error) => console.log(error));
      }
    };
  
  return (
    <div className="row">
      <h1> {title}</h1>
      <div className="row__posters">,
         {movies.map((movie)=>{
        <img onClick={()=> handleClick(movie)}
         className={`row__poster ${'isLargeRow' &&'row__posterLarge'}`}
        src={`${base_url}${ islargeRow?movie.poster_path:movie.backdrop_path}`}
      alt={movie.name} />
       } )}
       </div>
       <div style={{padding:"40px"}}>
        const trailurl:String
      { trailurl && < youTube videoId={trailurl} opts={opts}/>}
      
       </div>
    </div> 
    );
      }

export default Row;