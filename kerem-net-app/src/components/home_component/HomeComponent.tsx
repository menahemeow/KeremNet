
import { PostProps, Post} from "../post_component/PostComponent";

const PostStyle = {
    marginBottom:'1%',
}

interface HomeProps {
    posts: PostProps[];
}


export function Home({posts}: HomeProps) {

    return (
        <ul>
            {posts.map((props: PostProps, index: number) => (
                <div style={PostStyle} key={index}> <Post message={props.message} likes={props.likes} 
                author={props.author} dateAndTime={props.dateAndTime} comments={props.comments}></Post></div>
            ))}
        </ul>
    );
}
