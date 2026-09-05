import {useEffect, useState} from "react";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function GithubProfile() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
    }

    GithubProfile();
  }, []);

  return (
    <div>
      <h1>Github User</h1>

      <div>
        {users.map((user) => (
          <img key={user.id} src={user.avatar_url} alt={user.login} />
        ))}
      </div>
    </div>
  );
};

export default UseEffect;
