const App = () => {
  const myName = "Krishna";
  const multi = (a, b) => a * b;
  const specialClass = 'anything-I-want'

  return (
    <section>
      <p>2 + 2 = {2 + 2}</p>
      <h1>myName is {myName}</h1>
      <p>My Friend List: {["Alex, ", "John, ", "Krishna, ", "Champu, "]}</p>
      <p>2 * 2 = {multi(2, 2)}</p>
      <p className={specialClass}>This is a special class</p>
    </section>
  );
};

export default App;
