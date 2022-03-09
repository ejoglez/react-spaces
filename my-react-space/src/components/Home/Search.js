import React from "react";
import "./Search.css"


function Search({search,setSearch}){

    function change(e){
        setSearch(e.target.value)
        console.log('search', search)
    }

    return(
        <div className="search">
            <div className="label">
                <label>Search for the latest news</label>
            </div>
            <input
            className="fullSearch" 
            type="text" 
            value={search}
            onChange={change}
            placeholder="Search Title"
            />
        </div>
    )
}
export default Search