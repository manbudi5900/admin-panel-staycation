import React, { useEffect } from "react";
import logo from "../../assets/img/logo.png";
import "./sidebar.css";
import Button from "../../elements/Button";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "" : "collapsed";
  };
  const getNavLinkActiveClass = (path) => {
    return location.pathname === path ? "active" : "";
  };
  const getNavLinkBackgroundClass = (path) => {
    return location.pathname === path ? "collapsed" : "";
  };
  const getNavLinkDropdownClass = (path) => {
    return location.pathname === path ? "collapse show" : "collapse";
  };
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <div className={`back-${getNavLinkBackgroundClass("/")}`}>
            <Button
              type="link"
              href="/"
              className={`nav-link ${getNavLinkClass("/")}`}
            >
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Button>
          </div>
        </li>

        <li className="nav-item">
          <div
            className={`back-${getNavLinkBackgroundClass(
              "/user"
            )}${getNavLinkBackgroundClass("/wisata")}`}
          >
            <Button
              type="data-target"
              className={`nav-link ${getNavLinkClass(
                "/user"
              )} ${getNavLinkClass("/wisata")}`}
              data_target={"#components-nav"}
              data_toggle={"collapse"}
              href={"#"}
            >
              <i className="bi bi-menu-button-wide icon-drop"></i>
              <span>Master</span>
              <i className="bi bi-chevron-down ms-auto icon-drop"></i>
            </Button>
          </div>
          <ul
            id="components-nav"
            className={`nav-content ${getNavLinkDropdownClass(
              "/user"
            )} ${getNavLinkDropdownClass("/wisata")}`}
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Button
                type="link"
                href="/user"
                className={`${getNavLinkActiveClass("/user")}`}
              >
                <i className="bi bi-circle"></i>
                <span>User</span>
              </Button>
            </li>
            <li>
              <Button
                type="link"
                href="/wisata"
                className={`${getNavLinkActiveClass("/wisata")}`}
              >
                <i className="bi bi-circle"></i>
                <span>Wisata</span>
              </Button>
            </li>
            <li>
              <Button type="link" href="/wisata" className={""}>
                <i className="bi bi-circle"></i>
                <span>Voucher</span>
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
