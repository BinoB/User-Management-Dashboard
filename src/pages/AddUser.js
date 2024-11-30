import UserForm from '../components/UserForm';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const navigate = useNavigate();
  return <UserForm onSave={() => navigate('/')} />;
};

export default AddUser;
