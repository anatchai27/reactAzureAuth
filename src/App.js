import logo from "./logo.svg";
import "./App.css";
import { authContext, withAdalLoginApi } from "./AzureAuth";
import { runWithAdal } from "react-adal";
import { useEffect, useState } from "react";
function App() {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const DO_NOT_LOGIN = false;
    runWithAdal(
      authContext,
      () => {
        require("./index");
      },
      DO_NOT_LOGIN
    );
    // Get the cached user
    const user = authContext.getCachedUser();
    if (user) {
      console.log("User is logged in:", user);
      setUserData(JSON.stringify(user));
    } else {
      console.log("User is not logged in");
      setUserData(JSON.stringify(""));
    }
    return () => {};
  }, []);

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <p>user data : {userData}</p>
    </>
  );
}
function LoginButton() {
  const handleLogin = () => {
    authContext.login();
    // let data = withAdalLoginApi();
    // console.log(data);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export const LogoutButton = () => {
  const handleLogout = () => {
    authContext.logOut();
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default App;
