import { Home } from './components/home_component/HomeComponent';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("/api/posts")
    .then((res) => res.json())
    .then((data)=>{
      setPosts(data)
    });
  }, []);

  return (
    <Home posts={[...posts]}></Home>
  );
}

export default App;
