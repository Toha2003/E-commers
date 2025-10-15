import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiService from "../../api/axios";

import "./LoginForm.css";
import { FaLock, FaLockOpen, FaUser } from "react-icons/fa6";

const LoginForm = ({ setLoggedIn }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [lookPassword, setLookPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const passwordLook = () => {
    setLookPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await apiService.post(
        "/auth/login",
        {
          username: form.username,
          password: form.password,
        },
      );


      if (res.data.success) {
        const token = res.data?.data?.token || res.data?.token;
        if (token) {
          localStorage.setItem("token", token);
          toast.success("Tizimga muvaffaqiyatli kirdingiz!");
          setLoggedIn(true); 
          navigate("/"); 
        } else {
          toast.error("Token topilmadi. Qayta urinib ko‘ring.");
        }
      } else {
        toast.error(res.data.message || "Login xato. Ma’lumotlarni tekshiring.");
      }
    } catch (err) {
      console.error("LOGIN ERROR:", err.response?.data || err);
      toast.error(
        err.response?.data?.message || "Login amalga oshmadi. Parol yoki login xato."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login__container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="input-box">
            <input
              autoComplete="current-password"
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              placeholder="Username"
              required
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              autoComplete="current-password"
              name="password"
              value={form.password}
              onChange={handleChange}
              type={lookPassword}
              placeholder="Password"
              required
            />
            {lookPassword === "password" ? (
              <FaLock className="icon" onClick={passwordLook} />
            ) : (
              <FaLockOpen className="icon" onClick={passwordLook} />
            )}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="register-link">
            <p>
              Akkauntingiz bo'lmasa {" "}
              <NavLink className="register__and-login" to="/register">Ro'yxatdan o'ting</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
