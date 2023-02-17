import "./App.css";
import Login from "./components/Auth/Login/Login.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import SignUp from "./components/Auth/SignUp/SignUp.jsx";
import Layout from "./components/Page/Layout";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Routes>
            <Route element={<Layout />}>
              <Route index path="landing" element={<Landing />}></Route>
              <Route path="/log-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
