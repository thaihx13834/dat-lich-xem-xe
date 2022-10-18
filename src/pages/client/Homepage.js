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
        <div class="row">
          <div class="col-sm-6  text-white px-0">
            <img
              src="https://picsum.photos/id/517/780/220"
              alt=".."
              className="d-block mx-auto img-fluid"
            />
          </div>
          <div class="col-sm-6   text-white px-0">
            <img
              src="https://picsum.photos/id/107/780/220"
              alt=".."
              className="d-block mx-auto img-fluid"
            />
          </div>
        </div>
      </Subbanner>
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
