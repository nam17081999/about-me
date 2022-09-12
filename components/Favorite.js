import { Col, Progress, Row, Steps } from "antd";
import Image from "next/image";

function Favorite() {
    return (
        <Row gutter={[24, 24]}>
            <Col span={24} >
                <h1 className='extends__title'>
                    Sở thích
                </h1>
            </Col>
            <Col span={24}>
                <Row gutter={[8, 8]}>
                    <Col span={24}>
                        <div className="extends__title2">
                            <div className="img_favorite">
                                <Image
                                    src={require('./../img/game.png')}
                                    alt='game'
                                />
                            </div>
                            <h2 className="extends__h2">Chơi game</h2>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="favorite-content">
                            <div className="banner">
                                <Image
                                    src={require('./../img/lol.jpg')}
                                    alt='lien minh'
                                    width={190}
                                    height={100}
                                />
                            </div>
                            <div>
                                <h4 className="name_project">Liên Minh Huyền Thoại</h4>
                                <p>Liên Minh Huyền Thoại là một trò chơi video thể loại đấu trường trận chiến trực tuyến nhiều người chơi được Riot Games phát triển</p>
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="favorite-content">
                            <div className="banner">
                                <Image
                                    src={require('./../img/val.jpg')}
                                    alt='valorant'
                                    width={190}
                                    height={100}
                                />
                            </div>
                            <div>
                                <h4 className="name_project">Valorant</h4>
                                <p>Valorant là tựa game bắn súng góc nhìn thứ nhất (FPS) miễn phí được Riot Games phát triển và phát hành.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>

            <Col span={24}>
                <Row gutter={[8, 8]}>
                    <Col span={24}>
                        <div className="extends__title2">
                            <div className="img_favorite">
                                <Image
                                    src={require('./../img/phim.png')}
                                    alt='phim'
                                />
                            </div>
                            <h2 className="extends__h2">Xem phim</h2>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="favorite-content">
                            <div className="banner">
                                <Image
                                    src={require('./../img/avtjpg.jpg')}
                                    alt='lien minh'
                                    width={190}
                                    height={100}
                                />
                            </div>
                            <div>
                                <h4 className="name_project">Avatar</h4>
                                <p>Avatar là một bộ phim khoa học viễn tưởng của Mỹ năm 2009 do James Cameron viết kịch bản và đạo diễn, từng là phim có doanh thu cao nhất mọi thười đại.</p>
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="favorite-content">
                            <div className="banner">
                                <Image
                                    src={require('./../img/arcane.jpg')}
                                    alt='lien minh'
                                    width={190}
                                    height={100}
                                />
                            </div>
                            <div>
                                <h4 className="name_project">Arcane</h4>
                                <p>Arcane là loạt phim hoạt hình trực tuyến Pháp-Mỹ ra mắt năm 2021. Được miêu tả là một &quot;chuỗi sự kiện&quot;, phim lấy bối cảnh của vũ trụ Liên minh huyền thoại.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Favorite