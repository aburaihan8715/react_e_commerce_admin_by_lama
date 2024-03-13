import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user?.currentUser);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  if (user) {
    return <Navigate to={`/`} />;
  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
        Login
      </button>
    </div>
  );
};

export default Login;
