import Img from '../../assets/react.svg'
import {Link} from "react-router-dom";
import './register.scss';
import {Button, TextField} from "@mui/material";

const Register = () => {

    return (
        <div className="register">
            <div className="left">
                <div className="signup-form">
                    <div className="auth-logo">
                        <div className="title">
                            <div className="image">
                                <img src={Img ? Img : ""} className="logo-img" alt="Logo"/>
                            </div>
                            <div className="titel-name">
                            <span className="x193u">SoundSculpt</span>
                                <span>Enjoy the sublime</span>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="form">
                            <div className="x192u">
                                <div className="firstName">
                                    <div className="form-group">
                                        <TextField fullWidth label={"FirstName"} name={"FirstName"}/>
                                    </div>
                                </div>
                                <div className="lastName">
                                    <div className="form-group">
                                        <TextField fullWidth label={"LastName"} name={"LastName"}/>
                                    </div>
                                </div>
                            </div>
                            <div className="email">
                                <div className="form-group">
                                    <TextField fullWidth label={"Email"} name={"Email"}/>
                                </div>
                            </div>
                            <div className="password">
                                <div className="form-group">
                                    <TextField fullWidth label={"Password"} name={"Password"}/>
                                </div>
                            </div>
                            <div className="confirmPassword">
                                <div className="form-group">
                                    <TextField fullWidth label={"ConfirmPassword"} name={"ConfirmPassword"}/>
                                </div>
                            </div>
                            <div className="intro">
                                <p className="agree-privacy">By clicking the Sign Up button below you agreed to our
                                    privacy policy and terms of use of our website.</p>
                            </div>
                            <div className="x191u">
                                <div className="action">
                                    <span className="go-login">Already a member? <Link to="/login">Sign In</Link></span>
                                </div>
                                <div className="text-right">
                                    <div className="form-group">
                                        <Button variant="contained" color="primary">
                                            Sign Up
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="content">
                    {/*<Weather/>*/}
                    <div className="text-white">
                        <h2 className="create-account mb-3">Create Account</h2>
                        <p>Enter your personal details and start journey with us.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;