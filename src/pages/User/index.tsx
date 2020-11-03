import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import { Container } from './styles';

interface IRouteParamsProps {
  id: string | undefined;
}

interface IUserProps {
  id: number;
  name: string;
  email: string;
}

const User: React.FC = () => {
  const { id } = useParams<IRouteParamsProps>();
  const [user, setUser] = useState({} as IUserProps);

  useEffect(() => {
    const requestUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const userData = await response.json();

      setUser(userData);
    };
    requestUser();
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Usuários</title>
        <meta name="description" content="Usuários cadastrados" />
      </Helmet>

      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
    </>
  );
};

export default User;
