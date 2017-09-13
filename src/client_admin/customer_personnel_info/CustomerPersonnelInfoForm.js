/**
 * Created by Administrator on 2017/8/18.
 */
import React, {Component} from "react";
import {Button, Form, Icon, Input, InputNumber} from "antd";
const FormItem = Form.Item;


export default Form.create({
    mapPropsToFields(props){
        return {
            id: {
                value: props.initForm.id
            },
            code: {
                value: props.initForm.code
            },
            name: {
                value: props.initForm.name
            },
            age: {
                value: props.initForm.age
            },
            mobile: {
                value: props.initForm.mobile
            },
            home_address: {
                value: props.initForm.home_address
            },
            work_unit: {
                value: props.initForm.work_unit
            },
            education: {
                value: props.initForm.education
            },
            email: {
                value: props.initForm.email
            },
            qq: {
                value: props.initForm.qq
            }
        }
    }
})(
    class CustomerPersonnelInfoForm extends Component {

        render() {
            const {getFieldDecorator} = this.props.form;
            const formItemLayout = {
                labelCol: {span: 6},
                wrapperCol: {span: 10},
            };
            const tailFormItemLayout = {
                wrapperCol: {
                    span: 10,
                    offset: 6,
                }
            };
            return (
                <div>
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
                            label="客户编码"
                            hasFeedback
                        >
                            {getFieldDecorator('code', {
                                rules: [{required: false, message: '客户编码!'}],
                            })(
                                <Input placeholder="客户编码"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="客户姓名"
                            hasFeedback
                        >
                            {getFieldDecorator('name', {
                                rules: [{required: false, message: '客户姓名!'}],
                            })(
                                <Input placeholder="客户姓名"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="年龄"
                            hasFeedback
                        >
                            {getFieldDecorator('age', {
                                rules: [{required: false, message: '年龄!'}],
                            })(
                                <InputNumber placeholder="年龄"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="手机号"
                            hasFeedback
                        >
                            {getFieldDecorator('mobile', {
                                rules: [{required: false, message: '手机号!'}],
                            })(
                                <Input prefix={<Icon type="mobile" style={{fontSize: 13}}/>} placeholder="手机号"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="家庭地址"
                            hasFeedback
                        >
                            {getFieldDecorator('home_address', {
                                rules: [{required: false, message: '家庭地址!'}],
                            })(
                                <Input placeholder="家庭地址"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="工作单位"
                            hasFeedback
                        >
                            {getFieldDecorator('work_unit', {
                                rules: [{required: false, message: '工作单位!'}],
                            })(
                                <Input placeholder="工作单位"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="学历"
                            hasFeedback
                        >
                            {getFieldDecorator('education', {
                                rules: [{required: false, message: '学历!'}],
                            })(
                                <Input placeholder="学历"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="邮箱"
                            hasFeedback
                        >
                            {getFieldDecorator('email', {
                                rules: [{required: false, message: '邮箱格式不正确!', type: 'email'}],
                            })(
                                <Input prefix={<Icon type="mail" style={{fontSize: 13}}/>} placeholder="邮箱"/>
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="QQ"
                            hasFeedback
                        >
                            {getFieldDecorator('qq', {
                                rules: [{required: false, message: 'QQ!'}],
                            })(
                                <Input placeholder="QQ"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...tailFormItemLayout}
                            hasFeedback
                        >
                            <Button type="primary" style={{width: '100%'}} onClick={this.props.onSaveSubmit.bind(this)}>
                                保存
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            );
        }
    }
)