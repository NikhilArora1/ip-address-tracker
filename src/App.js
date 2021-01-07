import './App.css';
import Search from './components/Search/Search';
import Details from './components/Details/Details';
import MapRender from './components/MapRender/MapRender';

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/pattern-bg.png)`, backgroundRepeat: 'no-repeat' }}>
      <Search />
      <Details />
      <MapRender />
    </div>
  );
}

export default App;
