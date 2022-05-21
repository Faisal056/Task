import "./App.css";
import "../../output.css";
import { useSelector } from "react-redux";
import LandingPage from "../LandingPage/LandingPage";
import LogIn from "../Login/Login";
import SignUp from "../SignUp/Signup";
import Profile from "../Profile/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  const { token } = useSelector((state) => state.authUser);
  return (
    <div className="App">
      <Routes>
        {!token && (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
        {token && (
          <>
            <Route path="/profile" element={<Profile />} />
          </>
        )}
        <Route path="*" element={<Navigate to={token ? "/profile" : "/"} />} />
      </Routes>
    </div>
  );
}

export default App;
