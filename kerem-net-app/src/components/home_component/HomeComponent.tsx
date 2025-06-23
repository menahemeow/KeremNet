
import { PostProps, Post} from "../post_component/PostComponent";

interface HomeProps {
    Posts: PostProps[];
}


export function Home(props: HomeProps) {

    return (
        <ul className="Posts">
                {props.Posts.map((props: PostProps, index: number) => (
                    <li key={index}> <Post postMessage={props.postMessage} likes={props.likes} 
                    author={props.author} dateAndTime={props.dateAndTime} comments={props.comments}></Post></li>
                ))}
            </ul>
    );
}
