import FilmItems from "./FilmItems";

const FilmList = ({films}) => {

    const filmItems = films.map((film) => {
        return <FilmItems film = {film}/>
    })

    return(
        <div className="film-list">
        {filmItems}
        </div>
    )
  
}

export default FilmList;
