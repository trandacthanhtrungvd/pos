import axios from "axios";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    user_id: "",
    username: "",
    role: "",
    accessToken: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const login = (user_id, password) => {
    axios
      .post("http://localhost:8080/auth/login", {
        User_ID: user_id,
        Password: password,
      })
      .then((response) => {
        let u = response.data.data.user;
        setUser({
          user_id: u.User_ID,
          username: u.Username,
          role: u.Role,
          accessToken: response.data.data.accessToken,
        });

        if (u.Role === "Customer") {
          navigate("/customer");
        } else if (u.Role === "Manager") {
          navigate("/branchmgr");
        }
      })
      .catch((error) => {
        setErrorMsg(error.response.data.message);
      });
  };

  const logout = () => {
    setUser({
      user_id: "",
      username: "",
      role: "",
    });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, errorMsg }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
