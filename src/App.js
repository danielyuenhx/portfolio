import React from "react";
import './App.css';

function Header() {
  return (
    <header>
        <a class="logo" href='#'>Logo</a>
        <ul>
            <li><a id="link-1" href='#div-1' class="active">Home</a></li>
            <li><a id="link-2" href='#div-2'>Introduction</a></li>
            <li><a id="link-3" href='#div-3'>Products</a></li>
        </ul>
    </header>
  );
}

function App() {
  return (
    <Header />
  );
}

export default App;
