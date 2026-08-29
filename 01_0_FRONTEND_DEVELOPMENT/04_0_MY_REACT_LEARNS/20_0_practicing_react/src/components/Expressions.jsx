const Expressions = () => {
  const name = "Krishna";
  const multi = (a, b) => a * b;
  const specialClass = "simple-class";
  return (
    <div>
      <p>2 + 2 = {2 + 2}</p>
      <p>{name}</p>
      <p>My Friends List:{["Krishna", "Nikhlesh", "Rathore"]}</p>
      <p>2 * 2 = {multi(2, 2)}</p>
      <p className={specialClass}>This is special class</p>
    </div>
  ); 
};

export default Expressions;
