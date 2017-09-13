/**
 * Created by Administrator on 2017/8/29.
 */
import React, {Component} from "react";
import {Collapse, Form, Input} from "antd";
import CustomerPcbOrderCostTable from "../customer_pcb_data_info_order/CustomerPcbOrderCostTable";
const FormItem = Form.Item;
const Panel = Collapse.Panel;


export default Form.create({
    mapPropsToFields(props){
        return {
            id: {
                value: props.initForm.id
            }
        }
    }
})(
    class CustomerPcbOrderDetailInfo extends Component {

        render() {

            const {getFieldDecorator} = this.props.form;

            const formItemLayout = {
                labelCol: {span: 6},
                wrapperCol: {span: 10},
            };


            return (
                <div>
                    <Form
                        layout='horizontal'
                    >
                        <h4>PCB资料信息:</h4>
                        <Collapse accordion={true}>
                            <Panel header="PCB板子长度及数量" key="1">
                                <FormItem
                                >
                                    {getFieldDecorator('id', {})(
                                        <Input
                                            type="hidden"
                                        />
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="板子层数"
                                    hasFeedback
                                >
                                    {getFieldDecorator('layer', {
                                        rules: [{required: true, message: '板子层数!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.layer}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="板子宽度"
                                    hasFeedback
                                >
                                    {getFieldDecorator('width', {
                                        rules: [{required: true, message: '板子宽度!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.width}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="板子长度"
                                    hasFeedback
                                >
                                    {getFieldDecorator('length', {
                                        rules: [{required: true, message: '板子长度!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.length}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="板子数量"
                                    hasFeedback
                                >
                                    {getFieldDecorator('pcb_num', {
                                        rules: [{required: true, message: '板子数量!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.pcb_num}</label>
                                    )}
                                </FormItem>
                            </Panel>
                            <Panel header="PCB工艺选择" key="2">
                                <FormItem
                                    {...formItemLayout}
                                    label="板子厚度"
                                    hasFeedback
                                >
                                    {getFieldDecorator('thickness', {
                                        rules: [{required: true, message: '板子厚度!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.thickness}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="阻焊颜色"
                                    hasFeedback
                                >
                                    {getFieldDecorator('solder_color', {
                                        rules: [{required: true, message: '阻焊颜色!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.solder_color}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="字符颜色"
                                    hasFeedback
                                >
                                    {getFieldDecorator('char_color', {
                                        rules: [{required: true, message: '字符颜色!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.char_color}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="阻焊覆盖"
                                    hasFeedback
                                >
                                    {getFieldDecorator('pad_cover', {
                                        rules: [{required: true, message: '阻焊覆盖!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.pad_cover}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="焊盘喷镀"
                                    hasFeedback
                                >
                                    {getFieldDecorator('pad_spraying', {
                                        rules: [{required: true, message: '焊盘喷镀!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.pad_spraying}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="飞针测试"
                                    hasFeedback
                                >
                                    {getFieldDecorator('minute_test', {
                                        rules: [{required: true, message: '飞针测试!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.minute_test}</label>
                                    )}
                                </FormItem>
                            </Panel>
                            <Panel header="钢网及SMT加工选择" key="3">
                                <FormItem
                                    {...formItemLayout}
                                    label="是否需开钢网"
                                    hasFeedback
                                >
                                    {getFieldDecorator('required_steel', {
                                        rules: [{required: true, message: '是否需开钢网!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.required_steel}</label>
                                    )}
                                </FormItem>

                                <FormItem
                                    {...formItemLayout}
                                    label="是否需SMT贴片"
                                    hasFeedback
                                >
                                    {getFieldDecorator('required_smt', {
                                        rules: [{required: true, message: '是否需SMT贴片!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.required_smt}</label>
                                    )}
                                </FormItem>
                            </Panel>
                            <Panel header="其他选项" key="4">
                                <FormItem
                                    {...formItemLayout}
                                    label="是否需要发票"
                                    hasFeedback
                                >
                                    {getFieldDecorator('required_invoice', {
                                        rules: [{required: true, message: '是否需要发票!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.required_invoice}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="是否在制定位置加客户编号"
                                    hasFeedback
                                >
                                    {getFieldDecorator('required_add_customer_num', {
                                        rules: [{required: true, message: '是否在制定位置加客户编号!'}],
                                    })(
                                        <label
                                            className="ant-form-text">{this.props.initForm.required_add_customer_num}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="是否在每个单片（PCS)内增加生产日期"
                                    hasFeedback
                                >
                                    {getFieldDecorator('required_add_date_in_pcs', {
                                        rules: [{required: true, message: '是否在每个单片（PCS)内增加生产日期!'}],
                                    })(
                                        <label
                                            className="ant-form-text">{this.props.initForm.required_add_date_in_pcs}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="是否需要培训教材"
                                    hasFeedback
                                >
                                    {getFieldDecorator('required_book', {
                                        rules: [{required: true, message: '是否需要培训教材!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.required_book}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="是否需要等待一起发货（节省运费）"
                                    hasFeedback
                                >
                                    {getFieldDecorator('required_wait_delivery_together', {
                                        rules: [{required: true, message: '是否需要等待一起发货（节省运费）!'}],
                                    })(
                                        <label
                                            className="ant-form-text">{this.props.initForm.required_wait_delivery_together}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="发货时间"
                                    hasFeedback
                                >
                                    {getFieldDecorator('delivery_time', {
                                        rules: [{required: true, message: '发货时间!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.delivery_time}</label>
                                    )}
                                </FormItem>

                            </Panel>
                            <Panel header="个性化（贸易商）选项" key="5">
                                <FormItem
                                    {...formItemLayout}
                                    label="包装要求"
                                    hasFeedback
                                >
                                    {getFieldDecorator('required_pack', {
                                        rules: [{required: true, message: '包装要求!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.required_pack}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="是否需要收据和送货单和宣传单"
                                    hasFeedback
                                >
                                    {getFieldDecorator('required_receipt_and_delivery_note', {
                                        rules: [{required: true, message: '是否需要收据和送货单和宣传单!'}],
                                    })(
                                        <label
                                            className="ant-form-text">{this.props.initForm.required_receipt_and_delivery_note}</label>
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="生产条码标签放在外面"
                                    hasFeedback
                                >
                                    {getFieldDecorator('outside_barcode', {
                                        rules: [{required: true, message: '生产条码标签放在外面!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.outside_barcode}</label>
                                    )}
                                </FormItem>
                            </Panel>
                            <Panel header="备注说明" key="6">
                                <FormItem
                                    {...formItemLayout}
                                    label="备注说明"
                                    hasFeedback
                                >
                                    {getFieldDecorator('remarks', {
                                        rules: [{required: false, message: '备注说明!'}],
                                    })(
                                        <label className="ant-form-text">{this.props.initForm.remarks}</label>
                                    )}
                                </FormItem>
                            </Panel>
                        </Collapse>
                        <h4>订单收货信息 :
                            <span style={{color: 'red'}}>
                                {this.props.initForm.link_man},
                                {this.props.initForm.link_man_mobile},
                                {this.props.initForm.province}-
                                {this.props.initForm.city}-
                                {this.props.initForm.area}-
                                {this.props.initForm.detail}
                            </span>&nbsp;&nbsp;
                        </h4>
                        <h4>支付方式-快递选择:</h4>
                        <Collapse>
                            <FormItem
                                {...formItemLayout}
                                label="选择支付方式"
                                hasFeedback
                            >
                                {getFieldDecorator('pay_type', {
                                    rules: [{required: false, message: '选择支付方式!'}],
                                })(
                                    <label className="ant-form-text">{this.props.initForm.pay_type}</label>
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="选择快递公司"
                                hasFeedback
                            >
                                {getFieldDecorator('express_type', {
                                    rules: [{required: false, message: '选择快递公司!'}],
                                })(
                                    <label className="ant-form-text">{this.props.initForm.express_type}</label>
                                )}
                            </FormItem>
                        </Collapse>
                        <h4>订单总费用: <label className="ant-form-text" style={{color: 'red'}}>{this.props.initForm.total_amount}</label> RMB</h4>
                        <Collapse defaultActiveKey={['1']}>
                            <Panel header="订单费用明细" key="1">
                                <CustomerPcbOrderCostTable/>
                            </Panel>
                        </Collapse>
                    </Form>
                </div>
            )
        }
    }
)