import { PostProps } from './components/post_component/PostComponent';
import { Home } from './components/home_component/HomeComponent';
import './App.css';

let postComments = ['woowww it changed my life', 'I love you zoey', 'Return to the course Zoey!!!\nLiran misses']

let onePost: PostProps ={message:'You are my fire\nThe one, desire\nBelieve when I say\nI want it that way', likes:66, author:'zoey', dateAndTime:new Date(), comments:postComments}

let twoPost: PostProps ={message:'When you were young and your heart was an open book\nyou used to say "Live and let live"\nBut if this ever changing world in which we live in\nMakes you give in and cry\n\nSay "Live and let die"', likes:666, author:'zoey', dateAndTime:new Date(), comments:postComments}

let posts: PostProps[] = [onePost, twoPost];

function App() {
  return (
    <Home posts={[...posts]}></Home>
  );
}

export default App;
