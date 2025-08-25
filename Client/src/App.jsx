import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SignInPage from './page/signin/index';
import LandPage from './page/land/index';
import SignUpPage from './page/signup/index';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ForgotPasswordPage from './page/auth/forgot';

function App() {
  const ShowNavBar = () => {
    const location = useLocation();
    const locations = ["/signin", "/signup", "/forgot"];
    const hideNavBar = locations.includes(location.pathname);
    return !hideNavBar ? <NavBar /> : null;
  }
  return (
    <>
    <BrowserRouter>
    <ShowNavBar />
    <Routes>

      <Route path='/' element={<LandPage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/forgot' element={<ForgotPasswordPage />}/>

    </Routes>

    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
