import { useEffect } from "react";

const Movies = () => {

const getMovies = () =>  {

    fetch("https://api.themoviedb.org/3/discover/movie?api_key=a9e828a8a563623b8e03bc294d55e6d8")
    .then(res => res.json())
    .then(json => console.log(json.results))


}


useEffect( () => {
getMovies()

} ,[]);



}

export default Movies;