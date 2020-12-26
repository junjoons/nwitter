import { authService } from "fbase";
import React, { useState } from "react";

const Auth = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
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

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
        console.log(data);
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
        console.log(data);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => {
    console.log("toggled account");
    setNewAccount((prev) => {
      prev = !prev;
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount ? "Create New Account" : "Log In"}
        />
      </form>
      {error}
      <div>
        <button>Continue With Google</button>
        <button>Continue With Github</button>
      </div>
      <div>
        <button onClick={toggleAccount}>
          {newAccount ? "Sign In" : "Sign Up"}
          {console.log(newAccount)}
        </button>
      </div>
    </div>
  );
};

export default Auth;
