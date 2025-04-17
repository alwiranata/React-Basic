import posts from '../posts.json';

const HomePage = () =>{
    return(
        <div>
            <h1>Home Page</h1>
            {posts.map((post)=>{
                return(
                    <div>
                        <h2>{post.Title}</h2>
                        <small>{post.Date}</small>
                        <p>{post.Description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage;