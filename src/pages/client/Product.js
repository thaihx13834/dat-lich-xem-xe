import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import {
  Menu,
  Layout,
  Descriptions,
  Button,
  PageHeader,
  Dropdown,
  Pagination,
} from "antd";
import React from "react";
import styled from "styled-components";

const Product = () => {
  const { Sider, Content } = Layout;
  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);

      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `Danh mục hãng xe ${key}`,

        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `Hãng xe${subKey}`,
          };
        }),
      };
    }
  );

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Sắp xếp giá giảm dần
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Sắp xếp giá tăng dần
            </a>
          ),
        },
      ]}
    />
  );
  return (
    <div className="bg-white">
      <div>
        <img
          src="https://picsum.photos/id/247/1520/300"
          className="d-block mx-auto img-fluid"
          alt="..."
        />
      </div>
      <ProductPage>
        <Sider className="site-layout-background " width={250}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
            items={items2}
          />
        </Sider>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <Fproduct className="px-5">
            <PageHeader
              ghost={false}
              title="Title"
              extra={[
                <Dropdown overlay={menu} placement="bottomRight">
                  <Button>Sắp xếp</Button>
                </Dropdown>,
                <Button key="1" type="primary">
                  Xóa sắp xếp
                </Button>,
              ]}
            ></PageHeader>
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
            <Pagi defaultCurrent={1} total={50} position="center" />
          </Fproduct>
        </Content>
      </ProductPage>
    </div>
  );
};

export default Product;

const ProductPage = styled(Layout)`
  background-color: white;
  margin-top: 50px;
  padding: 40px;
`;
const Fproduct = styled.div`
  margin-top: 40px;
`;

const Pagi = styled(Pagination)`
  display: flex;
  justify-content: flex-end;
`;
