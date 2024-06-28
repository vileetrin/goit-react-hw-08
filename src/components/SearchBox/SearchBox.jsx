import css from './SearchBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectors";
import { setNameFilter } from "../../redux/filtersSlice";


export default function SearchBox () {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilter = (e) => {
        const name = e.target.value.trim();
        dispatch(setNameFilter(name));
    };

    return (
        <div className={css.serchBoxWrapper}>
            <p className={css.searchText} >Find contacts by name</p>
            <input value={filter} onChange={handleFilter} type='text' id='searchBox' className={css.searchInput}></input>
           
        </div>

    )
}