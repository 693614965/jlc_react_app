/**
 * Created by Administrator on 2017/8/21.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../actions/mapDispatchToProps";
import RegisterForm from "./RegisterForm";

export default connect(mapStateToProps, mapDispatchToProps)(
    class RegisterIndex extends Component {
        registerForm(form) {
            this.form = form
        }

        register() {
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    this.props.user_register(values)
                }
            })
        }

        render() {
            return (
                <div>
                    <RegisterForm
                        ref={this.registerForm.bind(this)}
                        register={this.register.bind(this)}
                    ></RegisterForm>
                </div>
            )
        }
    }
)