import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>User Management Dashboard</h1>
    <nav>
      <Link className='btn btn-primary m-5' to="/">Home</Link>
      <Link className='btn btn-primary '  to="/add">Add User</Link>
    </nav>
  </header>
);

export default Header;
