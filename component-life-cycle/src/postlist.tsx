import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: string
}

function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // The empty dependency array ensures this runs only once.

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                     <p>User ID:{post?.userId}</p>
                   <p>Title:{post.title}</p>
                   <p>Body:{post.body}</p>
                    </li>
            ))}
        </ul>
    );
}

export default PostList;