import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import logStyles from "../Assets/form.module.css";
import { IoLogInOutline } from "react-icons/io5";
const Login = () => {
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <section className={logStyles.container}>
        <div style={{ direction: "rtl" }} className={logStyles.content}>
          <div className={logStyles.data}>
            <IoLogInOutline size={200} color="#2b2b2b" />
          </div>
          <div className={logStyles.data}>
            <form style={{ direction: "ltr" }} onSubmit={(e) => handleSubmit(e)}>
              <h1>Login</h1>
              <div className={logStyles.inputData}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
              </div>

              <div className={logStyles.inputData}>
                <label htmlFor="pw">Password</label>
                <input type="password" id="pw" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
              </div>
              <button style={{ alignSelf: "flex-start" }}>Login</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
