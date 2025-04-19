import postsData from '../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';
import { useState } from 'react';
const HomePage = () =>{
    const [posts ,setPosts] =useState(postsData)

    const handleFilter = (value) =>{
        const filteredPosts = postsData.filter((item) =>(
            item.title.toLowerCase().includes(value.toLowerCase())
        ))
        setPosts(filteredPosts)
    }

    return(
        <div>
            <Search onSearchChange={handleFilter}/>
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