/**
 * Created by Administrator on 2017/8/18.
 */
import React, {Component} from "react";
import {Button, Icon, message, Modal, Popconfirm, Table} from "antd";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../actions/mapDispatchToProps";
import CustomerPcbDataInfoForm from "./CustomerPcbDataInfoForm";
import CustomerPcbFileForm from "./CustomerPcbFileForm";


export default connect(mapStateToProps, mapDispatchToProps)(
    class CustomerPcbDataInfoList extends Component {

        componentDidMount() {

            this.props.customer_pcb_data_info_list()
        }

        onEdit(key) {
            this.props.customer_pcb_data_info_edit(key)
        }

        onDelete(key) {
            this.props.customer_pcb_data_info_delete(key)
        }

        handleOk() {
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    this.props.customer_pcb_data_info_save(values)
                } else {
                    message.warning('请将数据填写完整，谢谢!')
                }
            })
        }

        handlerClose() {
            this.props.model_close()
        }

        cusPcbDataInfoForm(form) {
            this.form = form
        }

        onAddPcbData() {
            this.props.customer_pcb_data_info_add()
        }

        onAddPcbFile(props) {
            if (props.selectedRowKeys.length != 0) {
                Modal.success({
                    content: <CustomerPcbFileForm selectedRowKeys={props.selectedRowKeys}/>,
                    okText: '确定',
                    onOk(){
                        props.customer_pcb_data_info_list()
                    }
                });
            } else {
                message.warning('请选择一个资料，谢谢!')
            }
        }

        onSubmitPcbToCheck() {
            if (this.props.selectedRowKeys.length != 0) {
                if (this.props.selectedRows[0].status == 0) {
                    this.props.customer_pcb_data_info_check(this.props.selectedRows[0].key)
                } else {
                    message.warning('只有保存 状态的资料才可以提交审核，谢谢！')
                }
            } else {
                message.error('====请选择一个资料，谢谢!====')
            }
        }

        onSubmitPcbOrder() {
            if (this.props.selectedRowKeys.length != 0) {
                if (this.props.selectedRows[0].status == 2) {
                    this.props.history.push('/client/customer_pcb_data_info_order')
                } else {
                    message.warning('只有审核通过的资料才可以下单，谢谢！')
                }
            } else {
                message.error('====请选择一个资料，谢谢!====')
            }
        }

        onDownloadPcbFile(key) {
            this.props.customer_pcb_data_info_file_down(key)
        }

        render() {
            const columns = [{
                title: '层数',
                dataIndex: 'layer',
                key: 'layer',
            }, {
                title: '宽度',
                dataIndex: 'width',
                key: 'width',
            }, {
                title: '长度',
                dataIndex: 'length',
                key: 'length',
            }, {
                title: '板子数量',
                dataIndex: 'pcb_num',
                key: 'pcbNum',
            }, {
                title: '厚度',
                dataIndex: 'thickness',
                key: 'thickness',
            }, {
                title: '飞针测试',
                dataIndex: 'minute_test',
                key: 'minuteTest'
            }, {
                title: '发货时间',
                dataIndex: 'delivery_time',
                key: 'deliveryTime'
            }, {
                title: '是否需要SMT',
                dataIndex: 'required_smt',
                key: 'requiredSmt'
            }, {
                title: '是否需要钢网',
                dataIndex: 'required_steel',
                key: 'requiredSteel'
            }, {
                title: 'PCB文件名称',
                dataIndex: 'pcb_file_name',
                key: 'pcbFileName',
                render: (text, record, index) => (
                    <span>
                        <Popconfirm title="你确定要下载吗？" onConfirm={this.onDownloadPcbFile.bind(this, record.key)}>
                            <a href="javascript:void(0);">
                                {text}
                            </a>
                        </Popconfirm>&nbsp;&nbsp;
                    </span>
                )
            }, {
                title: '备注',
                dataIndex: 'remarks',
                key: 'remarks'
            }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render: (text, record, index) => {
                    if (record.status == 0) {
                        return <span style={{color: 'blue'}}>保存</span>
                    } else if (record.status == 1) {
                        return <span style={{color: '#FFC125'}}>审核中</span>
                    } else if (record.status == 2) {
                        return <span style={{color: 'green'}}>审核通过</span>
                    } else if (record.status == 3) {
                        return <span style={{color: 'red'}}>审核失败</span>
                    }
                }
            }, {
                title: '操作',
                key: 'operation',
                render: (text, record, index) => (
                    <span>
                        <a href="javascript:void(0);" onClick={this.onEdit.bind(this, record.key)}><Icon type="edit"/> 编辑</a>&nbsp;&nbsp;
                        <Popconfirm title="你确定要删除吗？" onConfirm={this.onDelete.bind(this, record.key)}><a
                            href="javascript:void(0);"><Icon
                            type="delete"/> 删除</a></Popconfirm>&nbsp;&nbsp;
                    </span>
                )
            }];
            const rowSelection = {
                type: 'radio',
                selectedRowKeys:this.props.selectedRowKeys,
                onChange: (selectedRowKeys, selectedRows) => {
                    this.props.init_selected_rows(selectedRowKeys, selectedRows)
                },
            };
            return (
                <div>
                    <div style={{marginBottom: 16}}>
                        <Button type="primary" onClick={this.onAddPcbData.bind(this)}><Icon
                            type="plus-circle"/>新增PCB资料</Button>&nbsp;&nbsp;
                        <Button type="primary" onClick={this.onAddPcbFile.bind(this, this.props)}><Icon
                            type="plus-circle"/>上传PCB文件</Button>&nbsp;&nbsp;
                        <Button type="primary" onClick={this.onSubmitPcbToCheck.bind(this)}><Icon
                            type="plus-circle"/>提交PCB审核</Button>&nbsp;&nbsp;
                        <Button type="primary" onClick={this.onSubmitPcbOrder.bind(this)}><Icon
                            type="plus-circle"/>立即PCB下单</Button>&nbsp;&nbsp;

                    </div>
                    <Table
                        bordered={true}
                        dataSource={this.props.dataSource}
                        columns={columns}
                        rowSelection={rowSelection}
                        scroll={{x: 1000}}
                    />
                    <Modal title="编辑PCB资料信息"
                           visible={this.props.visible}
                           onOk={this.handleOk.bind(this)}
                           onCancel={this.handlerClose.bind(this)}
                           okText="确定"
                           cancelText="关闭"
                           width={1000}
                    >
                        <CustomerPcbDataInfoForm
                            ref={this.cusPcbDataInfoForm.bind(this)}
                            initForm={this.props.initForm}
                        />
                    </Modal>
                </div>
            )
        }
    }
)