import './styles/App.css';
import MainContainer from './components/MainContainer';
import Navpanel from './components/Navbar';

const App = () => (
  <>
    <header>
      <Navpanel />
    </header>
    <MainContainer />
  </>
);

export default App;
