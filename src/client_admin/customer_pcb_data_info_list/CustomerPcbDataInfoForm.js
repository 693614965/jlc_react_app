/**
 * Created by Administrator on 2017/8/18.
 */
import React, {Component} from "react";
import {Form, Input, InputNumber, Radio, Tabs} from "antd";
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;


export default Form.create({
    mapPropsToFields(props){
        return {
            id: {
                value: props.initForm.id
            },
            layer: {
                value: props.initForm.layer
            },
            width: {
                value: props.initForm.width
            },
            length: {
                value: props.initForm.length
            },
            pcb_num: {
                value: props.initForm.pcb_num
            },
            thickness: {
                value: props.initForm.thickness
            },
            solder_color: {
                value: props.initForm.solder_color
            },
            char_color: {
                value: props.initForm.char_color
            },
            pad_cover: {
                value: props.initForm.pad_cover
            },
            pad_spraying: {
                value: props.initForm.pad_spraying
            },
            minute_test: {
                value: props.initForm.minute_test
            },
            delivery_time: {
                value: props.initForm.delivery_time
            },
            required_invoice: {
                value: props.initForm.required_invoice
            },
            required_add_customer_num: {
                value: props.initForm.required_add_customer_num
            },
            required_book: {
                value: props.initForm.required_book
            },
            required_add_date_in_pcs: {
                value: props.initForm.required_add_date_in_pcs
            },
            required_wait_delivery_together: {
                value: props.initForm.required_wait_delivery_together
            },
            required_pack: {
                value: props.initForm.required_pack
            },
            required_receipt_and_delivery_note: {
                value: props.initForm.required_receipt_and_delivery_note
            },
            outside_barcode: {
                value: props.initForm.outside_barcode
            },
            required_smt: {
                value: props.initForm.required_smt
            },
            required_steel: {
                value: props.initForm.required_steel
            },
            remarks: {
                value: props.initForm.remarks
            },
        }
    }
})(
    class CustomerPcbDataInfoForm extends Component {

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
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="PCB板子长度及数量" key="1">
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
                                        <RadioGroup>
                                            <Radio value='1'>1</Radio>
                                            <Radio value='2'>2</Radio>
                                            <Radio value='4'>4</Radio>
                                            <Radio value='6'>6</Radio>
                                        </RadioGroup>
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
                                        <InputNumber/>
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
                                        <InputNumber/>
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
                                        <InputNumber/>
                                    )}
                                </FormItem>
                            </TabPane>
                            <TabPane tab="PCB工艺选择" key="2">
                                <FormItem
                                    {...formItemLayout}
                                    label="板子厚度"
                                    hasFeedback
                                >
                                    {getFieldDecorator('thickness', {
                                        rules: [{required: true, message: '板子厚度!'}],
                                    })(
                                        <RadioGroup>
                                            <Radio value='0.4'>0.4</Radio>
                                            <Radio value='0.6'>0.6</Radio>
                                            <Radio value='0.8'>0.8</Radio>
                                            <Radio value='1.0'>1.0</Radio>
                                            <Radio value='1.2'>1.2</Radio>
                                            <Radio value='1.6'>1.6</Radio>
                                            <Radio value='2.0'>2.0</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='绿色'>绿色</Radio>
                                            <Radio value='红色'>红色</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='白色'>白色</Radio>
                                            <Radio value='红色'>红色</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='过孔盖油'>过孔盖油</Radio>
                                            <Radio value='过孔开窗'>过孔开窗</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='有铅喷镀'>有铅喷镀</Radio>
                                            <Radio value='无铅喷镀'>无铅喷镀</Radio>
                                            <Radio value='沉金'>沉金</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='全测'>全测</Radio>
                                            <Radio value='抽测'>抽测</Radio>
                                        </RadioGroup>
                                    )}
                                </FormItem>
                            </TabPane>
                            <TabPane tab="钢网及SMT 加工选择" key="3">
                                <FormItem
                                    {...formItemLayout}
                                    label="是否需开钢网"
                                    hasFeedback
                                >
                                    {getFieldDecorator('required_steel', {
                                        rules: [{required: true, message: '是否需开钢网!'}],
                                    })(
                                        <RadioGroup>
                                            <Radio value='需要'>需要</Radio>
                                            <Radio value='不需要'>不需要</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='需要'>需要</Radio>
                                            <Radio value='不需要'>不需要</Radio>
                                        </RadioGroup>
                                    )}
                                </FormItem>
                            </TabPane>
                            <TabPane tab="其他选项" key="4">
                                <FormItem
                                    {...formItemLayout}
                                    label="是否需要发票"
                                    hasFeedback
                                >
                                    {getFieldDecorator('required_invoice', {
                                        rules: [{required: true, message: '是否需要发票!'}],
                                    })(
                                        <RadioGroup>
                                            <Radio value='需要'>需要</Radio>
                                            <Radio value='不需要'>不需要</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='是'>是</Radio>
                                            <Radio value='否'>否</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='是'>是</Radio>
                                            <Radio value='否'>否</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='需要'>需要</Radio>
                                            <Radio value='不需要'>不需要</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='需要绑定发货'>需要绑定发货</Radio>
                                            <Radio value='不需要，做好就发'>不需要，做好就发</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='正常5-6天（小批量）'>正常5-6天（小批量）</Radio>
                                            <Radio value='小批量48小时加急'>小批量48小时加急</Radio>
                                        </RadioGroup>
                                    )}
                                </FormItem>

                            </TabPane>
                            <TabPane tab="个性化（贸易商）选项" key="5">
                                <FormItem
                                    {...formItemLayout}
                                    label="包装要求"
                                    hasFeedback
                                >
                                    {getFieldDecorator('required_pack', {
                                        rules: [{required: true, message: '包装要求!'}],
                                    })(
                                        <RadioGroup>
                                            <Radio value='嘉立创标识盒子'>嘉立创标识盒子</Radio>
                                            <Radio value='空白盒子'>空白盒子</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='需要'>需要</Radio>
                                            <Radio value='不需要'>不需要</Radio>
                                        </RadioGroup>
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
                                        <RadioGroup>
                                            <Radio value='需要'>需要</Radio>
                                            <Radio value='不需要'>不需要</Radio>
                                        </RadioGroup>
                                    )}
                                </FormItem>
                            </TabPane>
                            <TabPane tab="备注说明" key="6">
                                <FormItem
                                    {...formItemLayout}
                                    label="备注说明"
                                    hasFeedback
                                >
                                    {getFieldDecorator('remarks', {
                                        rules: [{required: false, message: '备注说明!'}],
                                    })(
                                        <Input type='textarea'/>
                                    )}
                                </FormItem>
                            </TabPane>
                        </Tabs>
                    </Form>
                </div>
            )
        }
    }
)