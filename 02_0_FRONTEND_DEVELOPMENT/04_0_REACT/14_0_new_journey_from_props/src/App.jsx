import React from 'react'

const App = () => {
  return (
    <User
      img="https://images.pexels.com/photos/33607720/pexels-photo-33607720.jpeg"
      name="Girly Dev"
      age={22}
      isMarried={false}
      hobbies={["Coding", "Reading", "Sleeping"]}
    />
  );
  
}

// const User = (props) => {

//      return (
//        <section>
//          <img
//            src={props.img}
//            alt={props.name}
//            style={{
//              width: "200px",
//              height: "200px",
//              objectFit: "cover",
//              borderRadius: "10px",
//            }}
//          />
//          <h1>Name: {props.name}</h1>
//          <h2>Age: {props.age}</h2>
//          <h3>isMarried: {props.isMarried.toString()}</h3>
//          <h4>Hobbies: {props.hobbies}</h4>
//        </section>
//      );
// }
const User = ({img, name, age, isMarried, hobbies}) => {
  return (
    <section>
      <img
        src={img}
        alt={name}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>isMarried: {isMarried.toString()}</h3>
      <h4>Hobbies: {hobbies}</h4>
    </section>
  );
};

export default App
