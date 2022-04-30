import React from "react";

const Login = (props) => {
  const a = "I am boy!!!!";
  return (
    <div>
      <h1>Hello:{props.name}</h1>
      <h1>How are you?</h1>
      <h1>{a}</h1>
    </div>
  );
};

export default Login;
