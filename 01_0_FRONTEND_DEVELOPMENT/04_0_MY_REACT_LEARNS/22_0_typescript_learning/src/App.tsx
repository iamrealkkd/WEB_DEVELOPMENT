import React from "react";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <User name="Alex" age={20} isStudent={true} />
    </div>
  );
};

export default App;
