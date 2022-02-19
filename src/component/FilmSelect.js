const FilmSelect = ({film}) => {
    return(
        <div className="film">
            <img alt="film-cover"src={film["image"]}/>
            <h3>{film.title}</h3>
            <p>{film.description}</p>
            <p>{film.release_date}</p>
            <p>{film.running_time}</p>
            <p>{film.director}</p>
            <p>{film.rt_score}</p>

        </div>
    )
}

export default FilmSelect;
