import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

function Home() {
  return (
    
    <div>
      <div>
      <div className="Home">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
    </div>
  );
}

export default Home;
