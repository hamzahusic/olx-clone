import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from "./pages/userPage/UserPage";
import AdminPage from "./pages/adminPage/AdminPage";
import NotFound from "./pages/404/NotFound";
import ArticlePage from './pages/userPage/ArticlePage';
import SearchArticles from './pages/userPage/SearchArticles';

function App() {
  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<UserPage/>}/>
          <Route path='/article/:id' element={<ArticlePage/>}/>
          <Route path='/search/:inputValue' element={<SearchArticles/>}/>
          <Route path="/admin" element={<AdminPage/>}/>

          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
