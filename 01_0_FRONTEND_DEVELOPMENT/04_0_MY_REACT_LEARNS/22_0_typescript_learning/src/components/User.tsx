import React from "react";

interface UserProps {
  name: string;
  age: number;
  isStudent: boolean;
}

const User = (props: UserProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.isStudent.toString()}</h2>
    </div>
  );
};

export default User;