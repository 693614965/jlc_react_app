/**
 * Created by Administrator on 2017/9/9.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../actions/mapDispatchToProps";
import {Table} from 'antd'

export default connect(mapStateToProps, mapDispatchToProps)(

    class CustomerSteelTable extends Component{

        componentDidMount() {

            this.props.customer_steel_info_list()
        }

        onRowClick(record,index,event){
            this.props.selectedSteel(record.key)
        }

        render(){
            const columns = [{
                title: '钢网规格',
                dataIndex: 'spec',
                key: 'spec',
            },{
                title: '钢网有效面积',
                dataIndex: 'area',
                key: 'area',
            },{
                title: '网络支付价',
                dataIndex: 'net_pay_price',
                key: 'net_pay_price',
            },{
                title: '快递代收价',
                dataIndex: 'express_coll_price',
                key: 'express_coll_price',
            },{
                title: '毛重',
                dataIndex: 'gross_weight',
                key: 'gross_weight',
            }]
            const rowSelection = {
                type: 'radio',
                selectedRowKeys:this.props.currentSteelId,
                onChange: (selectedRowKeys, selectedRows) => {
                    this.props.selectedSteel(selectedRowKeys[0])
                },
            };
            return(
                <div>
                    <Table
                        bordered={true}
                        onRowClick={this.onRowClick.bind(this)}
                        dataSource={this.props.dataSource}
                        columns={columns}
                        pagination={false}
                        rowSelection={rowSelection}
                    />
                </div>
            )
        }

    }

)