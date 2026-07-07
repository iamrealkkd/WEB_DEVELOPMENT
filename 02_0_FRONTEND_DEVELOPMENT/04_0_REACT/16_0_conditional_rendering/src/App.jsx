// const ValidPassword = () => <h1>Valid Password</h1>;

// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) =>
//   isValid ? <ValidPassword /> : <InvalidPassword />;

// const App = () => {
//   return (
//     <section>
//       <Password isValid={true} />
//     </section>
//   );
// };

// export default App;
import React from "react";

const Cart = () => {
  const items = ["Wireless", "Earbuds", "Phone", "SSD"];

  return (
    <div>
      <h1>Cart 🛒</h1>

      {items.length > 0 && <h2>You Have {items.length} items in your cart</h2>}

      <h4>Products</h4>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return <Cart />;
};

export default App;



