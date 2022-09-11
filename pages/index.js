import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Carousel, Col, Row } from "antd";
import Script from "next/script";
import { FaFacebookF, FaGithub, FaSteam, FaTiktok } from "react-icons/fa";
import Avatar from "../components/Avatar";
import Img from "../components/Img";
import ImgProject from "../components/ImgProject";
import LayoutWeb from "../components/LayoutWeb";

export default function Home() {
  return (
    <LayoutWeb>
      <Row gutter={[32, 32]}>
        <Col span={24} >
          <div className='intro'>
            <Row>
              <Col span={12} className='intro__left'>
                <Row gutter={[48, 48]} align='middle'>
                  <Col span={8}>
                    <Avatar />
                  </Col>
                  <Col span={16}>
                    <Row justify="center">
                      <Col span={20}>
                        <Row className='intro__info' gutter={[8, 8]}>
                          <Col span={24}>
                            <h1 className='intro__name'>Hoàng Đức Nam</h1>
                          </Col>
                          <Col span={24}>
                            Developer
                          </Col>
                        </Row>
                        <Row>
                          <Col className='intro__link'>
                            <Row gutter={[16, 16]}>
                              <Col>
                                <a className='iconscontainer' href="https://www.facebook.com/mr.namtuoc/" rel="noreferrer" target="_blank">
                                  <div className='icon facebook'>
                                    <FaFacebookF />
                                    <span className='content facebook'>Facebook</span>
                                  </div>
                                </a>
                              </Col>
                              <Col>
                                <a className='iconscontainer' href="https://www.tiktok.com/@namtuoc" rel="noreferrer" target="_blank">
                                  <div className='icon tiktok'>
                                    <FaTiktok />
                                    <span className='content tiktok'>TikTok</span>
                                  </div>
                                </a>
                              </Col>
                              <Col>
                                <a className='iconscontainer' href="https://steamcommunity.com/id/wibu911/" rel="noreferrer" target="_blank">
                                  <div className='icon steam'>
                                    <FaSteam />
                                    <span className='content steam'>Steam</span>
                                  </div>
                                </a>
                              </Col>
                              <Col>
                                <a className='iconscontainer' href="https://github.com/nam1708" rel="noreferrer" target="_blank">
                                  <div className='icon github' >
                                    <FaGithub />
                                    <span className='content github'>GitHub</span>
                                  </div>
                                </a>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={10} className='intro__right' offset={2}>
                <Row align='middle' gutter={[32, 32]} justify='space-evenly'>
                  <Col span={12}>
                    <p className='key'>email</p>
                    nam17081999@gmail.com
                  </Col>
                  <Col span={12}>
                    <p className='key'>ngày sinh</p>
                    17/08/1999
                  </Col>
                  <Col span={12}>
                    <p className='key'>số điện thoại</p>
                    088666****
                  </Col>
                  <Col span={12}>
                    <p className='key'>địa chỉ</p>
                    Hoài Đức - Hà Tây
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={24}>
          <Row gutter={[32, 32]}>
            <Col span={4}>
              <div className='menu'>
                <div className='menu__container'>
                  <div className='menu__item'>
                    <Script src="https://cdn.lordicon.com/xdjxvujz.js" />
                    <lord-icon
                      src="https://cdn.lordicon.com/eszyyflr.json"
                      trigger="hover"
                      colors="primary:#3080e8,secondary:#4030e8"
                      style={{ width: '65px', height: '65px' }}>
                    </lord-icon>
                    bản thân
                  </div>
                  <div className='menu__item'>
                    <Script src="https://cdn.lordicon.com/xdjxvujz.js" />
                    <lord-icon
                      src="https://cdn.lordicon.com/wxnxiano.json"
                      trigger="morph"
                      colors="primary:#3080e8,secondary:#4030e8"
                      style={{ width: '65px', height: '65px' }}>
                    </lord-icon>
                    học vấn
                  </div>
                  <div className='menu__item'>
                    <Script src="https://cdn.lordicon.com/xdjxvujz.js" />
                    <lord-icon
                      src="https://cdn.lordicon.com/iltqorsz.json"
                      trigger="hover"
                      colors="primary:#3080e8,secondary:#4030e8"
                      style={{ width: '65px', height: '65px' }}>
                    </lord-icon>
                    mục tiêu
                  </div>
                  <div className='menu__item'>
                    <Script src="https://cdn.lordicon.com/xdjxvujz.js" />
                    <lord-icon
                      src="https://cdn.lordicon.com/rjzlnunf.json"
                      trigger="hover"
                      colors="primary:#3080e8,secondary:#4030e8"
                      style={{ width: '65px', height: '65px' }}>
                    </lord-icon>
                    sở thích
                  </div>
                </div>
              </div>
            </Col>
            <Col span={20}>
              <div className='extends'>
                <Row gutter={[24, 24]}>
                  <Col span={24} >
                    <h1 className='extends__title'>
                      Giới thiệu
                    </h1>
                  </Col>
                  <Col>
                    <p>Mình từng là một sinh viên của trường đại học Giao Thông Vận Tải - Hà Nội. Mình đang học tập, theo đuổi ngành Công Nghệ Thông Tin.</p>
                    <br />
                    <p> Hiện tại mình đang làm việc và học tập tại  Công Ty Cổ Phần Giải Pháp Netko</p>
                  </Col>
                  <Col span={24}>
                    <h3 className='extends__h3'>
                      Mình đã làm được
                    </h3>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[48, 48]}>
                      <Col span={12}>
                        <a className='iconscontainer' href="https://quiz.netko.vn/" rel="noreferrer" target="_blank">
                          <Row justify="center" gutter={[8, 8]}>
                            <Col>
                              <ImgProject src='quiz' />
                            </Col>
                            <Col>
                              <h2 className="name_project">Netko Quiz</h2>
                            </Col>
                          </Row>
                        </a>
                      </Col>
                      <Col span={12}>
                        <a className='iconscontainer' href="https://nammusic.herokuapp.com/" rel="noreferrer" target="_blank">
                          <Row justify="center" gutter={[8, 8]}>
                            <Col>
                              <ImgProject src='music' />
                            </Col>
                            <Col>
                              <h2 className="name_project">Play Music</h2>
                            </Col>
                          </Row>
                        </a>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <h3 className='extends__h3'>
                      Những câu nói cho mình cảm hứng
                    </h3>
                  </Col>
                  <Col>
                    <Carousel autoplay effect="fade" arrows prevArrow={<CaretLeftOutlined />} nextArrow={<CaretRightOutlined />}>
                      <div>
                        <h3 className='carousel__content'>
                          <Row gutter={[16, 16]}>
                            <Col lg={3} md={4} sm={5}>
                              <Img src='jack-ma' />
                            </Col>
                            <Col lg={21} md={20} sm={19}>
                              <Row align='middle'>
                                <Col span={24}>
                                  Jack Ma
                                </Col>
                                <Col>
                                  “Gà gáy thì trời sáng mà gà không gáy thì trời cũng sẽ sáng. Trời sáng hay không đâu phụ thuộc vào con gà. Vấn đề là trời sáng ai sẽ là người thức tỉnh.”
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </h3>
                      </div>
                      <div>
                        <h3 className='carousel__content'>
                          <Row gutter={[16, 16]}>
                            <Col lg={3} md={4} sm={5}>
                              <Img src='bill-gates' />
                            </Col>
                            <Col lg={21} md={20} sm={19}>
                              <Row align='middle'>
                                <Col span={24}>
                                  Bill Gates
                                </Col>
                                <Col>
                                  “Nếu bạn sinh ra trong nghèo khó, đó không phải là lỗi của bạn. Nhưng nếu bạn chết trong nghèo khó, thì đó là lỗi của bạn”
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </h3>
                      </div>
                    </Carousel></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row >
    </LayoutWeb >
  )
}
