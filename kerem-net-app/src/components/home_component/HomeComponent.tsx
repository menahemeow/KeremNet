
import { PostProps, Post} from "../post_component/PostComponent";

interface HomeProps {
    posts: PostProps[];
}


export function Home({posts}: HomeProps) {

    return (
        <ul className="Posts">
                {posts.map((props: PostProps, index: number) => (
                    <li key={index}> <Post message={props.message} likes={props.likes} 
                    author={props.author} dateAndTime={props.dateAndTime} comments={props.comments}></Post></li>
                ))}
            </ul>
    );
}
