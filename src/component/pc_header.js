import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import reactNewsIcon from '../images/if_news_37113.png';
import pccss from '../css/pc/pc.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            current: "xinwen"
        }
    }

    render() {
        return(
                <header>
                <Row>
                <Col span={2}></Col>
                <Col span={4}>
                <a href="/" className="logo">
                <img src={reactNewsIcon} alt="logo" className="pccss"/>
                <span>ReactNews</span>
                </a>
                </Col>
                <Col span={16}>
                <Menu mode="horizontal"
           // onClick={this.handleClick}
            selectedKeys={[this.state.current]}
                >
                <Menu.Item key="xinwen">
                <Icon type="mail" />新闻
            </Menu.Item>
                <Menu.Item key="shehui">
                <Icon type="appstore" />社会
            </Menu.Item>
                <Menu.Item key="guonei">
                <Icon type="mail" />国内
            </Menu.Item>
                <Menu.Item key="guoji">
                <Icon type="mail" />国际
            </Menu.Item>
                <Menu.Item key="yule">
                <Icon type="mail" />娱乐
            </Menu.Item>
                <Menu.Item key="tiyu">
                <Icon type="mail" />体育
            </Menu.Item>
                <Menu.Item key="keji">
                <Icon type="appstore"/> 科技
            </Menu.Item>
                <Menu.Item key="shishang">
                <Icon type="mail"/> 时尚
            </Menu.Item>
                </Menu>
                </Col>
                <Col span={2}></Col>
                </Row>
                </header>
        );
    };
}
