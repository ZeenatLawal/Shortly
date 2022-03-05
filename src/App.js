import './styles/App.css';
import MainContainer from './components/MainContainer';
import Navpanel from './components/Navbar';

const App = () => (
  <>
    <header>
      <Navpanel />
    </header>
    <div>
      <h1>More than just shorter links</h1>
      <MainContainer />
    </div>

  </>
);

export default App;
