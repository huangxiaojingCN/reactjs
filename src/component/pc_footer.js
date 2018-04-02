import React from 'react';
import {Row, Col} from 'antd';
import '../css/pc/pc.css';

export default class PCFooter extends React.Component {
    render() {
        return(
                <Row>
                <Col span={2}></Col>
                <Col span={20} className="footer">
                &copy;&nbsp;2018 ReactNews. All Rights Reserved.
            </Col>
                <Col span={2}></Col>
            </Row>
        );
    };
}
