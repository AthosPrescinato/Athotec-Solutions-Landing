import React from "react";
import Colors from "../../styles/Colors";

const Main = ({ children }) => {
  return (
    <main
      className="main"
      style={{
        backgroundColor: Colors.backgroundPage,
        color: Colors.textPrimary,
        minHeight: "60vh",
      }}
    >
      {children}
    </main>
  );
};

export default Main;
