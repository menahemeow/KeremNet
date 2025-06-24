import './PostComponent.css'
import { CollapseComponent } from '../collapse_component/CollapseComponent';


export interface PostProps{
    postMessage: string;
    likes: number;
    author: string;
    dateAndTime: Date;
    comments: string[];
}

export function Post(props: PostProps) {

    return (
        <div className="Post">
            <div className="Message">
                <h2> {props.postMessage} </h2>
                <div className="Information">
                    <div className='Author'> {props.author} - {props.dateAndTime.toDateString()} </div>
                    <div className='Likes'> {props.likes} likes </div>
                </div>
            </div>
            <div className='Comments'><CollapseComponent headline='Comments' content={props.comments} /></div>
        </div>
    );
}

