import React, { useState } from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
// import Button from "./components/Button";
// import UserInfo from "./components/UserInfo";
// import AdminInfo from "./components/AdminInfo";
// import type { Info, AdminInfoList } from "./types";

//   const user: Info = {
//     id: 1,
//     name: "John Deo",
//     email: "kkrishna.bga@gmail.com",
//   };

//   const admin: AdminInfoList = {
//     id: 2,
//     name: "Jame Smith",
//     email: "iamrealkkd@gmail.com",
//     role: "Admin",
//     lastLogin: new Date(),
//   };

 // const [count, setCount] = useState<number>(0);
  // const increment = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
const App = () => {
 

  return (
    <div>
      <Form/>
    </div>
  );
};

export default App;
