import './App.css';
import {Routes,Route} from 'react-router-dom'
import Counter from "./Counter";
import { AuthProvider } from './routes/auth';
import Navbar from './shared/navbar';
import Home from './components/home';
import Footer from './shared/footer';
import Projects from './components/projects';
import Vision from './components/vision';
import Team from './components/team';
import Blog from './components/blog-page/blog';
import NoMatch from './components/nomatch';
import Blogdetails from './components/blog-page/blogdetails';
function App() {

  return (
    <AuthProvider>
      <Navbar/>
        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/skept' element={<Counter/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/vision' element={<Vision/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path="/blog/:id" element={<Blogdetails/>} />
          <Route path='*' element={<NoMatch/>}></Route> 
      </Routes>
      <Footer/>
    </AuthProvider>
  );
}
export default App;
