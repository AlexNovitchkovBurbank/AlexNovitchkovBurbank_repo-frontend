import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './home';
import SearchComponent from './search';
import HousesComponent from './houses';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const body = document.querySelector("body");
  const noScriptTag = document.querySelector("noscript");
  body.removeChild(noScriptTag);

  return (
    <div className='App'>
      <header className='d-flex justify-content-end bg-dark navheight'>
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
      </header>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/home' element={<HomeComponent />} />
        <Route path='/search' element={<SearchComponent />} />
        <Route path='/houses' element={<HousesComponent />} />
      </Routes>
    </div>
  );
}

export default App;

// I used https://getbootstrap.com/docs/5.0/getting-started/contents/ to install bootstrap
// I used https://getbootstrap.com/docs/5.0/utilities/flex/ to understand flex
// I used https://dequeuniversity.com/rules/axe/4.8/region?application=axeAPI to structure elements
// I used https://stackoverflow.com/questions/30877378/remove-a-noscript-tag-inside-the-head-tag-with-javascript to remove the noscript tag