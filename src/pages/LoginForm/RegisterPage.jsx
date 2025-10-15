import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiService from "../../api/axios";

import "./LoginForm.css";
import { FaLock, FaLockOpen } from "react-icons/fa6";

const RegisterPage = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [lookPassword, setLookPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const passwordLook = () => {
    setLookPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await apiService.post(
        "/auth/register",
        {
          username: form.username,
          email: form.email,
          password: form.password,
        },
        {
          headers: {
            "Accept-Language": "uz",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("REGISTER SUCCESS:", res.data);
      toast.success("Ro‘yxatdan o‘tish muvaffaqiyatli!");
      navigate("/login");
    } catch (err) {
      console.error("REGISTER ERROR:", err.response?.data || err);
      toast.error(
        err.response?.data?.message || "Serverda xatolik. Qayta urinib ko‘ring."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login__container">
      <div className="wrapper">
        <form onSubmit={handleRegister}>
          <h1>Register</h1>

          <div className="input-box">
            <input
              name="username"
              type="text"
              placeholder="Username"
              required
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
            />
            {lookPassword === "password" ? (
              <FaLock className="icon" onClick={passwordLook} />
            ) : (
              <FaLockOpen className="icon" onClick={passwordLook} />
            )}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

            <div className="register-link">
            <p>
              Akkauntingiz bo'lsa {" "}
              <NavLink className="register__and-login" to="/login">Loginga o'ting</NavLink>
            </p>
          </div>

      </div>
    </div>
  );
};

export default RegisterPage;
