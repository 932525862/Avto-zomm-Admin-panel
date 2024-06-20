import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../Login/Login.css";

export const Login = () => {
  const [phone, setPhone] = useState("");
  const [parol, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin",
        {
          method: "POST",
          body: JSON.stringify({
            phone_number: phone,
            password: parol,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("data", data);
      localStorage.setItem('accessToken',data?.data?.tokens?.accessToken?.token)
	    console.log(localStorage.getItem('accessToken',))

      navigate("/panel");
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="phone">Login</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e?.target?.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="parol">Password</label>
          <input
            type="parol"
            id="parol"
            value={parol}
            onChange={(e) => setPassword(e?.target?.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Submit
        </button>
      </form>
    </div>
  );
};
