import React from "react";
//import { droneIcon } from "./assets/droneIcon.png"
export class Signin extends React.Component {
    
    constructor(props) {
        super(props);
    }
    // handleChange = (e) => {
    //     console.log(e)
    // }
    // handleSubmit = (e) => {
    //     console.log(e)
    // }
    render() {
        return (
            <div className="base-container">
            <div className="header">Login</div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username"/>  
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password"/>  
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                </button>
            </div>
            </div>
        );
    }
}

export default Signin;