import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TopBar from './shared/components/topBar/TopBar';
import Footer from './shared/components/footer/Footer';
import Home  from './pages/home/Home';
import Maintenance from './pages/maintenance/Maintenance';
import BackToTopButton from './shared/components/backToTop/BackToTop';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import News from './pages/news/News';
import Ranks from './pages/ranks/Ranks';

import { Container } from "react-bootstrap";

import './App.scss';

const App = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/' ? 'direction-rtl-container' : '';

  return (
    <div className="container-iritf">
      <div className="content-wrapper-iritf">
        <TopBar />
        <Container id="contentContainer" fluid className={`mt-3 mb-4 bg-white content-container-iritf ${isMainPage}`}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/news' element={<News/>}></Route>
            <Route path='/news/category/' element={<Home/>}></Route>
            <Route path='/matches' element={<Home/>}></Route>
            <Route path='/ranks' element={<Ranks/>}></Route>
            <Route path='/provinces' element={<Home/>}></Route>
            <Route path='/calendars' element={<Home/>}></Route>
            <Route path='/forms' element={<Home/>}></Route>
            <Route path='/reports' element={<Home/>}></Route>
            <Route path='/contact-us' element={<Contact/>}></Route>
            <Route path='/about-us' element={<About/>}></Route>
            <Route path='/under-maintenance' element={<Maintenance />}></Route>
            <Route path='/*' element={<Navigate to="/under-maintenance"/>}></Route>
          </Routes>
        </Container>
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default App;
