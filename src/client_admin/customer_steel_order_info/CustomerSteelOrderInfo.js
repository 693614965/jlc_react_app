/**
 * Created by Administrator on 2017/9/9.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../actions/mapDispatchToProps";
import {Tabs,message} from "antd";
import CustomerSteelTable from "./CustomerSteelTable";
import CustomerSteelOrderForm from "./CustomerSteelOrderForm";
const TabPane = Tabs.TabPane;

export default connect(mapStateToProps, mapDispatchToProps)(
    class CustomerSteelOrderInfo extends Component {

        state = {
            currentSteelId:[]
        }

        componentDidMount() {

        }
        steelOrderForm(form){
            this.form = form
        }
        // 提交 钢网订单
        onSteelOrderSubmit() {
            this.form.validateFieldsAndScroll((err,values) => {
                if (!err){
                    console.log(values)
                    if (!this.props.selectedRowKeys[0]){
                        message.error('请选择一个PCB订单 ，然后 才能 下 钢网 订单')
                        return
                    }
                    if (!this.state.currentSteelId[0]){
                        message.error('请选择你要购买的钢网，谢谢')
                        return
                    }
                    values['customer_pcb_order_id'] = this.props.selectedRowKeys[0]
                    values['steel_produce_info_id'] = this.state.currentSteelId[0]
                    this.props.customer_steel_order_info_add(values)
                    setTimeout(() => {
                        this.props.history.push('/client/customer_pcb_order_list')
                    }, 1000);
                }
            })
        }
        selectedSteel(currentSteelId){
            this.setState({
                currentSteelId:[currentSteelId]
            })
        }

        render() {
            return (
                <div>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="选择要购买的钢网" key="1">
                            <CustomerSteelTable
                                currentSteelId={this.state.currentSteelId}
                                selectedSteel={this.selectedSteel.bind(this)}
                            />
                        </TabPane>
                        <TabPane tab="其他选项" key="2">
                            <CustomerSteelOrderForm
                                ref={this.steelOrderForm.bind(this)}
                                initForm={this.props.initForm}
                                onSteelOrderSubmit={this.onSteelOrderSubmit.bind(this)}
                            />
                        </TabPane>
                    </Tabs>
                </div>
            )
        }
    }
)