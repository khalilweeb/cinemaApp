
import cls from './popular.module.css';
import { useState , useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard ';
const Popular = () => { 


const [movies , setMovies] = useState(null);

useEffect(() => {

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=a9e828a8a563623b8e03bc294d55e6d8')
    .then(res => res.json())
    .then(json => setMovies(json))
    .catch(error => console.log(error));
  


} , [])



return (

    <>
    <div className={cls.div}>
     
             { movies ? movies.results.map((el) => {
                return  <MovieCard imgUrl = {el.poster_path} descp={el.overview}/>
})   : 'loading.....'}
          
      

        </div>
    </>




)

}

export default Popular;