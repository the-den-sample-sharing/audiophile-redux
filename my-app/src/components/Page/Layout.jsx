import { Outlet } from "react-router-dom";
import Navbar from "../Nav/Navbar";
// import Header from './Header/Header.jsx';
import styles from "./Layout.css";

export default function Layout() {
  return (
    <div className={styles.Layout}>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
