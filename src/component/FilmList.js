import FilmItems from "./Film";

const FilmList = ({films}) => {

    const filmItems = films.map((film) => {
        return <FilmItems film = {film}/>
    })

    return(
        <>
        {filmItems}
        </>
    )
  
}

export default FilmList;
