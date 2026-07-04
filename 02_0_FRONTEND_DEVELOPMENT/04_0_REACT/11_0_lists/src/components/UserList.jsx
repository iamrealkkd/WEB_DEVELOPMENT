const UserList = () => {
  const users = [
    {id: 1, name: "Krishna", age: 21},
    {id: 2, name: "Nikhlesh", age: 21},
    {id: 3, name: "Rathore", age: 23},
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
        </div>
      ))}
    </div>
  );
};

export default UserList;
