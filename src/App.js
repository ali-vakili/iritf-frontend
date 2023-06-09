import TopBar from './shared/components/topBar/TopBar';
import Footer from './shared/components/footer/Footer';

import './App.scss';

const App = () => {
  return (
    <div className="container-iritf">
      <div className="content-wrapper-iritf">
        <TopBar />  
        <Footer />
      </div>
    </div>
  );
}

export default App;
