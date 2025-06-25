import './PostComponent.css'
import { CollapseComponent } from '../collapse_component/CollapseComponent';


export interface PostProps{
    message: string;
    likes: number;
    author: string;
    dateAndTime: string;
    comments: string[];
}

export function Post({message, likes, author, dateAndTime, comments}: PostProps) {

    return (
        <div className="post">
            <div className="message">
                <h2> {message} </h2>
                <div className="information">
                    <div className="author"> {author} - {dateAndTime} </div>
                    <div className="likes"> {likes} likes </div>
                </div>
            </div>
            <div className="comments"><CollapseComponent headline='Comments' content={comments} /></div>
        </div>
    );
}

