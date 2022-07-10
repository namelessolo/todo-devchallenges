import React, { PropsWithChildren } from "react";
import styles from "./Container.module.scss";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Container: React.FC<PropsWithChildren> = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Container;
