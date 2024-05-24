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

  const [loginError, setloginError] = useState("");
  const [registerError, setRegisterError] = useState("");

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
        setloginError("");
        if (u.Role === "Customer") {
          navigate("/customer");
        } else if (u.Role === "Manager") {
          navigate("/branchmgr");
        }
      })
      .catch((error) => {
        setloginError(error.response.data.message);
      });
  };

  const register = (userid, password, username, phone, email) => {
    const data = {
      account: {
        User_ID: userid,
        Password: password,
        Username: username,
        Avatar: "",
      },
      userInfo: {
        Fname: "",
        Lname: "",
        Phone: phone,
        Email: email,
      },
    };
    axios
      .post("http://localhost:8080/auth/register", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setRegisterError(error.response.data.message);
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
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        register,
        loginError,
        registerError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
