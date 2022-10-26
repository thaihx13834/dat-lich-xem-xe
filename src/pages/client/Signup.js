import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
const Signup = () => {
  return (
    <SignupLayout className="">
      <section className="">
        <div className="container h-70">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 p-md-5">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Đăng kí
                      </p>
                      <Form
                        name="normal_login"
                        className="login-form"
                        layout="vertical"
                        initialValues={{ remember: true }}
                      >
                        <Form.Item
                          label="Họ tên"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Username!",
                            },
                          ]}
                        >
                          <Input
                            prefix={
                              <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                          />
                        </Form.Item>

                        <Form.Item
                          label="Địa chỉ"
                          name="address"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Username!",
                            },
                          ]}
                        >
                          <Input
                            prefix={
                              <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="địa chỉ"
                          />
                        </Form.Item>

                        <Form.Item
                          label="SĐT"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Username!",
                            },
                          ]}
                        >
                          <Input
                            prefix={
                              <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="số điện thoại"
                          />
                        </Form.Item>

                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Username!",
                            },
                          ]}
                        >
                          <Input
                            prefix={
                              <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                          />
                        </Form.Item>
                        <Form.Item
                          name="password"
                          label="Mật khẩu"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Password!",
                            },
                          ]}
                        >
                          <Input
                            prefix={
                              <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Item>

                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button d-block mb-2"
                            block
                          >
                            Đăng kí
                          </Button>
                          <a href="">Đăng nhập ngay</a>
                        </Form.Item>
                      </Form>
                    </div>
                    <Logo className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 justify-content-center display-1 px-2">
                      <h1 className="display-2 text-warning fw-bold">
                        <strong>VietPhu Luxury</strong>
                      </h1>
                    </Logo>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SignupLayout>
  );
};

export default Signup;

const SignupLayout = styled.div`
  padding: 50px;
`;

const Logo = styled.div`
  background-image: url("https://picsum.photos/id/217/1520/300");
`;
