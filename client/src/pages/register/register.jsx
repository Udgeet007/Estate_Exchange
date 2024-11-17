import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
// import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); //it will stop in refreshing page again again
    setIsLoading(true);
    setError("")
    const formData = new FormData(e.target);

    //reference of input tags below syntax by giving name.
    const username = formData.get("username");

    const email = formData.get("email");
    const password = formData.get("password");

    // console.log(username);
    // console.log(email);
    // console.log(password);
    
    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", {
        username,
        email,
        password,
      }); //object bna kr bhi use karsakte ho
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      // console.log(err);
      setError(err.response.data.message);
    }finally{
      setIsLoading(false);
    }
  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
