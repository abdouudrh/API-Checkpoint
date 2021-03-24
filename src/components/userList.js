import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");

      setUser(result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul className="list" >
      {user.map((item) => (
        <li className="userslist"   key={item.id}>
          <h2 className="name" >name : {item.name} </h2>
          <h4 className="username" >username : {item.username}</h4>
        </li>
      ))}
    </ul>
  );
};

export default UserList;





