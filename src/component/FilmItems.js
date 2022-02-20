const FilmItems = ({film}) => {
    return(
        <div className="film">
            <img alt="film-cover"src={film["image"]}/>
            <h3>{film.title} ({film.release_date})</h3>
        </div>
    )
}

export default FilmItems;
