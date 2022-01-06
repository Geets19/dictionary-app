import logo from "./logo.png";
import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This app was coded by
          <a
            href="https://www.linkedin.com/in/geetha-girithari"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            Geetha Girithari
          </a>{" "}
          and is
          <a
            href="https://github.com/Geets19/dictionary-app"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
