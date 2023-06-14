import { LOGO_URL } from "../utils/constants";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // if no dependency array => then useEffect will be called on every component render
  // if dependency array is empty => then useEffect will be called only in the initial render(just once)
  // if dependency array is btnNameReact => then useEffect will be called everytime btnNameReact is updated.

  useEffect(()=>{
    console.log("useEffect called")
  }, [btnNameReact])
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About Us</Link></li>
          <li><Link to = "/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
