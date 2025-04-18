import posts from '../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';
const HomePage = () =>{
    

    return(
        <div>
            <Search/>
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