import React from 'react'
import "./index.css"

// const App = () => {
//     const styles = { color: "white", backgroundColor: "teal", padding: "2rem" };
//   return (
//     <section>
//         <h1 style={{color:'white', backgroundColor: 'teal', padding: '2rem'}}>
//             Inline Style
//         </h1>
//     </section>
//   )
// }

// export default App
// const App = () => {
//   return (
//     <section>
//       <h1>Seperate file for styling</h1>
//     </section>
//   );
// };

// export default App;

import { FaCartArrowDown } from "react-icons/fa";
import "./index.css";

const App = () => {
  return (
    <section className="container">
      <FaCartArrowDown className="cart" />
    </section>
  );
};

export default App;
