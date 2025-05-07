import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function FilterAndSearch() {
    const {search, setSearch, setFilterCategory, filterCategory, filteredCategories} = useContext(AppContext);

    return (
        <div className="d-flex justify-content-end">
            <input type="text" placeholder="cerca software" value={search} onChange={e => setSearch(e.target.value)} />

            <select value={filterCategory} onChange={e => { setFilterCategory(e.target.value); setSearch(''); }}>
                <option value='categories'>Tutte le categories</option>
                {filteredCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}