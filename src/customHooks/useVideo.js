import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useVideo = (movieId) => {
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const dispatch = useDispatch();

     const fetchvideo = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US"
        , API_OPTIONS);

        const json = await data.json();
        const filterdata = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterdata.length === 0 ? filterdata[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));

    }

    useEffect(() => {
        !trailerVideo && fetchvideo();
    }, [])



}

export default useVideo;