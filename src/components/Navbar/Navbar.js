import React, { useEffect, useState } from "react";
import "./Navbar.css";
import pngImage from "../../images/pngImage.png";
import userIcon from "../../images/userIcon.png";
import search_icon from "../../images/search_icon.png";
import { useNavigate } from "react-router-dom";
import {Menu, MenuItem} from "@mui/material" 



const Navbar = () => {
  const [Data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLogin, setIsLogin] = useState(false)
  const [userName, setUserName] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)

  let navigate = useNavigate();

  const getData = async () => {
    let res = await fetch(
      `https://academics.newtonschool.co/api/v1/music/song?search={"title":${search}}`,
      {
        headers: {
          projectID: "fgq9fidgo5dw",
        },
      }
    );
    let data = await res.json();
    let data1 = data.data;
    setData(data1);
    // console.log(data1);
    console.log(data, 'searching data')
  };

  console.log(search);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if(token){
      setIsLogin(true)
      let loginName = sessionStorage.getItem("name")
      setUserName(loginName)
    }
    getData();
  }, [search]);

  function login(e){
    if(isLogin){
      setAnchorEl(e.currentTarget)
    }
    else{
      navigate('/login')
    }
  }

  function handleMenuClose(){
    setAnchorEl(null);
  }

  function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    setIsLogin(false);
    setUserName("");
    handleMenuClose()
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={pngImage} className="wynk_logo" alt="logo" />
          <p>Wynk Music</p>
        </div>

        <div className="navbar_1">
          <input
            type="text"
            placeholder="Search Songs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              backgroundImage: `url(${search_icon})`,
              backgroundPosition: "20px 8px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "30px 30px",
            }}
          />

          <p>Manage Subscription</p>
          <div className="left_border"></div>

          <div className="login" onClick={login}>
            <img src={userIcon} alt="user_icon" />
            
            {
              isLogin ? <p>{userName}</p> : <p>Login</p>
            }
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem>Update Password</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>

        </div>
      </div>

      {/* Render the SignInForm component */}
      {/* <SignInForm show={showSignInForm} onClose={() => setShowSignInForm(false)} /> */}
    </>
  );
};

export default Navbar;
