/**
 * Created by Administrator on 2017/8/26.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../actions/mapDispatchToProps";
import {Button, Icon, Popconfirm, Table} from "antd";

export default connect(mapStateToProps, mapDispatchToProps)(
    class CustomerPcbOrderInfoIndex extends Component {

        componentDidMount() {

            this.props.customer_pcb_order_info_list()
        }

        onShowDetail(key) {
            this.props.customer_pcb_order_info_detail(key)
            this.props.history.push('/client/customer_pcb_order_detail')
        }


        onShowProcess(key) {

        }

        onDownloadPcbFile(key) {

            this.props.customer_pcb_order_info_file_down(key)
        }

        onRowClick(record, index, event) {

            this.props.init_selected_rows([record.key], [record])
        }

        onSteelToOrder() {

            this.props.history.push('/client/customer_steel_order_info')
        }

        render() {
            const columns = [{
                title: '订单号',
                dataIndex: 'number_order',
                key: 'number_order',
            }, {
                title: '订单总额',
                dataIndex: 'total_amount',
                key: 'total_amount',
            }, {
                title: '订单分类',
                dataIndex: 'order_type',
                key: 'order_type',
                render: (text, record, index) => {
                    if (record.order_type == 'simple') {
                        return <span>样板</span>
                    } else if (record.order_type == 'batch') {
                        return <span>小批量</span>
                    }
                }
            }, {
                title: '订单状态',
                dataIndex: 'order_status',
                key: 'order_status',
                render: (text, record, index) => {
                    if (record.order_status == 0) {
                        return <span style={{color: 'red'}}>等待嘉立创审核</span>
                    } else if (record.order_status == 1) {
                        return <span style={{color: 'blue'}}>待付款</span>
                    } else if (record.order_status == 2) {
                        return <span style={{color: 'blue'}}>审核失败</span>
                    } else if (record.order_status == 3) {
                        return <span style={{color: 'green'}}>已付款</span>
                    } else if (record.order_status == 4) {
                        return <span style={{color: 'green'}}>提交工厂</span>
                    } else if (record.order_status == 5) {
                        return <span style={{color: 'green'}}>已完成</span>
                    }
                }
            }, {
                title: '物流公司',
                dataIndex: 'express_type',
                key: 'express_type',
                render: (text, record, index) => (
                    <span>
                        <Popconfirm title="查看物流进度？" onConfirm={this.onShowProcess.bind(this, record.key)}>
                            <a href="javascript:void(0);">
                                {text}
                            </a>
                        </Popconfirm>&nbsp;&nbsp;
                    </span>
                )
            }, {
                title: '支付方式',
                dataIndex: 'pay_type',
                key: 'pay_type',
            }, {
                title: '下单时间',
                dataIndex: 'date_order',
                key: 'date_order',
            }, {
                title: 'PCB文件',
                dataIndex: 'pcb_file_name',
                key: 'pcb_file_name',
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
                title: '操作',
                key: 'operation',
                render: (text, record, index) => (
                    <span>
                        <a href="javascript:void(0);" onClick={this.onShowDetail.bind(this, record.key)}>
                            <Icon type="edit"/> 详情
                        </a>&nbsp;&nbsp;
                        <a href="javascript:void(0);"
                           hidden={record.order_status == 1 ? '' : 'hidden'}>
                            <Icon type="pay-circle"/> 立即付款
                        </a>&nbsp;&nbsp;
                        <a href="javascript:void(0);"
                           hidden={record.order_status == 0 || record.order_status == 1 ? '' : 'hidden'}>
                            <Icon type="close-circle"/> 取消订单
                        </a>&nbsp;&nbsp;
                        <a href="javascript:void(0);" hidden={record.order_status == 5 ? '' : 'hidden'}>
                            <Icon type="close-circle"/> 关闭订单
                        </a>&nbsp;&nbsp;
                    </span>
                )
            }]
            const rowSelection = {
                type: 'radio',
                selectedRowKeys: this.props.selectedRowKeys,
                onChange: (selectedRowKeys, selectedRows) => {
                    this.props.init_selected_rows(selectedRowKeys, selectedRows)
                },
            };

            return (
                <div>
                    <div style={{marginBottom: 16}}>
                        <Button type="primary" onClick={this.onSteelToOrder.bind(this)}><Icon
                            type="plus-circle"/>立即钢网下单</Button>&nbsp;&nbsp;
                        <Button type="primary"><Icon
                            type="plus-circle"/>立即SMT下单</Button>&nbsp;&nbsp;
                    </div>
                    <Table
                        bordered={true}
                        onRowClick={this.onRowClick.bind(this)}
                        dataSource={this.props.dataSource}
                        columns={columns}
                        rowSelection={rowSelection}
                    />
                </div>
            )
        }
    }
)