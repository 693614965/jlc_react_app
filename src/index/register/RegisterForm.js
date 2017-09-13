/**
 * Created by Administrator on 2017/8/18.
 */

import React, {Component} from "react";
import {Button, Form, Icon, Input} from "antd";
const FormItem = Form.Item;

export default Form.create({

})(
    class RegisterForm extends Component {

        checkPassword = (rule, value, callback) => {
            const form = this.props.form;
            if (value && value !== form.getFieldValue('password')) {
                callback('确认密码不正确!');
            } else {
                callback();
            }
        }

        render() {
            const {getFieldDecorator} = this.props.form;
            const formItemLayout = {
                labelCol: {span: 6},
                wrapperCol: {span: 6},
            };
            const tailFormItemLayout = {
                wrapperCol: {
                    span: 6,
                    offset: 6,
                }
            };
            return (
                <div>
                    <Form
                        layout='horizontal'
                    >
                        <FormItem
                            {...formItemLayout}
                            label="用户名"
                            hasFeedback
                        >
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入登录用户名!'}],
                            })(
                                <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="登录用户名"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="密码"
                            hasFeedback
                        >
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入登录密码!'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                       placeholder="登录密码"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="确认密码"
                            hasFeedback
                        >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: '请输入确认密码!',
                                }, {
                                    validator: this.checkPassword,
                                }],
                            })(
                                <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                       placeholder="确认密码"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Email 邮箱"
                            hasFeedback
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', required: true, message: '请输入格式正确的邮箱地址!',
                                }],
                            })(
                                <Input prefix={<Icon type="mail" style={{fontSize: 13}}/>}
                                       placeholder="邮箱地址"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...tailFormItemLayout}
                            hasFeedback
                        >
                            <Button type="primary" style={{width: '100%'}} onClick={this.props.register.bind(this)}>
                                注册
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            )
        }
    }
)