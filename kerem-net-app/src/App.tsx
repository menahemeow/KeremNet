import { PostProps } from './components/post_component/PostComponent';
import { Home } from './components/home_component/HomeComponent';
import './App.css';

let postComments = ['woowww it changed my life', 'I love you zoey', 'Return to the course Zoey!!!\nLiran misses']

let onePost: PostProps ={message:'You are my fire\nThe one, desire\nBelieve when I say\nI want it that way', likes:66, author:'zoey', dateAndTime:new Date(), comments:postComments}

let posts: PostProps[] = [onePost];

function App() {
  return (
    <Home posts={[...posts]}></Home>
  );
}

export default App;
