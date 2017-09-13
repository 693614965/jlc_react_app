/**
 * Created by Administrator on 2017/8/18.
 */
import React, {Component} from "react";
import {Button, Icon, Modal} from "antd";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../actions/mapDispatchToProps";
import CustomerDeliveryAddressTable from "./CustomerDeliveryAddressTable";
import CustomerDeliveryAddressForm from "./CustomerDeliveryAddressForm";


export default connect(mapStateToProps, mapDispatchToProps)(
    class CustomerDeliveryAddressInfo extends Component {

        onAddClick() {
            this.props.model_open()
        }

        handleOk() {
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    this.props.customer_delivery_address_save(values)
                }
            })
        }

        handlerClose() {
            this.props.model_close()
        }

        cusDeliveryForm(form) {
            this.form = form
        }

        render() {

            return (
                <div>
                    <div style={{marginBottom: 16}}>
                        <Button type="primary" onClick={this.onAddClick.bind(this)}><Icon
                            type="plus-circle"/>新增地址</Button>&nbsp;&nbsp;
                    </div>
                    <CustomerDeliveryAddressTable/>
                    <Modal title="编辑收货地址信息"
                           visible={this.props.visible}
                           onOk={this.handleOk.bind(this)}
                           onCancel={this.handlerClose.bind(this)}
                           okText="确定"
                           cancelText="关闭"
                    >
                        <CustomerDeliveryAddressForm
                            ref={this.cusDeliveryForm.bind(this)}
                            initForm={this.props.initForm}
                        />
                    </Modal>
                </div>
            )
        }
    }
)