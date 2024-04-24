import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/user')
    .then((response) => response.json())
    .then((data) => setUsers(data.users))
    .catch((error) => console.error(error.message));
  }, []);

  return (
    <main>
      <div>
        {
          users.map((user) => (
            <section key={ user.id }>
              <img src={ user.image } alt={ `${user.firstName} photo` } />
              <p>{ `${user.firstName} ${user.lastName}` }</p>
            </section>
          ))
        }
      </div>
    </main>
  );
}
