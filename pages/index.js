import { Col, Row } from "antd";
import Script from "next/script";
import { useState } from "react";
import { FaFacebookF, FaGithub, FaYoutube, FaTiktok } from "react-icons/fa";
import AboutMe from "../components/AboutMe";
import Avatar from "../components/Avatar";
import Education from "../components/Education";
import Favorite from "../components/Favorite";
import LayoutWeb from "../components/LayoutWeb";
import Target from "../components/Target";

export default function Home() {

  const [render, setRender] = useState({
    aboutMe: true,
    education: false,
    target: false,
    favorite: false
  })

  const clickAboutMe = () => {
    setRender({
      aboutMe: true,
      education: false,
      target: false,
      favorite: false
    })
  }

  const clickEducation = () => {
    setRender({
      education: true,
      aboutMe: false,
      target: false,
      favorite: false
    })
  }

  const clickTarget = () => {
    setRender({
      education: false,
      aboutMe: false,
      target: true,
      favorite: false
    })
  }

  const clickFavorite = () => {
    setRender({
      education: false,
      aboutMe: false,
      target: false,
      favorite: true
    })
  }

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
                                <a className='iconscontainer' href="https://www.youtube.com/c/NamT%C6%B0%E1%BB%9BcGaming" rel="noreferrer" target="_blank">
                                  <div className='icon youtube'>
                                    <FaYoutube />
                                    <span className='content youtube'>Youtube</span>
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
                  <div className={render.aboutMe ? 'menu__item menu__item-focus' : 'menu__item'} onClick={clickAboutMe}>
                    <Script src="https://cdn.lordicon.com/xdjxvujz.js" />
                    <lord-icon
                      src="https://cdn.lordicon.com/eszyyflr.json"
                      trigger="hover"
                      colors="primary:#3080e8,secondary:#4030e8"
                      style={{ width: '65px', height: '65px' }}>
                    </lord-icon>
                    bản thân
                  </div>
                  <div className={render.education ? 'menu__item menu__item-focus' : 'menu__item'} onClick={clickEducation}>
                    <Script src="https://cdn.lordicon.com/xdjxvujz.js" />
                    <lord-icon
                      src="https://cdn.lordicon.com/wxnxiano.json"
                      trigger="morph"
                      colors="primary:#3080e8,secondary:#4030e8"
                      style={{ width: '65px', height: '65px' }}>
                    </lord-icon>
                    học vấn
                  </div>
                  <div className={render.target ? 'menu__item menu__item-focus' : 'menu__item'} onClick={clickTarget}>
                    <Script src="https://cdn.lordicon.com/xdjxvujz.js" />
                    <lord-icon
                      src="https://cdn.lordicon.com/iltqorsz.json"
                      trigger="hover"
                      colors="primary:#3080e8,secondary:#4030e8"
                      style={{ width: '65px', height: '65px' }}>
                    </lord-icon>
                    mục tiêu
                  </div>
                  <div className={render.favorite ? 'menu__item menu__item-focus' : 'menu__item'} onClick={clickFavorite}>
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
                {render.aboutMe && <AboutMe />}
                {render.education && <Education />}
                {render.target && <Target />}
                {render.favorite && <Favorite />}
              </div>
            </Col>
          </Row>
        </Col>
      </Row >
    </LayoutWeb >
  )
}
