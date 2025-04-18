import posts from '../posts.json';
import Article from '../components/Article';
import { useState } from 'react';
const HomePage = () =>{
    const [search , setSearch] = useState('')

    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }

    return(
        <div>
            <h1>Home Page</h1>
            <div>
                Serach Title : <input onChange={handleSearch} />
            </div>
            <p>Get Title {search}</p>
            <div>
            {posts.map(({title,date,description } ,index) => (
                <Article
                 key={index}
                 {...{title, date , description}}
                />
            ))}
            </div>
        </div>
    )
}

export default HomePage;