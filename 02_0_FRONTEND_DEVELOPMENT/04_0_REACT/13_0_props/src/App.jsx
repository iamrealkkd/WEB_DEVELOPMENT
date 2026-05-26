const App = () => {
  return (
    <User
      img="https://t3.ftcdn.net/jpg/19/88/58/26/240_F_1988582688_Xv5682XqmmNFiFYtpAt4csOw2kYUORlQ.jpg"
      name="Krishna"
      age={22}
      isChinaar={false}
      hobbies={["Coding", "Reading", "Playing Chesss"]}
    />
  );
};

const User = ({img, name, age, isChinaar, hobbies}) => {
  return (
    <section>
      <img src={img} alt={name} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>IsChinaar: {isChinaar}</h3>
      <h4>Hobbies: {hobbies}</h4>
    </section>
  );
};

export default App;
