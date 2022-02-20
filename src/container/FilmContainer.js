import { useState, useEffect } from "react"
import FilmList from "../component/FilmList";
import FilmSelect from "../component/FilmSelect";
import FilmDetail from "../component/FilmDetail";


const FilmContainer = () => {

    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);


    useEffect(() => {
        getFilms();
    }, [])

    const getFilms = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setFilms(films))
    }

    const onFilmClick = function(film){
        setSelectedFilm(film);
    }

    const onFilmSelected = function(film){
        setSelectedFilm(film);
    }

    return(
        <div className="film-container">
            <FilmSelect films={films} onFilmSelected={onFilmSelected}/>
            <div className="film-sub-container">
                {selectedFilm ? <FilmDetail film={selectedFilm} /> : <FilmList films={films}/>}
            </div>
            

        </div>
    )
  
}

export default FilmContainer;
