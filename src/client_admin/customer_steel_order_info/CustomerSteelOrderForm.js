/**
 * Created by Administrator on 2017/9/9.
 */
import React, {Component} from "react";
import {Button, Form, Input, InputNumber, Radio} from "antd";
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

export default Form.create({
    mapPropsToFields(props){
        return {
            id: {
                value: props.initForm.id
            }
        }
    }
})(
    class CustomerSteelOrderForm extends Component {

        render() {
            const {getFieldDecorator} = this.props.form;
            const formItemLayout = {
                labelCol: {span: 6},
                wrapperCol: {span: 10},
            };
            return (
                <Form
                    layout='horizontal'
                >
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
                        label="购买数量"
                        hasFeedback
                    >
                        {getFieldDecorator('steel_number', {
                            rules: [{required: true, message: '购买数量!'}],
                        })(
                            <InputNumber />
                        )}
                    </FormItem>
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
                        label="是否需要收据和送货单"
                        hasFeedback
                    >
                        {getFieldDecorator('required_receipt_and_delivery_note', {
                            rules: [{required: true, message: '送货单及收据!'}],
                        })(
                            <RadioGroup>
                                <Radio value='需要'>需要</Radio>
                                <Radio value='不需要'>不需要</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="用途"
                        hasFeedback
                    >
                        {getFieldDecorator('steel_use', {
                            rules: [{required: true, message: '用途!'}],
                        })(
                            <RadioGroup>
                                <Radio value='锡膏网'>锡膏网</Radio>
                                <Radio value='红胶网'>红胶网</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="MARK要求"
                        hasFeedback
                    >
                        {getFieldDecorator('required_mark', {
                            rules: [{required: true, message: 'MARK要求!'}],
                        })(
                            <RadioGroup>
                                <Radio value='需要'>需要</Radio>
                                <Radio value='不需要'>不需要</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="抛光工艺"
                        hasFeedback
                    >
                        {getFieldDecorator('polishing_process', {
                            rules: [{required: true, message: '抛光工艺!'}],
                        })(
                            <RadioGroup>
                                <Radio value='打磨抛光(不收费)'>打磨抛光(不收费)</Radio>
                                <Radio value='电解抛光'>电解抛光</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="工程处理要求"
                        hasFeedback
                    >
                        {getFieldDecorator('required_engineering_process', {
                            rules: [{required: true, message: '工程处理要求!'}],
                        })(
                            <RadioGroup>
                                <Radio value='按《钢网制作规范协议》进行制作'>按《钢网制作规范协议》进行制作</Radio>
                                <Radio value='需确认PDF文档才能切割'>需确认PDF文档才能切割</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="备注"
                        hasFeedback
                    >
                        {getFieldDecorator('remark', {
                            rules: [{required: false, message: '备注!'}],
                        })(
                            <Input type="textarea"/>
                        )}
                    </FormItem>
                    <FormItem
                        wrapperCol={{
                            xs: {span: 8, offset: 16},
                            sm: {span: 16, offset: 8},
                        }}
                    >
                        <Button type="primary" onClick={this.props.onSteelOrderSubmit.bind(this)}>确定下单</Button>
                    </FormItem>
                </Form>
            )
        }
    }
)