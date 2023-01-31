import { useState } from 'react';
import { useDispatch } from "react-redux";
import { getDogsByName } from '../../redux/actions';
import style from "./Search.module.css";

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
        <div className={style.search}>
            <h1> Search </h1>
            <form>
                <input id="search" type="search" placeholder="Search for a breed..." onChange={searchHandler} value={search.name} />
                <button type="submit" onClick={submitHandler} value={search.name}>Search</button>
            </form>
        </div>
    )
}

export default Search;