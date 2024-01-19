import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const PersonDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data.users));
  }, [id]);

  return (
    <section>
      {user ? (
        <div>
          <Link to=".." relative="path" className="back-forth">
            Back to Names
          </Link>
          <h3>
            {user.firstName} {user.lastName} is a {user.description}
          </h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <nav className="person-nav">
        <ul>
          <NavLink to=".">Details</NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
};

export default PersonDetails;
