/**
 * Created by Administrator on 2017/8/17.
 */
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Dropdown, Icon, Menu,Row,Col} from "antd";


class AppHeader extends Component{
    render(){
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/client/customer_personnel_info">个人信息</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/client/account_info">账户信息</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/client/account_info">修改密码</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/client/logout">退出</Link>
                </Menu.Item>
            </Menu>
        );
        return(
            <Row>
                <Col sm={22}>
                    <h3>嘉立创客户服务系统</h3>
                </Col>
                <Col sm={2}>
                    <Icon type="user" />
                    <Dropdown overlay={menu}>
                        <a  href="#">
                            高峰 <Icon type="down" />
                        </a>
                    </Dropdown>
                </Col>
            </Row>
        );
    }
}


export default AppHeader;