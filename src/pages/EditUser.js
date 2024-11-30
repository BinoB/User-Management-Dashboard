import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { getUsers } from '../services/api';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUsers().then((res) => {
      const existingUser = res.data.find((u) => u.id === parseInt(id, 10));
      setUser(existingUser);
    });
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return <UserForm user={user} onSave={() => navigate('/')} />;
};

export default EditUser;
