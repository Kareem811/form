import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { IoLogInOutline } from "react-icons/io5";
import { FaRegRegistered } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [words, setWords] = useState(window.innerWidth <= 1050);
  const [menu, setMenu] = useState(window.innerWidth <= 850);
  const [bigMenu, setBigMenu] = useState(false);
  const [close, setClose] = useState(false);

  const navRef = useRef();
  const [navWidth, setNavWidth] = useState(null);

  const checkMenu = (menuSize) => {
    setWords(menuSize <= 1050);
    setMenu(menuSize <= 850);
  };

  useEffect(() => {
    const handleResize = () => {
      checkMenu(window.innerWidth);
      if (navRef.current) {
        setNavWidth(navRef.current.getBoundingClientRect().width);
      }
    };

    window.addEventListener("resize", handleResize);
    if (navRef.current) {
      setNavWidth(navRef.current.getBoundingClientRect().width);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeMenu = () => {
    setBigMenu(!bigMenu);
    setClose(!close);
  };

  return (
    <header>
      <nav ref={navRef}>
        <span>LOGO</span>
        <ul
          className={bigMenu ? "bigMenu" : undefined}
          style={menu ? (bigMenu ? { display: "block", overflow: "visible", height: "auto", width: `${navWidth}px` } : { display: "none" }) : { display: "flex", height: "auto" }}>
          <li>
            <NavLink to={"/login"}>
              <IoLogInOutline size={23} />
              {!words && "Login"}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>
              <FaRegRegistered size={23} />
              {!words && "Register"}
            </NavLink>
          </li>
        </ul>
        {menu ? (
          close ? (
            <IoCloseCircleOutline size={30} color="darkred" cursor={"pointer"} onClick={changeMenu} />
          ) : (
            <IoMenu size={30} color="darkred" cursor={"pointer"} onClick={changeMenu} />
          )
        ) : (
          bigMenu && <IoCloseCircleOutline size={30} color="darkred" cursor={"pointer"} onClick={changeMenu} />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
