import { Col, Row } from 'antd';
import React from 'react';
import styles from '../styles/LayoutWeb.module.scss'

function LayoutWeb({ children }) {
    return (
        <Row
            justify='center'
            className={styles.main}
        >
            <Col xxl={14} xl={19} lg={23} sm={23}>
                {children}
            </Col>
        </Row>
    )
}

export default LayoutWeb