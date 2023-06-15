import { Routes, Route } from 'react-router-dom';
import TopBar from './shared/components/topBar/TopBar';
import Footer from './shared/components/footer/Footer';
import Home  from './pages/home/Home';
import BackToTopButton from './shared/components/backToTop/BackToTop';

import './App.scss';

const App = () => {
  return (
    <div className="container-iritf">
      <div className="content-wrapper-iritf">
        <TopBar />
        <Routes>
          <Route path='/' element={< Home/>}></Route>
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default App;
