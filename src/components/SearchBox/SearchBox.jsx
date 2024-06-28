import css from './SearchBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setNameFilter } from "../../redux/filters/slice";
import { useId } from "react";


export default function SearchBox() {
    const id = useId();
    
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilter = (e) => {
        const name = e.target.value.trim();
        dispatch(setNameFilter(name));
    };

    return (
        <div className={css.serchBoxWrapper}>
            <p className={css.searchText} >Find contacts by name</p>
            <input value={filter} onChange={handleFilter} type='text' id={id} className={css.searchInput}></input>
           
        </div>

    )
}