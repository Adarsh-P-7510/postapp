import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import PostSearch from './components/PostSearch';
import DeletePost from './components/DeletePost';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPost/>}/>
      <Route path='/PostSearch' element={<PostSearch/>}/>
      <Route path='/DeletePost' element={<DeletePost/>}/>
      <Route path='/viewAll' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
