
interface props{
    postMessage: string;
    likes: number;
    author: string;
    dateAndTime: Date;
    comments: string[];
}

export function Post(prop: props) {
    return (
        <>
            <div>
                <h2> {prop.postMessage} </h2>
            </div>
            <div>
                <> {prop.author} - {prop.dateAndTime.toDateString()} </>
                <> {prop.likes} likes </>
            </div>
            <ul>
                {prop.comments.map((comment: string, index: number) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </>
    );
}

