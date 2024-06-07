import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import postStore from "../stores/postStore";
import { getPosts } from "../actions/postActions";

export default function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postStore.addChangeListener(onChange)
        if (posts.length === 0) {
            getPosts();
        }
        return () => postStore.removeChangeListener(onChange);
    },[]);

    function onChange() {
        setPosts(postStore.getPosts());
    }

    return(
        <PostList posts={posts}/>
    );
}