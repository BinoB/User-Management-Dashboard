import { useState } from 'react';
import { addUser, editUser } from '../services/api';

const UserForm = ({ user = {}, onSave }) => {
  const [formData, setFormData] = useState({
    name: user.name || '',
    username: user.username || '',
    email: user.email || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const saveAction = user.id ? editUser(user.id, formData) : addUser(formData);
    saveAction.then(onSave).catch(() => alert('Error saving user.'));
  };

  return (
    <form className=" d-flex" style={{maxWidth:"700px"}} onSubmit={handleSubmit}>
      <input
      className='form-control me-3'
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
       className='form-control me-3'
        type="text"
        placeholder="User Name"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
       className='form-control me-3'
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      
      <button className='btn btn-primary' type="submit">Save</button>
    </form>
  );
};

export default UserForm;
