const Props = () => {
  return <User 
  name = "Krishna"
  age = {22}
  isMarried = {false}
  hobbies = {["Coding", "Reading", "Travelling"]}/>;
};

const User = (props) => {
 return <section>
    <h1>Name: {props.name}</h1>
    <h1>Age: {props.age}</h1>
    <h1>Marital Status: {props.isMarried}</h1>
    <h1>Hobbies: {props.hobbies}</h1>
 </section>
}

export default Props