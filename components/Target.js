import { Col, Progress, Row, Steps } from "antd";

function Target() {
    return (
        <Row gutter={[24, 24]}>
            <Col span={24} >
                <h1 className='extends__title'>
                    Mục tiêu
                </h1>
            </Col>
            <Col span={24}>
                <Row gutter={[8, 8]}>
                    <Col span={24}>
                        <div className="extends__title2">
                            <h3 className='extends__h3'>
                                Ngắn hạn
                            </h3>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Steps progressDot current={5} direction="vertical">
                            <Steps.Step
                                title={
                                    <h4 className="step__title">Học và rèn luyện HTMl</h4>
                                }
                                description={
                                    <>
                                        <p className="step__time">2/9/2021</p>
                                        <p className="step__description">Là một ngôn ngữ đánh dấu siêu văn bản nên HTML sẽ
                                            có vai trò xây dựng cấu trúc siêu văn bản trên một website, hoặc khai báo các tập tin
                                            kỹ thuật số như hình ảnh, video, nhạc. Học lập trình web với HTML sẽ định hướng cho mình
                                            muốn theo đuổi lập trình web.</p>
                                    </>
                                }
                            />

                            <Steps.Step
                                title={
                                    <h4 className="step__title">Học và rèn luyện CSS</h4>
                                }
                                description={
                                    <>
                                        <p className="step__time">2/9/2021</p>
                                        <p className="step__description">CSS tạo phong cách và định kiểu cho các yếu tố được
                                            viết dưới dạng ngôn ngữ đánh dấu HTML. Nó giúp người dùng tiết kiệm thời gian và công
                                            sức viết web nhờ khả năng điều khiển định dạng của nhiều trang web cùng lúc.</p>
                                    </>
                                }
                            />

                            <Steps.Step
                                title={
                                    <h4 className="step__title">Học và rèn luyện Javascript</h4>
                                }
                                description={
                                    <>
                                        <p className="step__time">Khi đã học được HTML và CSS</p>
                                        <p className="step__description">JavaScript là ngôn ngữ lập trình phổ biến nhất,
                                            Javascript có lương viện đảm bảo và có cơ hội việc làm nhiều hơn nên mình chọn
                                            Javascript để học .</p>
                                    </>
                                }
                            />

                            <Steps.Step
                                title={
                                    <h4 className="step__title">Học và rèn luyện React Js</h4>
                                }
                                description={
                                    <>
                                        <p className="step__time">Khi vững trãi HTML, CSS, Js</p>
                                        <p className="step__description">ReactJS giúp các doanh nghiệp tạo ra ứng dụng
                                            với cấu trúc UI tốt hơn nhằm nâng cao và tối ưu hóa UX. Với công nghệ này, họ
                                            có thể dễ dàng tăng tương tác của người dùng, đồng thời tỉ lệ click và chuyển
                                            đổi conversion cũng sẽ cao hơn.</p>
                                    </>
                                }
                            />
                        </Steps>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row gutter={[8, 8]}>
                    <Col span={24}>
                        <div className="extends__title2">
                            <h3 className='extends__h3'>
                                Khi ổn định kiến thức
                            </h3>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Steps progressDot current={5} direction="vertical">
                            <Steps.Step
                                title={
                                    <h4 className="step__title">Đi xin thực tập</h4>
                                }
                                description={
                                    <>
                                        <p className="step__time">2019 - nay</p>
                                        <p className="step__description">Thực tập là một cơ hội để mình học hỏi,
                                            áp dụng những lý thuyết được học vào thực tế và làm quen với môi trường làm
                                            việc quy củ và có được thành công cao hơn khi đi làm thực sự.</p>
                                    </>
                                }
                            />

                            <Steps.Step
                                title={
                                    <h4 className="step__title">Thực tập xong</h4>
                                }
                                description={
                                    <>
                                        <p className="step__time">2022 - nay</p>
                                        <p className="step__description">Tập trung bổ sung các vấn đề còn thiếu sót mình
                                            nhận ra được sau khi thực tập, nếu ổn định sẽ xin ở lại thử việc.</p>
                                    </>
                                }
                            />
                        </Steps>
                    </Col>
                </Row>
            </Col >
        </Row >
    )
}

export default Target