import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

interface IUsersProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUsersProps[]>([]);

  useEffect(() => {
    const requestUsers = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const dataUsers = await response.json();

      setUsers(dataUsers);
    };

    requestUsers();
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li
          key={user.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px',
          }}
        >
          <span>{user.username}</span>
          <Link to={`/user/${user.id}`}>Veja mais!</Link>
        </li>
      ))}
    </ul>
  );
};

export default Users;
