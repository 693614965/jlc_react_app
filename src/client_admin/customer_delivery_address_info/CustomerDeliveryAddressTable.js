/**
 * Created by Administrator on 2017/8/25.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {Icon, Popconfirm, Table} from "antd";
import {mapDispatchToProps, mapStateToProps} from "../../actions/mapDispatchToProps";

export default connect(mapStateToProps, mapDispatchToProps)(
    class CustomerDeliveryAddressTable extends Component {

        componentDidMount() {

            this.props.customer_delivery_address_get()
        }

        onSetDefault(key) {
            this.props.customer_delivery_address_set_default(key)
        }

        onEditClick(key) {
            this.props.customer_delivery_address_edit(key)
        }

        onDeleteClick(key) {
            this.props.customer_delivery_address_delete(key)
        }

        render() {
            const columns = [{
                title: '联系人',
                dataIndex: 'link_man',
                key: 'link_man',
            }, {
                title: '联系人电话',
                dataIndex: 'link_man_mobile',
                key: 'link_man_mobile',
            }, {
                title: '省市',
                dataIndex: 'province',
                key: 'province',
            }, {
                title: '城市',
                dataIndex: 'city',
                key: 'city',
            }, {
                title: '街道',
                dataIndex: 'area',
                key: 'area',
            }, {
                title: '详细地址',
                dataIndex: 'detail',
                key: 'detail',
            }, {
                title: '是否默认',
                dataIndex: 'is_default',
                key: 'is_default',
                render: (text, record) => (
                    <span>
                        <span hidden={text == 1 ? "" : "hidden"}>
                            <Icon type="environment" style={{fontSize: 20, color: '#FF0000'}}/>
                        </span>
                        <Popconfirm title="你确定要设置为默认收货地址吗？" onConfirm={this.onSetDefault.bind(this, record.key)}>
                                <a hidden={text == 0 ? "" : "hidden"} href="javascript:void(0);">
                                <Icon type="environment" style={{fontSize: 20, color: '#3A5FCD'}}/> 设置默认收货
                                </a>
                        </Popconfirm>&nbsp;&nbsp;
                    </span>
                )
            }, {
                title: '操作',
                key: 'operation',
                render: (text, record, index) => (
                    <span>
                        <a href="javascript:void(0);" onClick={this.onEditClick.bind(this, record.key)}><Icon
                            type="edit"/> 编辑</a>&nbsp;&nbsp;
                        <Popconfirm title="你确定要删除吗？" onConfirm={this.onDeleteClick.bind(this, record.key)}><a
                            href="javascript:void(0);"><Icon
                            type="delete"/> 删除</a></Popconfirm>&nbsp;&nbsp;
                    </span>
                )
            }];
            return (
                <div>
                    <Table dataSource={this.props.dataSource} columns={columns}/>
                </div>
            )
        }
    }
)