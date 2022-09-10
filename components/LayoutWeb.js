import { Col, Row } from 'antd';
import React from 'react';
import styles from '../styles/LayoutWeb.module.scss'

function LayoutWeb({ children }) {
    return (
        <Row
            justify='center'
            className={styles.main}
        >
            <Col span={14} >
                {children}
            </Col>
        </Row>
    )
}

export default LayoutWeb