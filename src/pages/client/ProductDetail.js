import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import anh1 from "../../anh/ppo.jpg";

const ProductDetail = () => {
  return (
    <div className="bg-light">
      <div className="categories-title text-center my-5">
        <h2 className="">Chi tiết sản phẩm Car-name</h2>
      </div>
      <PageContent>
        <div className="row px-4">
          <div className="col-sm-5">
            <img
              src={anh1}
              alt=".."
              className="d-block mx-auto img-fluid w-100"
            />
            <div className="row justify-content-between m-4">
              <div className="col-sm-2">
                <img
                  src="https://loremflickr.com/320/240/dog"
                  alt=".."
                  className="d-block mx-auto img-fluid"
                />
              </div>

              <div className="col-sm-2">
                <img
                  src="https://loremflickr.com/320/240/dog"
                  alt=".."
                  className="d-block mx-auto img-fluid"
                />
              </div>

              <div className="col-sm-2">
                <img
                  src="https://loremflickr.com/320/240/dog"
                  alt=".."
                  className="d-block mx-auto img-fluid"
                />
              </div>

              <div className="col-sm-2">
                <img
                  src="https://loremflickr.com/320/240/dog"
                  alt=".."
                  className="d-block mx-auto img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-7 mw-600">
            <h3>Tên sản phẩm</h3>
            <p>
              10 fresh ready to use templates We are going further and giving to
              you ready to use templates! Use them as you like, as an
              inspiration, prototype or final product for your customers.
            </p>
            <h4 className="my-2">
              Price: <strong>10000000 vnđ</strong>
            </h4>
            <h5>Hãng xe: Toyota</h5>

            <div className=" my-3 row">
              <button
                className="btn btn-outline-success col-sm-2 mx-2"
                type="button"
              >
                Đặt lịch xem
              </button>
              <button
                className="btn btn-outline-success col-sm-2"
                type="button"
              >
                Đặt cọc
              </button>
            </div>
          </div>
        </div>
        <div className="px-4">
          <h3 className="text-center m-4">Mô tả sản phẩm</h3>
          <p>
            Được mệnh danh là “thần gió”, chiếc Pagani Huayra quả thực xứng đáng
            là một kiệt tác trong làng xe. Pagani Huayra sở hữu ngôn ngữ thiết
            kế hiện đại với các đường nét và góc cạnh thanh lịch nhưng không kém
            phần mạnh mẽ. Pagani Huayra được trang bị động cơ V12 0,6L sản sinh
            công suất lên tới 700 mã lực và mô-men xoắn cực đại 728 Nm. Xe có
            khả năng tăng tốc từ 0 – 100 km/h chỉ trong 2,8 giây và đạt vận tốc
            tối đa 370 km/h. Thần gió Pagani Huayra được sản xuất với số lượng
            có hạn, chỉ 100 chiếc được bán ra trên toàn thế giới. Aston Martin
            DBS Superleggera Hãng Aston Martin từ lâu đã nổi tiếng “mát tay”
            trong việc thiết kế những mẫu xe đẹp. Tuy nhiên mãi đến thập kỉ qua,
            những thiết kế của hãng mới thực sự bùng nổ khi một loạt mẫu xe mới,
            trong đó có chiếc DBS Superleggera “độc nhất vô nhị” được tung ra
            thị trường. DBS Superleggera sở hữu phần thiết kế ngoại và nội thất
            gần như hoàn hảo cùng những đường nét cuốn hút. DBS Superleggera còn
            là chiếc siêu xe mạnh mẽ với động cơ V12 5,2L, sản sinh công suất
            lên tới 715 mã lực và mô-men xoắn cực đại 900 Nm. Tại thị trường Mỹ,
            DBS Superleggera có giá khởi điểm từ 329.100 USD (khoảng 7,6 tỷ
            đồng).
          </p>
          <img
            src="https://picsum.photos/id/247/1520/300"
            className="d-block mx-auto img-fluid my-3"
            alt="..."
          />

          <p>
            Được mệnh danh là “thần gió”, chiếc Pagani Huayra quả thực xứng đáng
            là một kiệt tác trong làng xe. Pagani Huayra sở hữu ngôn ngữ thiết
            kế hiện đại với các đường nét và góc cạnh thanh lịch nhưng không kém
            phần mạnh mẽ. Pagani Huayra được trang bị động cơ V12 0,6L sản sinh
            công suất lên tới 700 mã lực và mô-men xoắn cực đại 728 Nm. Xe có
            khả năng tăng tốc từ 0 – 100 km/h chỉ trong 2,8 giây và đạt vận tốc
            tối đa 370 km/h. Thần gió Pagani Huayra được sản xuất với số lượng
            có hạn, chỉ 100 chiếc được bán ra trên toàn thế giới. Aston Martin
            DBS Superleggera Hãng Aston Martin từ lâu đã nổi tiếng “mát tay”
            trong việc thiết kế những mẫu xe đẹp. Tuy nhiên mãi đến thập kỉ qua,
            những thiết kế của hãng mới thực sự bùng nổ khi một loạt mẫu xe mới,
            trong đó có chiếc DBS Superleggera “độc nhất vô nhị” được tung ra
            thị trường. DBS Superleggera sở hữu phần thiết kế ngoại và nội thất
            gần như hoàn hảo cùng những đường nét cuốn hút. DBS Superleggera còn
            là chiếc siêu xe mạnh mẽ với động cơ V12 5,2L, sản sinh công suất
            lên tới 715 mã lực và mô-men xoắn cực đại 900 Nm. Tại thị trường Mỹ,
            DBS Superleggera có giá khởi điểm từ 329.100 USD (khoảng 7,6 tỷ
            đồng).
          </p>
        </div>

        <div className="withcategory px-4 my-5">
          <div className="categories-title text-center my-3  d-flex  justify-content-between">
            <h2 className="">Sản phẩm cùng hãng</h2>
            <a href="#">Xem thêm</a>
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
            </div>
          </section>
        </div>
      </PageContent>
    </div>
  );
};

export default ProductDetail;

const PageContent = styled.div`
  padding: 40px;
`;
