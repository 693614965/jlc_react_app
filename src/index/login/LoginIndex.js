/**
 * Created by Administrator on 2017/8/21.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../actions/mapDispatchToProps";
import LoginForm from "./LoginForm";

export default connect(mapStateToProps, mapDispatchToProps)(
    class LoginIndex extends Component {
        loginForm(form) {
            this.form = form
        }

        login() {
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    this.props.user_login(values)
                }
            })
        }

        render() {
            return (
                <div>
                    <LoginForm
                        ref={this.loginForm.bind(this)}
                        login={this.login.bind(this)}
                    ></LoginForm>
                </div>
            )
        }
    }
)