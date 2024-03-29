import { useEffect  } from "react";
import { API_OPTIONS, movieCategory } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../moviesSlice";

const useGetMovies = async() => {
    const dispatch=useDispatch();
    // https://api.themoviedb.org/3/movie/{movie_id}/recommendations
    const {allMovies}=useSelector((store)=>store.movies)
    async function getMovies(movie){
      const response = await fetch(
              `https://api.themoviedb.org/3/movie/${movie}?page=1`,
                
                 API_OPTIONS
              );
         const data=await response.json()
         return data.results
    }
 
   useEffect(()=>{
      async function getData(){
         const promises=movieCategory.map((item)=>getMovies(item))
         const movies=await Promise.all(promises)
         console.log(movies)
        dispatch(addMovie(movies))
     }
      getData()
   },[dispatch]) 
   

};

export default useGetMovies;
