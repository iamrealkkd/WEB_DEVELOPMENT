const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({isValid}) => {
  if (isValid) {
    return <ValidPassword />;
  } else {
    return <InvalidPassword />;
  }
};
const Conditional = () => {
  return <section>
    <Password isValid={true}/>
  </section>;
};

export default Conditional;
