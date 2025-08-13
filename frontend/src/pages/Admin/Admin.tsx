import { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import './admin.scss';

function Admin() {
  const [username, setUsername] = useState('');
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Login</h1>
      <Dropdown
        value={username}
        handleChangeValue={(value: string) => setUsername(value)}
        options={[]}
        placeholder="Username"
      />
    </div>
  );
}

export default Admin;
