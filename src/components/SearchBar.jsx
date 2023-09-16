import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Result from './Result';
import { searchPeople } from '../redux/PeopleSlice';



function SearchBar() {
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();
  const searchQuery = useRef(null);
  const DataQuery = useRef(null);


  const handleSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    setShowSearch(true);
    dispatch(searchPeople(newQuery));
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchQuery.current && 
        !searchQuery.current.contains(event.target) && 
        DataQuery.current && 
        !DataQuery.current.contains(event.target)
        ) {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const { people } = useSelector((store) => store.people);

  
  return (
    <div className="search">
      <section className="search-query" ref={searchQuery}>
        <input className="search-input" type="text" value={query} onChange={handleSearch} placeholder="Search..." />
      </section>
      {showSearch && (
        <section className="data-query" ref={DataQuery}>
          { people.map((user) => (
            <div key={user.Id} className="person-info" >
              <a className="person" href={`https://torre.ai/${user.username}`}>
                <Result user={user}/>
              </a>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default SearchBar;