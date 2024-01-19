import { Link } from "react-router-dom";

const Random = () => {
  return (
    <>
      <Link to="." relative="path" className="back-forth">
        Home
      </Link>
      <br />
    </>
  );
};

export default Random;
