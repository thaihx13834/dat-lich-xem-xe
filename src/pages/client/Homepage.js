import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "../../components/Banner";
const Homepage = () => {
  return (
    <div>
      <Banner />
      <Categories className="categories px-4">
        <div className="categories-title text-center my-5">
          <h2 className="">Danh mục các hãng xe</h2>
        </div>
        <MainCategories className="row">
          <CategoryItem className="col-sm-2 p-3 bg-light text-white">
            <Link to="/">
              <img
                src="https://picsum.photos/id/217/70/70"
                alt=".."
                className="d-block mx-auto img-fluid"
              />
            </Link>
          </CategoryItem>

          <CategoryItem className="col-sm-2 p-3 bg-light text-white">
            <Link to="/">
              <img
                src="https://picsum.photos/id/217/70/70"
                alt=".."
                className="d-block mx-auto img-fluid"
              />
            </Link>
          </CategoryItem>

          <CategoryItem className="col-sm-2 p-3 bg-light text-white">
            <Link to="/">
              <img
                src="https://picsum.photos/id/117/70/70"
                alt=".."
                className="d-block mx-auto img-fluid"
              />
            </Link>
          </CategoryItem>

          <CategoryItem className="col-sm-2 p-3 bg-light text-white">
            <Link to="/">
              <img
                src="https://picsum.photos/id/317/70/70"
                alt=".."
                className="d-block mx-auto img-fluid"
              />
            </Link>
          </CategoryItem>

          <CategoryItem className="col-sm-2 p-3 bg-light text-white">
            <Link to="/">
              <img
                src="https://picsum.photos/id/417/70/70"
                alt=".."
                className="d-block mx-auto img-fluid"
              />
            </Link>
          </CategoryItem>

          <CategoryItem className="col-sm-2 p-3 bg-light text-white">
            <Link to="/">
              <img
                src="https://picsum.photos/id/517/70/70"
                alt=".."
                className="d-block mx-auto img-fluid"
              />
            </Link>
          </CategoryItem>

          <CategoryItem className="col-sm-2 p-3 bg-light text-white">
            <Link to="/">
              <img
                src="https://picsum.photos/id/317/70/70"
                alt=".."
                className="d-block mx-auto img-fluid"
              />
            </Link>
          </CategoryItem>

          <CategoryItem className="col-sm-2 p-3 bg-light text-white">
            <Link to="/">
              <img
                src="https://picsum.photos/id/517/70/70"
                alt=".."
                className="d-block mx-auto img-fluid"
              />
            </Link>
          </CategoryItem>
        </MainCategories>
      </Categories>

      <Subbanner className="">
        <img
          src="https://picsum.photos/id/217/1520/300"
          className="d-block mx-auto img-fluid"
          alt="..."
        />
      </Subbanner>

      <Fproduct className="px-5">
        <div className="categories-title text-center my-5">
          <h2 className="">1 số sản phẩm</h2>
        </div>

        <section className="text-center mb-4">
          <div className="row wow fadeIn">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div className="view overlay">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <a>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body text-center">
                  <a href="" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>

                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>

                  <button
                    type="button"
                    className="d-block w-100 btn btn-primary"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div className="view overlay">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <a>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body text-center">
                  <a href="" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>

                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>

                  <button
                    type="button"
                    className="d-block w-100 btn btn-primary"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div className="view overlay">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <a>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body text-center">
                  <a href="" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>

                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>

                  <button
                    type="button"
                    className="d-block w-100 btn btn-primary"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div className="view overlay">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <a>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body text-center">
                  <a href="" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>

                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>

                  <button
                    type="button"
                    className="d-block w-100 btn btn-primary"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div className="view overlay">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <a>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body text-center">
                  <a href="" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>

                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>

                  <button
                    type="button"
                    className="d-block w-100 btn btn-primary"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div className="view overlay">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <a>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body text-center">
                  <a href="" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>

                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>

                  <button
                    type="button"
                    className="d-block w-100 btn btn-primary"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div className="view overlay">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <a>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body text-center">
                  <a href="" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>

                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>

                  <button
                    type="button"
                    className="d-block w-100 btn btn-primary"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fproduct>

      <Post className="px-4">
        <div className="categories-title text-center my-5 d-flex px-4 justify-content-between">
          <h2 className="">Bài viết</h2>
          <a href="#">Xem thêm</a>
        </div>

        <section className="text-center mb-4 mx-4">
          <div className="row wow fadeIn">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Tiêu đề bài viết</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Đọc thêm
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Tiêu đề bài viết</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Đọc thêm
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Tiêu đề bài viết</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Đọc thêm
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Tiêu đề bài viết</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Đọc thêm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Post>
    </div>
  );
};

export default Homepage;

const MainCategories = styled.div`
  padding: 0 40px;
  margin: 20px 0;
`;

const Categories = styled.div`
  margin-top: 70px;
`;

const CategoryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Subbanner = styled.div`
  margin-top: 40px;
`;

const Fproduct = styled.div`
  margin-top: 40px;
`;

const Post = styled.div`
  margin-top: 40px;
`;
