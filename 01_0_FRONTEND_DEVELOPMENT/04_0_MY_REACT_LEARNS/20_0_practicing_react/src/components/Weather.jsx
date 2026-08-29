const Weather = () => {
  let temp = 26;
  if (temp < 15) {
    return <h1>It's Cold Outside</h1>;
  } else if (temp >= 15 && temp <= 25) {
    return <h1>It's nice outside</h1>;
  }else{
    return <h1>Hot Outside</h1>;
  }
};

export default Weather;
