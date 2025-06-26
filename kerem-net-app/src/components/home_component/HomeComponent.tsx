import { useEffect, useState } from "react";
import { PostProps, Post} from "../post_component/PostComponent";
import { Outlet } from "react-router-dom";

const PostStyle: React.CSSProperties = {
    marginBottom:'1%',
}


export function Home() {

    const [posts, setPosts] = useState<PostProps[]>([])
    const [error, setError] = useState<string>("")
    
    useEffect(() => {
        fetch("/api/posts")
        .then((res) => res.json())
        .then((data)=>{
        setPosts(data)
        }).catch((e: unknown) => {
            setError(`${e}`)
        })
    }, []);

    if(error !== ""){
        return <>{error}</>
    }
    else if(posts.length === 0){
        return <>No posts</>
    }

    return (
        <ul>
            {posts.map((props: PostProps, index: number) => (
                <div style={PostStyle} key={index}> <Post {...props}></Post></div>
            ))}
        </ul>
    );
}
