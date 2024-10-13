
import cls from './popular.module.css';
import { useState , useEffect } from 'react';

const Popular = () => { 


const [movies , setMovies] = useState(null);

useEffect(() => {

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=a9e828a8a563623b8e03bc294d55e6d8')
    .then(res => res.json())
    .then(json => setMovies(json))
    .catch(error => console.log(error));


} , [])

console.log( movies ? movies.results : false);

return (

    <>
    <div className={cls.div}>
     
             <h1>{ movies ? movies.results[0].title : null}</h1>
             { movies && <img src=  { 'https://image.tmdb.org/t/p/w500' +movies.results[0].backdrop_path} alt='poster'/> }
      

        </div>
    </>




)

}

export default Popular;