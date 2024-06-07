import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import PostSearch from './components/PostSearch';
import DeletePost from './components/DeletePost';

function App() {
  return (
    <div>
      <AddPost/>
      <PostSearch/>
      <DeletePost/>
      
    </div>
  );
}

export default App;
