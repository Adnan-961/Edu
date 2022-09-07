import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';

import "./styles.scss";
import Logo from "../../assets/images/logo.png";
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  const [openNav, seOpenNav] = useState(false)
  const [search, setSearch] = useState(false)
  return (
    <div className="navbar__container">
      <div className="nav__container">
        {
          search 
          ?  <div className="nav__link_mobile">
              <input type={"text"} placeholder="What would you like to learn?"/>
            </div>
          : <img src={Logo} alt="Logo" className="logo"/>
        }
        <div className="navigation">
          <div className="nav__link">
            <input type={"text"} placeholder="What would you like to learn?"/>
          </div>
          <div className="nav__link">
            <span>Become a Teacher</span>
          </div>
          <div className="nav__link">
            <button>Login</button>
          </div>
          <div className="nav_menu_mobile" >
            <SearchIcon onClick={() => setSearch(!search)} fontSize={"large"} />
            <MenuIcon onClick={() => seOpenNav(!openNav)} fontSize={"large"}/>
          </div>
        </div>
      </div>
      {
        openNav && 
          <div className="nav__container_mobile">
          
            <div className="nav__link_mobile">
              <span>Become a Teacher</span>
            </div>
            <div className="nav__link_mobile">
              <button>Login</button>
            </div>
          </div>
      }
    </div>
  );
}
