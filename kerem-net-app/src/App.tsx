import { PostProps } from './components/post_component/PostComponent';
import { Home } from './components/home_component/HomeComponent';
import './App.css';

let postComments = ['woowww it changed my life', 'I love you zoey', 'Return to the course Zoey!!!\nLiran misses']

let onePost: PostProps ={message:'You are my fire\nThe one, desire\nBelieve when I say\nI want it that way', likes:666, author:'backstreet zoey', dateAndTime:new Date(), comments:postComments}

let twoPost: PostProps ={message:'When you were young and your heart was an open book\nyou used to say "Live and let live"\nBut if this ever changing world in which we live in\nMakes you give in and cry\n\nSay "Live and let die"', likes:6666, author:'guns & zoey', dateAndTime:new Date(), comments:postComments}

let threePost: PostProps ={message:"שאף בן *ונה לא יגיד ש'תה לא יודע\nשאף חרטטן לא יגיד ש'תה לא יכול\nשאף מנוול לא יגיד שאין לך סוואגה", likes:66, author:'nechi zoey', dateAndTime:new Date(), comments:postComments}


let posts: PostProps[] = [onePost, twoPost, threePost];

function App() {
  return (
    <Home posts={[...posts]}></Home>
  );
}

export default App;
