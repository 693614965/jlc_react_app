/**
 * Created by Administrator on 2017/8/23.
 */
import React, {Component} from "react";
import {Button, Form, Icon, message, Upload} from "antd";
import {HOST} from '../../service/Service'
const FormItem = Form.Item;

export default Form.create({})(
    class CustomerPcbFileForm extends Component {

        render() {
            const {getFieldDecorator} = this.props.form;
            const formItemLayout = {
                labelCol: {span: 6},
                wrapperCol: {span: 10},
            };
            const props = {
                name: 'file',
                action: HOST + '/customer_pcb_data_info/pcb_upload/?id='+this.props.selectedRowKeys,
                headers: {
                    authorization: 'authorization-text',
                },
                multiple: false,
            };
            return (
                <Form
                    layout='horizontal'
                >
                    <FormItem
                        {...formItemLayout}
                        label="PCB文件"
                        hasFeedback
                    >
                        {getFieldDecorator('file', {
                            rules: [{required: true, message: '选择PCB文件!'}],
                        })(
                            <Upload {...props}>
                                <Button>
                                    <Icon type="upload"/> 选择PCB文件
                                </Button>
                            </Upload>
                        )}
                    </FormItem>
                </Form>
            )
        }
    }
)