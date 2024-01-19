import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Person = () => {
  const [users, setUsers] = useState([]);

  const personStyle = {
    textDecoration: "none",
    marginLeft: 10,
    lineHeight: 2.3,
  };

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  const listUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`/person/${user.id}`} style={personStyle}>
        {user.firstName} {user.lastName}
      </Link>
    </li>
  ));

  return (
    <>
      <Link to=".." className="back-forth">
        Home
      </Link>
      <ul>{listUsers}</ul>
    </>
  );
};

export default Person;
