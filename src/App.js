import { Routes, Route, Navigate } from 'react-router-dom';
import TopBar from './shared/components/topBar/TopBar';
import Footer from './shared/components/footer/Footer';
import Home  from './pages/home/Home';
import Maintenance from './pages/maintenance/Maintenance';
import BackToTopButton from './shared/components/backToTop/BackToTop';

import './App.scss';

const App = () => {
  return (
    <div className="container-iritf">
      <div className="content-wrapper-iritf">
        <TopBar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/under-maintenance' element={<Maintenance />}></Route>
          <Route path='/*' element={<Navigate to="/under-maintenance"/>}></Route>
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default App;
