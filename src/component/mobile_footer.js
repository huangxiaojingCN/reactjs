import React from 'react';
import {Row, Col} from 'antd';

export default class MobileFooter extends React.Component {
    render() {
        return(
                <div>
                <Row>
                <Col span={2}></Col>
                <Col span={20} className="mobilefooter">
                &copy;&nbsp;2018 ReactNews. All Rights Reserved. 
            </Col>
                <Col span={2}></Col>
            </Row>
            </div>
        );
    };
}
