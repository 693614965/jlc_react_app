/**
 * Created by Administrator on 2017/8/25.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {message, Modal} from "antd";
import {mapDispatchToProps, mapStateToProps} from "../../actions/mapDispatchToProps";
import CustomerPcbDataCollspseForm from "./CustomerPcbDataCollspseForm";
import CustomerSelectDeliveryAddress from "./CustomerSelectDeliveryAddress";


export default connect(mapStateToProps, mapDispatchToProps)(
    class CustomerPcbDataInfoOrderIndex extends Component {

        componentDidMount() {

            this.props.customer_pcb_data_info_order_info(this.props.selectedRowKeys[0])

        }

        onOrderSubmit() {
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    var params_val = {
                        pcb_info_id: this.props.selectedRowKeys[0],             //资料ID
                        delivery_id: this.props.currentDeliveryAddress.id,      //收货地址ID
                        express_type: values['express_type'],                   //快递类型
                        pay_type: values['pay_type'],                           //支付方式
                        total_amount: this.props.total_amount,                  //费用总和

                        engineering_cost: this.props.customerPcbOrderCostInfo[0].engineering_cost,   //工程费
                        imposition_cost: this.props.customerPcbOrderCostInfo[0].imposition_cost,     //拼版费
                        spray_cost: this.props.customerPcbOrderCostInfo[0].spray_cost,               //喷镀费
                        board_cost: this.props.customerPcbOrderCostInfo[0].board_cost,               //板费
                        test_cost: this.props.customerPcbOrderCostInfo[0].test_cost,                 //测试费
                        film_cost: this.props.customerPcbOrderCostInfo[0].film_cost,                 //菲林费
                        urgent_cost: this.props.customerPcbOrderCostInfo[0].urgent_cost,             //加急费
                        color_cost: this.props.customerPcbOrderCostInfo[0].color_cost,               //颜色费
                        large_board_cost: this.props.customerPcbOrderCostInfo[0].large_board_cost,   //大板费
                        tax_cost: this.props.customerPcbOrderCostInfo[0].tax_cost,                   //税费
                        express_cost: this.props.customerPcbOrderCostInfo[0].express_cost,           //快递费
                        steel_cost: this.props.customerPcbOrderCostInfo[0].steel_cost,                //钢网费
                        steel_express_cost: this.props.customerPcbOrderCostInfo[0].steel_express_cost //钢网运费
                    }
                    console.log(params_val)
                    this.props.customer_pcb_order_info_save(params_val);
                    setTimeout(() => {
                        this.props.history.push('/client/customer_pcb_order_list')
                    }, 1000);
                } else {
                    message.error('请选择 物流 ！')
                }
            })
        }

        onSelDyAddr() {
            this.props.model_open()
        }

        handleOk() {
            if (this.selectedRow != undefined) {
                this.props.customer_delivery_address_select(this.selectedRow)
            } else {
                this.props.model_close()
            }
        }

        handlerClose() {
            this.props.model_close()
        }

        rowSelected(selectedRow) {
            this.selectedRow = selectedRow
        }

        cusPcbOrderForm(form) {
            this.form = form
        }

        render() {
            return (
                <div>
                    <CustomerPcbDataCollspseForm
                        ref={this.cusPcbOrderForm.bind(this)}
                        initForm={this.props.initForm}
                        currentDeliveryAddress={this.props.currentDeliveryAddress}
                        total_amount={this.props.total_amount}
                        onOrderSubmit={this.onOrderSubmit.bind(this)}
                        onSelDyAddr={this.onSelDyAddr.bind(this)}
                    />
                    <Modal title="选择收货地址"
                           visible={this.props.visible}
                           onOk={this.handleOk.bind(this)}
                           onCancel={this.handlerClose.bind(this)}
                           okText="确定"
                           cancelText="关闭"
                           width={800}
                    >
                        <CustomerSelectDeliveryAddress
                            rowSelected={this.rowSelected.bind(this)}
                        />
                    </Modal>
                </div>
            )
        }

    }
)