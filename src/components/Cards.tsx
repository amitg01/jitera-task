import { useState, useEffect, useCallback } from "react";

import Card from "./Card";
import Loader from "../common/Loader";

import { UserProps } from "./User.types";

const Cards = (): JSX.Element => {
  const [users, setUsers] = useState<null | UserProps[]>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getUsers = useCallback(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const CardsContainer = (): JSX.Element => (
    <div className="flex flex-wrap -mx-4">
      {users?.map((user, idx) => (
        <Card key={idx} {...user} />
      ))}
    </div>
  );

  if (loading) return <Loader />;

  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <CardsContainer />
      </div>
    </div>
  );
};

export default Cards;
