/**
 * Created by Administrator on 2017/8/18.
 */
import React, {Component} from "react";
import {Link} from "react-router-dom";

class Index extends Component {
    render() {
        return (
            <div>
                <Link to='/login'><h2>login</h2></Link><hr/>
                <Link to='/register'><h2>register</h2></Link><hr/>
                <Link to='/client'><h2>client</h2></Link><hr/>
            </div>
        );
    }
}

export default Index