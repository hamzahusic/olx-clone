import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from "./pages/userPage/UserPage";
import AdminPage from "./pages/adminPage/AdminPage";
import NotFound from "./pages/404/NotFound";
import ArticlePage from './pages/userPage/ArticlePage';
import SearchArticles from './pages/userPage/SearchArticles';
import LoginPage from './pages/userPage/LoginPage';
import RegisterPage from './pages/userPage/RegisterPage';
import CarArticle from './pages/AddArticle/ArticleCars/CarArticle';
import UserActivePosts from './pages/userPage/UserProfilePosts/ActivePosts';
import UserClosedPosts from './pages/userPage/UserProfilePosts/ClosedPosts';
import UserImpressionsPost from './pages/userPage/UserProfilePosts/ImpressionsPosts';
import RealState from './pages/AddArticle/RealEstate/RealEstate';

function App() {
  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<UserPage/>}/>
          <Route path='/article/:id' element={<ArticlePage/>}/>
          <Route path='/search/:inputValue' element={<SearchArticles/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/profile/my/active' element={<UserActivePosts/>}/>
          <Route path='/profile/my/closed' element={<UserClosedPosts/>}/>
          <Route path='/profile/my/impressions' element={<UserImpressionsPost/>}/>
          <Route path='/publish/article/cars' element={<CarArticle/>}/>
          <Route path='/publish/article/realestate' element={<RealState/>}/>
          
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
