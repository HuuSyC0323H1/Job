import './login.scss'
import Img from '../../assets/react.svg'
import {Link} from "react-router-dom";
import { TextField, Button, Typography } from '@mui/material';

const Login = () => {

    return (
        <div className="login">
            <div className="left">
                <div className="signup-form">
                    <div className="auth-logo">
                        <div className="title">
                            <div className="image">
                                <img src={Img ? Img : "" } className="logo-img" alt="Logo"/>
                            </div>
                            <div className="titel-name">
                                <span className="x193u">SoundSculpt</span>
                                <span>Enjoy the sublime</span>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="form">
                            <div className="name">
                                <TextField
                                    fullWidth
                                    label="UserName or Email"
                                    name="userName"
                                />
                            </div>
                            <div className="password">
                                <TextField
                                    fullWidth
                                    type="password"
                                    label="Password"
                                    name="password"
                                />
                            </div>
                            <div className="x192u">
                                <div className="res-password">
                                    <Link to="/forgotPassword">
                                        Forgot password?
                                    </Link>
                                </div>
                                <Button variant="contained" color="primary">
                                    Login
                                </Button>
                            </div>
                            <div className="x191u">
                                <div className="intro">
                                    <Typography variant="body2" color="textSecondary" style={{marginBottom: "10px"}}>
                                        Start using your fingerprint
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        className="btn-smsign-up"
                                        data-toggle="modal"
                                        data-target="#fingerprintModal"
                                    >
                                        Use Fingerprint
                                    </Button>
                                </div>
                                <div className="action" style={{marginTop: "20px"}}>
                                  <span className="go-login">
                                    Not yet a member? <Link to="/register">Sign Up</Link>
                                  </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="content">
                    asdasdasd
                    <div className="text-white">
                        <h2 className="create-account">Welcome Back</h2>
                        <p>Thank you for joining. Updates and new features are released daily.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;