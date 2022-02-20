const FilmDetail = ({film}) => {
    return(
        <div className="main-container">
            <div className="image-container">
                <img className="film-cover" alt="film-cover"src={film["image"]}/>
            </div>
            <div className="text-container">
                <h3>{film.title}</h3>
                <p>{film.description}</p>
                <p>Release date: {film.release_date}</p>
                <p>Run time(mins): {film.running_time}</p>
                <p>Directed by: {film.director}</p>
                <p>Review score: {film.rt_score}</p>
            </div>
        </div>
    )
}

export default FilmDetail;
