import { Button, Checkbox, DatePicker, Form, Input } from "antd";
import React from "react";
import styled from "styled-components";
import bgBooking from "../../anh/bgbooking.jpg";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Booking = () => {
  return (
    <BookingPage url={bgBooking}>
      <section className="py-5">
        <div className="container h-70">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className=" text-black ">
                <div className="">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 p-md-5 card">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Đăng kí xem xe
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
                          <Input />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 0 }}>
                          <Form.Item
                            name="phone"
                            label="Số điện thoại"
                            style={{
                              display: "inline-block",
                              width: "calc(50% - 12px)",
                            }}
                            rules={[
                              {
                                required: true,
                                message: "Please input your Password!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <span
                            style={{
                              display: "inline-block",
                              width: "24px",
                              lineHeight: "32px",
                              textAlign: "center",
                            }}
                          ></span>
                          <Form.Item
                            label="Email"
                            name="email"
                            style={{
                              display: "inline-block",
                              width: "calc(50% - 12px)",
                            }}
                            rules={[
                              {
                                required: true,
                                message: "Please input your Username!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Form.Item>

                        <Form.Item
                          label="Chọn thời gian"
                          style={{ marginBottom: 0 }}
                        >
                          <Form.Item
                            style={{
                              display: "inline-block",
                              width: "calc(50% - 12px)",
                            }}
                          >
                            <DatePicker className="w-100" />
                          </Form.Item>
                          <span
                            style={{
                              display: "inline-block",
                              width: "24px",
                              lineHeight: "32px",
                              textAlign: "center",
                            }}
                          >
                            -
                          </span>
                          <Form.Item
                            style={{
                              display: "inline-block",
                              width: "calc(50% - 12px)",
                            }}
                          >
                            <DatePicker className="w-100" />
                          </Form.Item>
                        </Form.Item>

                        <Form.Item label="Ghi chú">
                          <Input.TextArea allowClear showCount />
                        </Form.Item>

                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button d-block mb-2"
                            block
                          >
                            Đăng kí đặt lịch
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                    <Logo className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-start order-1 order-lg-2    text-warning flex-column">
                      <h1 className="display-2 text-warning fw-bold display-1">
                        <strong>VietPhu Luxury</strong>
                      </h1>
                      <p className="d-block text-center fw-bold display-9 text-light">
                        là một trong những chuyên trang mua bán xe trực tuyến uy
                        tín hàng đầu hiện nay. Mong muốn của chúng tôi là mang
                        lại những trải nghiệm mua – bán xe ô tô cũ và mới được
                        nhanh chóng, kịp thời với giá tốt nhất cho người dùng
                        tại Việt Nam. Xem Xe cam kết hỗ trợ tối đa thông tin về
                        xe ô tô cho người có nhu cầu khi tìm đến.
                      </p>
                    </Logo>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BookingPage>
  );
};

export default Booking;
const BookingPage = styled.div`
  background: url(${(props) => props.url}) no-repeat center;
  height: auto;
`;

const Logo = styled.div`
  background: transparent;
  padding: 30px 60px 60px 60px;
`;
