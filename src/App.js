import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";
import { MyApp } from "./MyApp";

function App() {
  return (
    <HashRouter>
      <ThemeProvider withToastContainer>
        <MyApp />
      </ThemeProvider>
    </HashRouter>
  );
}
export default App;
