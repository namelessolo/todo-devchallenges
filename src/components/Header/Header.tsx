import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>#todo</h1>
      <nav className={styles.navbar}>
        <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.active}` : "")}>
          All
        </NavLink>
        <NavLink to="/todo-devchallenges/active/" className={({ isActive }) => (isActive ? `${styles.active}` : "")}>
          Active
        </NavLink>
        <NavLink to="/todo-devchallenges/completed" className={({ isActive }) => (isActive ? `${styles.active}` : "")}>
          Completed
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
