import { useState } from "react";
import "./header.css";

 const Header = () => {
let[lbtn, setLbtn]= useState('Login');
let[sbtn, setSbtn]= useState('SignUp');

  return (
    <div className="header">
      <div className="logo">
        <img src="https://www.cyberyami.com/images/logo.svg" alt="CyberYami" />
      </div>
      <div className="navlist" >
        <ul className="ul1">
          <li>Academia</li>
          <li>CTF Warriors</li>
          <li>Business Solution</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="login">
        <ul className=" login1"  >
          <li>🛒</li>
          <li className="sgn" onClick={()=>{sbtn==="SignUp"? setSbtn("SignIn") : setSbtn("SignUp")}}>{sbtn}</li>
          <li className="login2" onClick={()=>{lbtn==="Login"? setLbtn("Logout") : setLbtn("Login")}}>{lbtn}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;