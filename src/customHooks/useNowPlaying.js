import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



const useNowPlaying = () => {
    const dispatch = useDispatch();
    const now_playing = useSelector((store) => store.movies. nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addMovies(json.results));

    }

    useEffect(() => {
     !now_playing &&getNowPlayingMovies();
    }, [])
}

export default useNowPlaying;