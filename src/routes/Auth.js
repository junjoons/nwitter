import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="Email"
          type="text"
          placeholder="Enter Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="Password"
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="Login" />
      </form>
      <div>
        <button>Continue With Google</button>
        <button>Continue With Github</button>
      </div>
    </div>
  );
};

export default Auth;
