import './PostComponent.css'


interface props{
    postMessage: string;
    likes: number;
    author: string;
    dateAndTime: Date;
    comments: string[];
}

export function Post(prop: props) {
    return (
        <div className="Post">
            <div className="Message">
                <h2> {prop.postMessage} </h2>
            </div>
            <div className="Information">
                <div className='Author'> {prop.author} - {prop.dateAndTime.toDateString()} </div>
                <div className='Likes'> {prop.likes} likes </div>
            </div>
            <ul className="Comments">
                {prop.comments.map((comment: string, index: number) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
}

