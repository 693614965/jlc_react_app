/**
 * Created by Administrator on 2017/8/18.
 */
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button, Checkbox, Form, Icon, Input} from "antd";
const FormItem = Form.Item;


export default Form.create({

})(
    class LoginForm extends Component {

        render() {
            const {getFieldDecorator} = this.props.form;
            const formItemLayout = {
                labelCol: {span: 6},
                wrapperCol: {span: 6}
            };
            const tailFormItemLayout = {
                wrapperCol: {
                    span: 6,
                    offset: 6,
                }
            };
            return (
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
                        {...tailFormItemLayout}
                    >
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox style={{float: 'left'}}>记住密码</Checkbox>
                        )}
                        <a style={{float: 'right'}}>忘记密码</a>
                    </FormItem>
                    <FormItem
                        {...tailFormItemLayout}
                        hasFeedback
                    >
                        <Button type="primary" style={{width: '100%'}} onClick={this.props.login.bind(this)}>
                            登录
                        </Button>
                        <Link to="/register">
                            <a href="javascript:void(0)">马上注册</a>
                        </Link>
                    </FormItem>
                </Form>
            )
        }
    }
)