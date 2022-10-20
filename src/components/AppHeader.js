import React from "react";
import styled from "styled-components";
const AppHeader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            VietPhu
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Danh mục
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="about"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Giới thiệu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Đặt lịch
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <SearchInput
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Tìm kiếm
              </button>
            </form>
            <User className="d-flex text-black mx-3" role="button">
              Đăng kí / Đăng nhập
            </User>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppHeader;

const SearchInput = styled.input`
  width: auto;
`;

const User = styled.div`
  width: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;
