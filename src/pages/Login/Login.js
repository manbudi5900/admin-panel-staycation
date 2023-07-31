import React, { useState } from "react";
import "./login.scss";
import backLogin from "../../assets/img/backlogin.png";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const login = () => {
    console.log(state.email);
    navigate("/");
  };

  return (
    <div className="row g-0 content">
      <div
        className="col-md-3 col-lg-5 d-none d-md-block left"
        style={{
          backgroundColor: "#E6F3FF",
          height: "1024px",
        }}
      >
        <img
          src={backLogin}
          alt="login form"
          className="img-fluid"
          style={{
            borderRadius: "1rem 0 0 1rem",
            width: "100%",
            marginTop: "50px",
          }}
        />
      </div>
      <div
        className="col-md-8 col-lg-7 d-flex align-items-center right"
        style={{
          backgroundColor: "#FCFEFF",
          borderRadius: "25px 0px 0px 25px",
          marginLeft: "-50px",
        }}
      >
        <div
          className="card-body p-4 p-lg-5 text-black right-card"
          style={{
            borderRadius: "1rem",
            height: "856px",
            width: "600px",
          }}
        >
          <form>
            <h5
              className="fw-normal mb-3 pb-3"
              style={{
                textAlign: "center",
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              Sign into your account
            </h5>

            <div className="form-outline mb-5 input-card">
              <label className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                placeholder="Enter your Email here"
                value={state.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-outline mb-5 input-card">
              <label className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control form-control-lg"
                placeholder="Enter your Password here"
                value={state.password}
                onChange={handleChange}
              />
            </div>

            <div className="pt-1 mb-4 card-login">
              <button
                className="btn btn-dark btn-lg btn-block border-0"
                type="button"
                onClick={login}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
