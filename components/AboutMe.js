import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Carousel, Col, Row } from "antd";
import Img from "../components/Img";
import ImgProject from "../components/ImgProject";

function AboutMe() {

    return (
        <Row gutter={[24, 24]}>
            <Col span={24} >
                <h1 className='extends__title'>
                    Giới thiệu
                </h1>
            </Col>
            <Col>
                <p className="extend-item-para">Mình từng là một sinh viên của trường đại học Giao Thông Vận Tải - Hà Nội. Mình đang học tập, theo đuổi ngành Công Nghệ Thông Tin.</p>
                <p className="extend-item-para"> Hiện tại mình đang làm việc và học tập tại Công Ty Cổ Phần Giải Pháp Netko</p>
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
                                    <h4 className="name_project">Netko Quiz</h4>
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
                                    <h4 className="name_project">Play Music</h4>
                                </Col>
                            </Row>
                        </a>
                    </Col>
                    <Col span={12}>
                        <a className='iconscontainer' href="https://www.youtube.com/c/NamT%C6%B0%E1%BB%9BcGaming" rel="noreferrer" target="_blank">
                            <Row justify="center" gutter={[8, 8]}>
                                <Col>
                                    <ImgProject src='youtube' />
                                </Col>
                                <Col>
                                    <h4 className="name_project">Kênh Youtube</h4>
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
                                <Col lg={4} md={5} sm={6}>
                                    <Img src='jack-ma' />
                                </Col>
                                <Col lg={20} md={19} sm={18}>
                                    <Row align='middle'>
                                        <Col span={24}>
                                            <h4 className="name_project">Jack Ma</h4>
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
                                <Col lg={4} md={5} sm={6}>
                                    <Img src='bill-gates' />
                                </Col>
                                <Col lg={20} md={19} sm={18}>
                                    <Row align='middle'>
                                        <Col span={24}>
                                            <h4 className="name_project">Bill Gates</h4>
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
    )
}

export default AboutMe