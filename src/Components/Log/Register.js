import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import logStyles from "../Assets/form.module.css";
import { FaRegRegistered } from "react-icons/fa6";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });
  const [err, setErr] = useState(false);
  const [cpw, setCpw] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    user.password !== cpw ? setErr(true) : setErr(false);
  };
  return (
    <>
      <Navbar />
      <section className={logStyles.container}>
        <div className={logStyles.content}>
          <div className={logStyles.data}>
            <FaRegRegistered size={200} color="#2b2b2b" />
          </div>
          <div className={logStyles.data}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <h1>Register</h1>
              <div className={logStyles.inputData}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
              </div>
              <div className={logStyles.inputData}>
                <label htmlFor="pw">Password</label>
                <input type="password" id="pw" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
              </div>
              {err && <span>Password not Match</span>}
              <div className={logStyles.inputData}>
                <label htmlFor="cpw">Confirm Password</label>
                <input type="password" id="cpw" value={cpw} onChange={(e) => setCpw(e.target.value)} />
              </div>
              {err && <span>Password not Match</span>}
              <div className={logStyles.inputData}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
              </div>
              <div className={logStyles.inputData}>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="Phone" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
              </div>
              <button>Register</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
