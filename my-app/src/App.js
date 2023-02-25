import "./App.css";
import Login from "./components/Auth/Login/Login.jsx";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import SignUp from "./components/Auth/SignUp/SignUp.jsx";
import Layout from "./components/Page/Layout";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { getUser } from "./features/user/userSlice";
import Browse from "./components/Browse/Browse";
import CreateProfile from "./components/CreateProfile/CreateProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/landing" element={<Landing to="/landing" />} />

              <Route path="/browse" element={<Browse />} />
              <Route path="/login" element={<Login to="/login" replace />} />
              <Route
                path="/sign-up"
                element={<SignUp to="/sign-up" replace />}
              />
              <Route
                path="/create-profile"
                element={<CreateProfile to="/create-profile" replace />}
              />
            </Route>
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
