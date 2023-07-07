import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TopBar from './shared/components/topBar/TopBar';
import Footer from './shared/components/footer/Footer';
import Home  from './pages/home/Home';
import Maintenance from './pages/maintenance/Maintenance';
import BackToTopButton from './shared/components/backToTop/BackToTop';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import News from './pages/news/News';
import NewsDetail from './pages/news/NewsDetail';
import Ranks from './pages/ranks/Ranks';
import RankDetail from './pages/ranks/RankDetail';
import Provinces from './pages/provinces/Provinces';
import ProvinceDetail from './pages/provinces/ProvinceDetail';
import Forms from './pages/forms/Forms';
import FormDetail from './pages/forms/FormDetail';
import Calendars from './pages/calendars/Calendars';
import CalendarDetail from './pages/calendars/CalendarDetail';
import Videos from './pages/videos/Videos';
import VideoDetail from './pages/videos/VideoDetail';
import Reports from './pages/reports/Reports';
import ReportDetail from './pages/reports/ReportDetail';
import Committees from './pages/Committees/Committees';
import CommitteeDetail from './pages/Committees/CommitteeDetail';
import Clubs from './pages/clubs/Clubs';
import ClubDetail from './pages/clubs/ClubDetail';
import Matches from './pages/matches/Matches';
import MatchDetail from './pages/matches/MatchDetail';
import SearchResult from './shared/components/searchResult/SearchResult';
import NotFound from './pages/notFound/NotFound';

import { Container } from "react-bootstrap";

import './App.scss';

const App = () => {
  const location = useLocation();
  const key = location.pathname + location.search;
  const isMainPage = location.pathname === '/' ? 'direction-rtl-container' : '';

  return (
    <div className="container-iritf">
      <div className="content-wrapper-iritf">
        <TopBar />
        <Container id="contentContainer" fluid className={`mt-3 mb-4 bg-white content-container-iritf ${isMainPage}`}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/news' element={<News key={key}/>}></Route>
            <Route path='/news/:id' element={<NewsDetail key={key}/>}></Route>
            <Route path='/news/category/:id' element={<News key={key}/>}></Route>
            <Route path='/ranks' element={<Ranks key={key}/>}></Route>
            <Route path='/ranks/:id' element={<RankDetail key={key}/>}></Route>
            <Route path='/ranks/category/:id' element={<Ranks key={key}/>}></Route>
            <Route path='/provinces' element={<Provinces/>}></Route>
            <Route path='/provinces/:id' element={<ProvinceDetail/>}></Route>
            <Route path='/calendars' element={<Calendars key={key}/>}></Route>
            <Route path='/calendars/:id' element={<CalendarDetail key={key}/>}></Route>
            <Route path='/calendars/category/:id' element={<Calendars key={key}/>}></Route>
            <Route path='/videos' element={<Videos key={key}/>}></Route>
            <Route path='/videos/:id' element={<VideoDetail key={key}/>}></Route>
            <Route path='/videos/category/:id' element={<Videos key={key}/>}></Route>
            <Route path='/forms' element={<Forms key={key}/>}></Route>
            <Route path='/forms/:id' element={<FormDetail key={key}/>}></Route>
            <Route path='/forms/category/:id' element={<Forms key={key}/>}></Route>
            <Route path='/reports' element={<Reports key={key}/>}></Route>
            <Route path='/reports/:id' element={<ReportDetail key={key}/>}></Route>
            <Route path='/reports/category/:id' element={<Reports key={key}/>}></Route>
            <Route path='/committees' element={<Committees key={key}/>}></Route>
            <Route path='/committees/:id' element={<CommitteeDetail key={key}/>}></Route>
            <Route path='/committees/category/:id' element={<Committees key={key}/>}></Route>
            <Route path='/clubs' element={<Clubs key={key}/>}></Route>
            <Route path='/clubs/:id' element={<ClubDetail key={key}/>}></Route>
            <Route path='/clubs/category/:id' element={<Clubs key={key}/>}></Route>
            <Route path='/matches' element={<Matches key={key}/>}></Route>
            <Route path='/matches/:id' element={<MatchDetail key={key}/>}></Route>
            <Route path='/matches/category/:id' element={<Matches key={key}/>}></Route>
            <Route path='/search/:id' element={<SearchResult key={key}/>}></Route>
            <Route path='/contact-us' element={<Contact/>}></Route>
            <Route path='/about-us' element={<About/>}></Route>
            <Route path='/under-maintenance' element={<Maintenance />}></Route>
            <Route path='/not-found' element={<NotFound />}></Route>
            <Route path='/*' element={<Navigate to="/not-found"/>}></Route>
          </Routes>
        </Container>
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default App;
