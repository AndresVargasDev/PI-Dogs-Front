import { useState } from 'react';
import { useDispatch } from "react-redux";
import { getDogsByName } from '../../redux/actions';

const Search = () => {
    const dispatch = useDispatch();

    const [search, setSearch] = useState({
        name: ""
    })

    const searchHandler = (event) => {
        setSearch({ name: event.target.value });
    }

    const submitHandler = () => {
        const name = search.name
        if (name.length > 0) {
            dispatch(getDogsByName(name));
        }
    }

    return (
        <div>
            <input id="search" type="search" placeholder="Ingrese el nombre a buscar..." onChange={searchHandler} value={search.name} />
            <button type="submit" onClick={submitHandler} value={search.name}>Buscar</button>
        </div>
    )
}

export default Search;