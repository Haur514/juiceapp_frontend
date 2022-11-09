import React, {useState, useEffect} from 'react'

let protocol = "http"

const Fetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost/backend/history`, {
            method: 'GET',
            mode: 'cors'
        })
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])

    return (
        <div>
            <ul>
                {posts.map(post => 
                    <div>{post.price}</div>
                    
                    
                )}
            </ul>

        </div>
    )
}

export default Fetch;