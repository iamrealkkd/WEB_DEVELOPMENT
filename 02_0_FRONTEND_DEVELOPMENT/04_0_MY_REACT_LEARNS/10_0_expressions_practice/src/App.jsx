import Productinfo from "./components/Productinfo";

const App = () => {
  const greet = "Hello";
  const date  = new Date()

  return (
    <div>
      <h1>{greet}</h1>
      <p>Date: {date.getDate()}</p>
      <Productinfo/>
    </div>
  );
};

export default App;
