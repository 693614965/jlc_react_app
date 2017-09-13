/**
 * Created by Administrator on 2017/8/21.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../actions/mapDispatchToProps";
import CustomerPersonnelInfoForm from './CustomerPersonnelInfoForm'

export default connect(mapStateToProps,mapDispatchToProps)(
    class CustomerPersonnelInfoIndex extends Component{
        componentDidMount() {

            this.props.customer_personnel_get()
        }

        cus_info_form(form){
            this.form = form
        }

        onSaveSubmit(){
            this.form.validateFieldsAndScroll((err,values) => {
                if (!err){
                    console.log(values)
                    this.props.customer_personnel_info_save(values)
                }
            })
        }

        render(){
            return(
                <div>
                    <CustomerPersonnelInfoForm
                        ref={this.cus_info_form.bind(this)}
                        initForm={this.props.initForm}
                        onSaveSubmit={this.onSaveSubmit.bind(this)}
                    ></CustomerPersonnelInfoForm>
                </div>
            )
        }
    }
)