import postsData from '../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';
import { useState } from 'react';
const HomePage = () =>{

    const [posts ,setPosts] =useState(postsData)
    const [totalPosts , setTotalPosts] = useState(0)

    const handleFilter = (value) =>{
        const filteredPosts = postsData.filter((item) =>(
            item.title.toLowerCase().includes(value.toLowerCase())
        ))
        setPosts(filteredPosts)
        setTotalPosts(filteredPosts.length)
    }

    return(
        <div>
            <Search onSearchChange={handleFilter} total={totalPosts} />
            <div>
            {posts.map(({title,date,description,isNew } ,index) => (
                <Article
                 key={index}
                 {...{title, date , description, isNew}}
                />
            ))}
            </div>
        </div>
    )
}

export default HomePage;