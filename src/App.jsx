import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SearchBar />} />   
      </Route>
    </Routes>
    </div>
  );
}

export default App;