/**
 * Created by Administrator on 2017/9/9.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../actions/mapDispatchToProps";
import CustomerPcbOrderDetailInfo from "./CustomerPcbOrderDetailInfo";

export default connect(mapStateToProps, mapDispatchToProps)(

    class CustomerPcbOrderDetailIndex extends Component{

        render(){
            return(
                <div>
                    <CustomerPcbOrderDetailInfo
                        initForm={this.props.initForm}
                    />
                </div>
            )
        }
    }
)