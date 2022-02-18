import { useState, useEffect } from "react"
import FilmList from "../component/FilmList";

const FilmContainer = () => {

    const [films, setFilms] = useState();

    useEffect(() => {
        getFilms();
    }, [])

    const getFilms = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(data => setFilms(data))
    }

    return(
        <>
        <FilmList film={films}/>
        </>
    )
  
}

export default FilmContainer;
