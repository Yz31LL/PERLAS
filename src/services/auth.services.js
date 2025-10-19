// src/services/auth.service.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  /**
   * Logs in a user by sending credentials to the backend.
   * Saves user info (including token and roles) to localStorage.
   */
  async login(username, password) {
    const response = await axios.post(API_URL + "signin", { username, password });

    if (response.data.accessToken) {
      // Store only what we actually need
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: response.data.username,
          roles: response.data.roles,
          accessToken: response.data.accessToken,
        })
      );
    }

    return response.data; // so the component can still use roles for navigation
  }

  /** Logs out the user and clears localStorage */
  logout() {
    localStorage.removeItem("user");
  }

  /** Retrieves the currently stored user */
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  /** Returns the token string, if available */
  getToken() {
    const user = this.getCurrentUser();
    return user?.accessToken || null;
  }
}

export default new AuthService();
