import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import MovieApi from '../../common/Apis/MovieApi';
import { APIKey } from '../../common/Apis/MovieApiKey';
import {useDispatch} from 'react-redux';
import {addMovies} from '../../features/movies/movieSlice';

const Home = () => {
  const movieText = "Avengers";
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchMovies = async () => {
      const response = await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err)=>{
        console.log("Error : " , err)
      });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  },[])
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing/>
    </div>
  )
}

export default Home