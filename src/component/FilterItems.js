import { useState, useEffect } from "react";


function FilterItems ({handleChange}) {
    
    const [searchFilm, setSearchFilm] = useState("");

    const changeBySearch = (event) => {
        event.preventDefault();
        setSearchFilm(event.target.value)
    }

    useEffect (() => {

        handleChange(searchFilm);
    }, [searchFilm])

    const handleSubmit = (event) => {
        event.preveentDefault()
    }


    return (
        <div className="dropdown">
            <label> Select Movie:
                <select className="selectable">
                    <option value="All">All</option>
                    <option value="Spirited Away">Spirited Away</option>
                    <option value="Howls Moving Castle">Howls Moving Castle</option>
                    <option value="Ponyo">Ponyo</option>
                </select>
            </label>
        </div>
      );
}

export default FilterItems;