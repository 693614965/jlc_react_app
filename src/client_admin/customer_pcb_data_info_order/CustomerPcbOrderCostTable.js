/**
 * Created by Administrator on 2017/8/31.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../actions/mapDispatchToProps";
import {Table} from "antd";

export default connect(mapStateToProps, mapDispatchToProps)(
    class CustomerPcbOrderCostTable extends Component {
        render() {
            const columns = [{
                title: '工程费',
                dataIndex: 'engineering_cost',
                key: 'engineering_cost',
            }, {
                title: '拼版费',
                dataIndex: 'imposition_cost',
                key: 'imposition_cost',
            }, {
                title: '喷镀费',
                dataIndex: 'spray_cost',
                key: 'spray_cost',
            }, {
                title: '板费',
                dataIndex: 'board_cost',
                key: 'board_cost',
            }, {
                title: '测试费',
                dataIndex: 'test_cost',
                key: 'test_cost',
            }, {
                title: '菲林费',
                dataIndex: 'film_cost',
                key: 'film_cost',
            }, {
                title: '加急费',
                dataIndex: 'urgent_cost',
                key: 'urgent_cost',
            }, {
                title: '颜色费',
                dataIndex: 'color_cost',
                key: 'color_cost',
            }, {
                title: '大板费',
                dataIndex: 'large_board_cost',
                key: 'large_board_cost',
            }, {
                title: '税费',
                dataIndex: 'tax_cost',
                key: 'tax_cost',
            }, {
                title: '快递费',
                dataIndex: 'express_cost',
                key: 'express_cost',
            }, {
                title: '钢网费',
                dataIndex: 'steel_cost',
                key: 'steel_cost',
            }, {
                title: '钢网运费',
                dataIndex: 'steel_express_cost',
                key: 'steel_express_cost',
            }]
            return (
                <div>
                    <Table
                        bordered={true}
                        dataSource={this.props.customerPcbOrderCostInfo}
                        columns={columns}
                    />
                </div>
            )
        }
    }
)