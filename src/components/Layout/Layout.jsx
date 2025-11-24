import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
import Colors from "../../styles/Colors";

const Layout = () => {
  return (
    <div
      className="layout-container"
      style={{
        backgroundColor: Colors.backgroundPage,
        color: Colors.textSecondary,
      }}
    >
      <Header />
      <main className="main-content container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
