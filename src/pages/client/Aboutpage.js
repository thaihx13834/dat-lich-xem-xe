import React from "react";
import ImageCar from "../../asset/client/images/banner.jpg";
import styled from "styled-components";
import ImageVietPhu from "../../asset/client/images/309859039_120767944098749_4870836400605751931_n.jpg";
import "../../asset/client/css/about_page.css";

const Aboutpage = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <BannerAbout style={{ backgroundImage: `url(${ImageCar})` }}>
              <span className="h3 position-absolute title-page">
                Giới thiệu
              </span>
            </BannerAbout>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <VietPhuLuxury className="">
              <img src={ImageVietPhu} className="w-100" />
            </VietPhuLuxury>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Content>
              <ul>
                <li>
                  <h2>VIỆT PHÚ LUXURY OUTO</h2>
                </li>
                <li>
                  <p>Đại Lý ủy quyền của TC MOTOR</p>
                </li>
                <li>
                  <p>Hotline: 0906 886 660</p>
                </li>
                <li>
                  <p>Website: hyundaisaithanh.com</p>
                </li>
                <li>
                  <p>Địa chỉ: 1202 Phạm Văn Đồng, Linh Đông, Thủ Đức, TP.HCM</p>
                </li>
                <li>
                  <span>----------</span>
                </li>
                <li>
                  <p>
                    Hyundai Sài Thành – Đại Lý Uỷ Quyền Chính Thức của TC Motor
                    Việt Nam. Chúng tôi tự hào là một trong những đại lý kinh
                    doanh xe ô tô Hyundai lớn nhất tại Miền Nam.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    Hyundai Sài Thành được đầu tư bởi Tập đoàn Đầu tư Miền Nam,
                    chuyên cung cấp các dòng xe Hyundai đang phân phối tại Việt
                    Nam: Hyundai i10, Hyundai Tucson, Hyundai Santa Fe, Hyundai
                    Elantra, Hyundai Kona, Hyundai Accent,…
                  </p>
                </li>
                <li>
                  <h2>Tầm Nhìn Thương Hiệu</h2>
                </li>
                <li>
                  <p>Đại Lý ủy quyền của TC MOTOR</p>
                </li>
                <li>
                  <p>
                    Trở thành đại lý phân phối xe Hyundai hàng đầu Việt Nam,
                    đồng thời là đơn vị uy tín đáp ứng đầy đủ và tốt nhất nhu
                    cầu của khách hàng.
                  </p>
                </li>
                <li>
                  <h2>Sứ Mệnh Thương Hiệu</h2>
                </li>
                <li>
                  <p>
                    Mang sản phẩm và dịch vụ sửa chữa chất lượng, uy tín nhất
                    đến với từng khách hàng. Với mong muốn đem đến trải nghiệm
                    và sự hài lòng tuyệt đối mỗi khi khách hàng đặt chân đến
                    showroom Sài Thành.
                  </p>
                </li>

                <li>
                  <p>
                    Đại lý Hyundai Sài Thành tại TP.HCM luôn đặt sự hài lòng của
                    khách hàng lên hàng đầu, cung cấp chính hãng những mẫu xe
                    Hyundai sang trọng & tốt nhất.
                  </p>
                </li>
                <li>
                  <p>
                    Hyundai Sài Thành được đầu tư bởi Tập đoàn Đầu tư Miền Nam,
                    chuyên cung cấp các dòng xe Hyundai đang phân phối tại Việt
                    Nam: Hyundai i10, Hyundai Tucson, Hyundai Santa Fe, Hyundai
                    Elantra, Hyundai Kona, Hyundai Accent,…
                  </p>
                </li>
              </ul>
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
const BannerAbout = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const VietPhuLuxury = styled.div`
  margin-top: 50px;
`;
const Content = styled.div`
  margin-top: 50px;
`;
