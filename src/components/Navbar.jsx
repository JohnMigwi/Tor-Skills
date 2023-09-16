import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <h1 className="nav-item">Search</h1> 
        <div className="link">
        <button className="nav-link"><NavLink to="/" end >PEOPLE BY NAME</NavLink></button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;