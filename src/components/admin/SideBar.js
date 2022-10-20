import React from "react";
import { Link, NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
      <div className="nano">
        <div className="nano-content">
          <ul>
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" /> <span>Focus</span>
              </a>
            </div>
            <li>
              
              
                <Link to={`dashboard`}>
                    <i className="ti-home"></i> Dashboard
                </Link>
            </li>

            <li className="label">Apps</li>
            <li>
              <a className="sidebar-sub-toggle">
                <i className="ti-bar-chart-alt"></i> Charts{" "}
                <span className="sidebar-collapse-icon ti-angle-down"></span>
              </a>
              <ul>
                <li>
                  <a href="chart-flot.html">Flot</a>
                </li>
                <li>
                  <a href="chart-morris.html">Morris</a>
                </li>
                <li>
                  <a href="chartjs.html">Chartjs</a>
                </li>
                <li>
                  <a href="chartist.html">Chartist</a>
                </li>
                <li>
                  <a href="chart-peity.html">Peity</a>
                </li>
                <li>
                  <a href="chart-sparkline.html">Sparkle</a>
                </li>
                <li>
                  <a href="chart-knob.html">Knob</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="app-event-calender.html">
                <i className="ti-calendar"></i> Calender{" "}
              </a>
            </li>
            <li>
              <a href="app-email.html">
                <i className="ti-email"></i> Email
              </a>
            </li>
            <li>
              <a href="app-profile.html">
                <i className="ti-user"></i> Profile
              </a>
            </li>
            <li>
              <a href="app-widget-card.html">
                <i className="ti-layout-grid2-alt"></i> Widget
              </a>
            </li>
            <li className="label">Features</li>
            <li>
              <a className="sidebar-sub-toggle">
                <i className="ti-layout"></i> UI Elements{" "}
                <span className="sidebar-collapse-icon ti-angle-down"></span>
              </a>
              <ul>
                <li>
                  <a href="ui-typography.html">Typography</a>
                </li>
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>

                <li>
                  <a href="ui-button.html">Button</a>
                </li>
                <li>
                  <a href="ui-dropdown.html">Dropdown</a>
                </li>

                <li>
                  <a href="ui-list-group.html">List Group</a>
                </li>

                <li>
                  <a href="ui-progressbar.html">Progressbar</a>
                </li>
                <li>
                  <a href="ui-tab.html">Tab</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="sidebar-sub-toggle">
                <i className="ti-panel"></i> Components{" "}
                <span className="sidebar-collapse-icon ti-angle-down"></span>
              </a>
              <ul>
                <li>
                  <a href="uc-calendar.html">Calendar</a>
                </li>
                <li>
                  <a href="uc-carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="uc-weather.html">Weather</a>
                </li>
                <li>
                  <a href="uc-datamap.html">Datamap</a>
                </li>
                <li>
                  <a href="uc-todo-list.html">To do</a>
                </li>
                <li>
                  <a href="uc-scrollable.html">Scrollable</a>
                </li>
                <li>
                  <a href="uc-sweetalert.html">Sweet Alert</a>
                </li>
                <li>
                  <a href="uc-toastr.html">Toastr</a>
                </li>
                <li>
                  <a href="uc-range-slider-basic.html">Basic Range Slider</a>
                </li>
                <li>
                  <a href="uc-range-slider-advance.html">
                    Advance Range Slider
                  </a>
                </li>
                <li>
                  <a href="uc-nestable.html">Nestable</a>
                </li>

                <li>
                  <a href="uc-rating-bar-rating.html">Bar Rating</a>
                </li>
                <li>
                  <a href="uc-rating-jRate.html">jRate</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="sidebar-sub-toggle">
                <i className="ti-layout-grid4-alt"></i> Table{" "}
                <span className="sidebar-collapse-icon ti-angle-down"></span>
              </a>
              <ul>
                <li>
                  <a href="table-basic.html">Basic</a>
                </li>

                <li>
                  <a href="table-export.html">Datatable Export</a>
                </li>
                <li>
                  <a href="table-row-select.html">Datatable Row Select</a>
                </li>
                <li>
                  <a href="table-jsgrid.html">Editable </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="sidebar-sub-toggle">
                <i className="ti-heart"></i> Icons{" "}
                <span className="sidebar-collapse-icon ti-angle-down"></span>
              </a>
              <ul>
                <li>
                  <a href="font-themify.html">Themify</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="sidebar-sub-toggle">
                <i className="ti-map"></i> Maps{" "}
                <span className="sidebar-collapse-icon ti-angle-down"></span>
              </a>
              <ul>
                <li>
                  <a href="gmaps.html">Basic</a>
                </li>
                <li>
                  <a href="vector-map.html">Vector Map</a>
                </li>
              </ul>
            </li>
            <li className="label">Form</li>
            <li>
              <a href="form-basic.html">
                <i className="ti-view-list-alt"></i> Basic Form{" "}
              </a>
            </li>
            <li className="label">Extra</li>
            <li>
              <a className="sidebar-sub-toggle">
                <i className="ti-files"></i> Invoice{" "}
                <span className="sidebar-collapse-icon ti-angle-down"></span>
              </a>
              <ul>
                <li>
                  <a href="invoice.html">Basic</a>
                </li>
                <li>
                  <a href="invoice-editable.html">Editable</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="sidebar-sub-toggle">
                <i className="ti-target"></i> Pages{" "}
                <span className="sidebar-collapse-icon ti-angle-down"></span>
              </a>
              <ul>
                <li>
                  <a href="page-login.html">Login</a>
                </li>
                <li>
                  <a href="page-register.html">Register</a>
                </li>
                <li>
                  <a href="page-reset-password.html">Forgot password</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="../documentation/index.html">
                <i className="ti-file"></i> Documentation
              </a>
            </li>
            <li>
              <a>
                <i className="ti-close"></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
