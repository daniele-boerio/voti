import { useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import Password from '../../components/Password/Password';
import './login.scss';
import Card from '../../components/Card/Card';
import { selectLoginLoading, selectLoginUsers } from '../../redux/slices/login/login.selector';
import { getUtente, getUtenti } from '../../redux/sagas/login';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const userList = useAppSelector(selectLoginUsers);
  const loading = useAppSelector(selectLoginLoading);

  useEffect(() => {
    dispatch(getUtenti());
  }, [dispatch]);

  if (loading) return <p>Caricamento utenti...</p>;

  const handleClick = async () => {
    const user = await dispatch(getUtente(username, password));
    if (user) {
      console.log('Login riuscito!');
      navigate(`/home/${user.id}`);
    } else {
      console.log('Login fallito!');
      setErrorMessage('Password non corretta');
    }
  };

  return (
    <div className="loginPage">
      <Card title="Login" className="loginCard">
        <Dropdown
          value={username}
          handleChangeValue={(value: string) => setUsername(value)}
          options={userList ? userList.map((user) => user.name) : []}
          placeholder="Username"
        />
        <Password
          value={password}
          handleChangeValue={(value: string) => setPassword(value)}
          placeholder="Password"
          toggleMask
        />
        <label>{errorMessage}</label>
        <Button
          label="Entra"
          handleClick={handleClick}
          disabled={username.length === 0 || password.length === 0}
        />
      </Card>
    </div>
  );
}

export default Login;
