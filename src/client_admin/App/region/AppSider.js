/**
 * Created by Administrator on 2017/8/17.
 */
import React, {Component} from "react";
import {Icon, Menu} from "antd";
import {Link} from "react-router-dom";
const {SubMenu} = Menu;


class AppSider extends Component {

    handleClick(e) {
        console.log('click ', e);
    }

    render() {
        return (
            <div>
                <Menu
                    onClick={this.handleClick.bind(this)}
                    mode="inline"
                    defaultSelectedKeys={['customer_pcb_data_info_list']}
                    defaultOpenKeys={['pcb']}
                    style={{height: '100%', borderRight: 0}}
                >
                    <SubMenu key="customer_personnel_info" title={<span><Icon type="mail"/><span>客户资料</span></span>}>
                        <Menu.Item key="show_customer_personnel_info"><Link to='/client/customer_personnel_info'/><Icon
                            type="mail"/>客户个人资料</Menu.Item>
                        <Menu.Item key="customer_delivery_address_info"><Link
                            to='/client/customer_delivery_address_info'/><Icon
                            type="mail"/>收货地址管理</Menu.Item>
                        <Menu.Item key="customer_personnel_setting"><Icon type="mail"/>设置</Menu.Item>
                    </SubMenu>
                    <SubMenu key="pcb" title={<span><Icon type="mail"/><span>我的PCB管理</span></span>}>
                        <Menu.Item key="customer_pcb_data_info_list"><Link
                            to='/client/customer_pcb_data_info_list'/><Icon
                            type="mail"/>PCB资料管理</Menu.Item>
                        <Menu.Item key="customer_pcb_order_list"><Link
                            to='/client/customer_pcb_order_list'/><Icon
                            type="mail"/>PCB订单管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="SMT" title={<span><Icon type="mail"/><span>SMT贴片管理</span></span>}>
                        <Menu.Item key="smt_add_order"><Icon type="mail"/>SMT在线下单</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default AppSider;