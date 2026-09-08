import { useState } from "react";
import UseContext from "./UserContext";

const UserProvider = ({ children }) => {

  const [user, setUser] = useState({
    name: "John Deo"
  });

  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    <UseContext.Provider value={{ user, updateUser }}>
      {children}
    </UseContext.Provider>
  );
};

export default UserProvider;