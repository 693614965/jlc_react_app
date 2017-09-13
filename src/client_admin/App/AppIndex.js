/**
 * Created by Administrator on 2017/8/17.
 */
import React, {Component} from "react";
import {Route} from "react-router-dom";
import {Layout} from "antd";
import AppHeader from "./region/AppHeader";
import AppSider from "./region/AppSider";
import CustomerPersonnelInfoIndex from "../customer_personnel_info/CustomerPersonnelInfoIndex";
import CustomerDeliveryAddressInfo from "../customer_delivery_address_info/CustomerDeliveryAddressInfo";
import CustomerPcbDataInfoList from "../customer_pcb_data_info_list/CustomerPcbDataInfoList";
import CustomerPcbDataInfoOrderIndex from "../customer_pcb_data_info_order/CustomerPcbDataInfoOrderIndex";
import CustomerPcbOrderInfoIndex from "../customer_pcb_order_list/CustomerPcbOrderInfoIndex";
import CustomerSteelOrderInfo from "../customer_steel_order_info/CustomerSteelOrderInfo";
import CustomerPcbOrderDetailIndex from '../customer_pcb_order_detail/CustomerPcbOrderDetailIndex'
const {Header, Sider, Content} = Layout


class AppIndex extends Component {
    render() {
        return (
            <Layout>
                <Header style={{background: '#00BCD4'}}>
                    <AppHeader/>
                </Header>
                <Layout>
                    <Sider width={200} style={{background: '#fff'}}>
                        <AppSider/>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                            <Route path='/client/customer_personnel_info' component={CustomerPersonnelInfoIndex}/>

                            <Route path='/client/customer_delivery_address_info'
                                   component={CustomerDeliveryAddressInfo}/>

                            <Route path='/client/customer_pcb_data_info_list' component={CustomerPcbDataInfoList}/>

                            <Route path='/client/customer_pcb_data_info_order'
                                   component={CustomerPcbDataInfoOrderIndex}/>

                            <Route path='/client/customer_pcb_order_list' component={CustomerPcbOrderInfoIndex}/>

                            <Route path='/client/customer_pcb_order_detail' component={CustomerPcbOrderDetailIndex}/>

                            <Route path="/client/customer_steel_order_info" component={CustomerSteelOrderInfo}/>

                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default AppIndex;