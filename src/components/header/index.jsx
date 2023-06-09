import React, { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";
import menus from "../../pages/menu";

import "./styles.scss";
import logo from "../../assets/images/logo/logo.png";
import Button from "../button";
import pdf from "../../assets/fake-data/whitepaper.pdf";
import robot from "../../assets/images/background/robotnew.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
    return () => {
      setScroll({});
    };
  }, []);

  const [menuActive, setMenuActive] = useState(null);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  return (
    <header id="header_main" className={`header ${scroll ? "is-fixed" : ""}`}>
      <div className="container">
        <div id="site-header-inner">
          <div className="header__logo d-flex">
            <NavLink to="/">
              <img
                src={logo}
                alt="GemGPT"
                style={{ width: 50, marginLeft: 50 }}
              />
            </NavLink>
            <div style={{ padding: 10, fontSize: 24 }}>GemGPT</div>
          </div>
          <nav
            id="main-nav"
            className={`main-nav ${menuActive ? "active" : ""}`}
          >
            <ul id="menu-primary-menu" className="menu">
              {menus.map((data, idx) => (
                <li
                  key={idx}
                  onClick={() => handleDropdown(idx)}
                  className={`menu-item ${
                    data.namesub ? "menu-item-has-children" : ""
                  } ${activeIndex === idx ? "active" : ""}`}
                >
                  <Link to={data.links}>{data.name}</Link>
                  {data.namesub && (
                    <ul className="sub-menu">
                      {data.namesub.map((submenu) => (
                        <li key={submenu.id} className="menu-item">
                          <NavLink to={submenu.links}>{submenu.sub}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <a href={pdf}>
                <button
                  className="tf-button btn-effect "
                  style={{ marginLeft: "-30px" }}
                >
                  <span className="boder-fade"></span>
                  <span className="effect">Whitepaper</span>
                </button>
              </a>
              <a href="https://app.gemgpt.org/" target="_blank">
              <div className="d-flex align-items-center justify-content-center text-light">
                <img src={robot} width={60}></img>
                <div>Use App</div>
              </div></a>
            </ul>
          </nav>

          <div
            className={`mobile-button ${menuActive ? "active" : ""}`}
            onClick={handleMenuActive}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
