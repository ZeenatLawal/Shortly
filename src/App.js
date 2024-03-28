import './styles/App.css';
import MainContainer from './components/MainContainer';
import Navpanel from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <>
    <header>
      <Navpanel />
    </header>
    <MainContainer />
    <Footer />
  </>
);

export default App;
