import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth() as any;
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
   const nav = useNavigate();
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     nav("/");
  //   }
  // }, [isLoggedIn]);
  return (
    <div style={{ padding: "30px" }}>
      {isLoggedIn && <h1>You are logged in :)</h1>}
      {!isLoggedIn && (
        <input type="text" name="name" defaultValue={"enter name"} />
      )}
      <button onClick={() => handleLogin()}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Login;
