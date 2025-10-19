import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.services";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await AuthService.login(formData.username, formData.password);
      alert("Login successful!");
      console.log("Backend roles:", res.roles);

      const roles = res.roles || [];
      if (roles.includes("ROLE_ADMIN")) navigate("/admin");
      else if (roles.includes("ROLE_MODERATOR")) navigate("/moderator");
      else navigate("/user");

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
