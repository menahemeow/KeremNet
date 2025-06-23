import './PostComponent.css'


export interface PostProps{
    postMessage: string;
    likes: number;
    author: string;
    dateAndTime: Date;
    comments: string[];
}

export function Post(props: PostProps) {

    console.log(props.comments)

    return (
        <div className="Post">
            <div className="Message">
                <h2> {props.postMessage} </h2>
            </div>
            <div className="Information">
                <div className='Author'> {props.author} - {props.dateAndTime.toDateString()} </div>
                <div className='Likes'> {props.likes} likes </div>
            </div>
            <ul className="Comments">
                {props.comments.map((comment: string, index: number) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
}

