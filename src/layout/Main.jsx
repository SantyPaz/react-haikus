import "./styles/Main.css";
import React from "react";


const Main = ({ children }) => {
  return (
    <main>
			<h1 className="H1">Haikus</h1>
	     {children}
    </main>
  );
};

export default Main;