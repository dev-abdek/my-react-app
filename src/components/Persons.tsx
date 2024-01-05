import { useEffect, useState } from "react";

const Person = () => {
  const [personId, setPersonId] = useState(1);
  const [names, setNames] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${personId}`)
      .then((res) => res.json())
      .then((data) => setNames(data));
  }, [personId]);

  console.log(names);

  const handleNextPersonClick = () => {
    setPersonId((prevPerson) => prevPerson + 1);
  };
  return (
    <div>
      <p>{names.name}</p>
      <button onClick={handleNextPersonClick} disabled={personId >= 10}>
        Get Next Person
      </button>
    </div>
  );
};

export default Person;
