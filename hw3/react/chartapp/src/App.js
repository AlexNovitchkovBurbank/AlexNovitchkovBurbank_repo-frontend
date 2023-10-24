import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './home';
import SearchComponent from './search';
import HousesComponent from './houses';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <div className='d-flex justify-content-end bg-dark navheight'>
        <Link
          to='/home'
          className='me-4 text-white text-decoration-none align-self-center'
        >
          Home
        </Link>
        <Link
          to='/search'
          className='me-4 text-white text-decoration-none align-self-center'
        >
          Search
        </Link>
        <Link
          to='/houses'
          className='me-4 text-white text-decoration-none align-self-center'
        >
          Houses
        </Link>
      </div>
      <Routes>
        <Route path='/home' element={<HomeComponent />} />
        <Route path='/search' element={<SearchComponent />} />
        <Route path='/houses' element={<HousesComponent />} />
      </Routes>
    </div>
  );
}

export default App;

// https://getbootstrap.com/docs/5.0/getting-started/contents/
// https://getbootstrap.com/docs/5.0/utilities/flex/
