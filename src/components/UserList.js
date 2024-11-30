import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/api';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then((response) => setUsers(response.data))
      .catch((err) => setError('Failed to fetch users.'));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch(() => setError('Failed to delete user.'));
  };

  if (error) return <p>{error}</p>;

  return (
    <div>
      <table className="table" style={{maxWidth:"900px"}}>
        <thead>
          <tr className='text-center'>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th className='text-center'>Email</th>
            <th className='text-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className='text-center' key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
                <Link
                  className="btn btn-info"
                  to={`/edit/${user.id}`}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
