import React from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const FilterUsers = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const searchTerm = searchParams.get("search") || "";
    const location = useLocation();

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchParams({ search: value })
    }

  return (
    <div style={{ padding: "1rem" }}>
        <h3>Filter Users</h3>
        <input type="text" placeholder='Search user...' value={searchTerm} onChange={handleSearch} />
        <p>Searching for: {searchTerm || "Nothing yet !!"}</p>


        <p>
            <strong>Current Path:</strong> {location.pathname}
        </p>
        <p>
            <strong>Search Params:</strong> {location.search || "none"}
        </p>

        <nav style={{marginBottom: "1rem"}}>
            <Link to="profile" style={{ marginRight: "10px" }}>
                Profile            
            </Link>
            <Link to="settings">Settings</Link>
        </nav>
        



    </div>
  )
}

export default FilterUsers