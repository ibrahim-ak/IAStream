import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SignInPage from './page/auth/signin/index';
import LandPage from './page/land/index';
import SignUpPage from './page/auth/signup/index';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import ForgotPasswordPage from './page/auth/forgot';

function App() {
  const ShowNavBar = () => {
    const location = useLocation();
    const locations = ["/auth/signin", "/auth/signup", "/auth/forgot"];
    const hideNavBar = locations.includes(location.pathname);
    return !hideNavBar ? <NavBar /> : null;
  }
  return (
    <>
    <BrowserRouter>
    <ShowNavBar />
    <Routes>

      <Route path='/' element={<LandPage />} />
      <Route path='/auth/signin' element={<SignInPage />} />
      <Route path='/auth/signup' element={<SignUpPage />} />
      <Route path='/auth/forgot' element={<ForgotPasswordPage />}/>

    </Routes>

    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
