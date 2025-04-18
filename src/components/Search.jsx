import { useState } from "react"
const Search = () =>{
    const [search , setSearch ] = useState("")
    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }
 return (
    <>
    
    <div>
        Search : <input  onChange={handleSearch} />
    </div>

    <p>Ditemukan 0 data dari pencarian kata {search}</p>
    </>
 )
}

export default Search