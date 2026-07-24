import React from "react";
import Person from "./components/Person";
import Product from "./components/Product";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Person name="Krishna" age={20} />
      <Product name="I-Phone" price={30000} />
      <Card>
        <h1>My Card 1</h1>
        <p>This is some content for card 1</p>
      </Card>
      <Card>
        <h1>My Card 2</h1>
        <p>This is some content for card 2</p>
      </Card>
      <Card>
        <h1>My Card 3</h1>
        <p>This is some content for card 3</p>
      </Card>
    </div>
  );
};

export default App;
