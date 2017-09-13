/**
 * Created by Administrator on 2017/8/22.
 */
import React, {Component} from "react";
import {Form, Input} from "antd";
const FormItem = Form.Item;

export default Form.create({
    mapPropsToFields(props){
        return{
            id:{
                value:props.initForm.id
            },
            link_man:{
                value:props.initForm.link_man
            },
            link_man_mobile:{
                value:props.initForm.link_man_mobile
            },
            province:{
                value:props.initForm.province
            },
            city:{
                value:props.initForm.city
            },
            area:{
                value:props.initForm.area
            },
            detail:{
                value:props.initForm.detail
            }
        }
    }
})(
    class CustomerDeliveryAddressForm extends Component {

        render() {
            const {getFieldDecorator} = this.props.form;
            const formItemLayout = {
                labelCol: {span: 6},
                wrapperCol: {span: 12},
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
                            label="联系人"
                            hasFeedback
                        >
                            {getFieldDecorator('link_man', {
                                rules: [{required: true, message: '联系人!'}],
                            })(
                                <Input placeholder="联系人"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="联系人电话"
                            hasFeedback
                        >
                            {getFieldDecorator('link_man_mobile', {
                                rules: [{required: true, message: '联系人电话!'}],
                            })(
                                <Input placeholder="联系人电话"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="省市"
                            hasFeedback
                        >
                            {getFieldDecorator('province', {
                                rules: [{required: true, message: '省市!'}],
                            })(
                                <Input placeholder="省市"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="城市"
                            hasFeedback
                        >
                            {getFieldDecorator('city', {
                                rules: [{required: true, message: '城市!'}],
                            })(
                                <Input placeholder="城市"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="街道"
                            hasFeedback
                        >
                            {getFieldDecorator('area', {
                                rules: [{required: true, message: '街道!'}],
                            })(
                                <Input placeholder="街道"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="详细地址"
                            hasFeedback
                        >
                            {getFieldDecorator('detail', {
                                rules: [{required: true, message: '详细地址!'}],
                            })(
                                <Input placeholder="详细地址"/>
                            )}
                        </FormItem>
                    </Form>
                </div>
            )
        }
    }
)