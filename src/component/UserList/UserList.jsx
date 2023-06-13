import { useState, useEffect } from "react";

import UserItem from "./UserItem/UserItem";
import { getUsers } from "../../api/user";

const UserList = ({currentPage, countUsers}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(currentPage, countUsers).then(res => setUsers(pre => [...pre, ...res.data.users]));
  }, [currentPage, countUsers])

  return (
    <>
      {users.map((user) => (
        <UserItem key={user.id} email={user.email} name={user.name} phone={user.phone} photo={user.photo} position={user.position} /> 
      ))} 
    </>
  )
}

export default UserList;