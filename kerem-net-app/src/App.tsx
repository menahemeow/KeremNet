import { Post } from './components/post_component/PostComponent';
import './App.css';

let postComments = ['woowww it changed my life', 'I love you zoey', 'Return to the course Zoey!!!']

function App() {
  return (
    <Post postMessage='KereMitavrer Bahutz' likes={66} author='zoey' dateAndTime={new Date()} comments={postComments}></Post>
  );
}

export default App;
