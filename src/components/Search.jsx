import {useState} from "react"
const Search = (props) => {

	const [search, setSearch] = useState("")

	const handleSearch = () => {
		props.onSearchChange(search)
	}

	const handleEnter = (e) => {
		if (e.key === "Enter") {
			handleSearch()
		}
	}
	return (
		<>
			<div>
				Search :{" "}
				<input
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={handleEnter}
				/>
				<button onClick={handleSearch}>Cari</button>
			</div>

			<p>
				Ditemukan {props.total} data dari pencarian kata {search}
			</p>
		</>
	)
}

export default Search
