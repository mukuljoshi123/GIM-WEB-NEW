import { Button } from "antd";
import AuthenticatorHOC from "../HOC/AuthenticatorHoc"
import "./styles.less";
const ValidateOtp = () => {

    return (
        <div className="validateOtp__container">
            <span className="validateOtp__heading">
                OTP Verification
            </span>
            <div className="validateOtp__fields">
                <span className="validateOtp__heading">
                    Enter OTP
                </span>
                <span className="validateOtp__subHeading">Please enter the one time password</span>
                <div className="otp_wrapper">
                    <input className="otp_inputField"></input>
                    <input className="otp_inputField"></input>
                    <input className="otp_inputField"></input>
                    <input className="otp_inputField"></input>
                    <input className="otp_inputField"></input>
                    <input className="otp_inputField"></input>
                </div>
                <div className="validateOtp__buttonWrapper">
                    <Button className="verification_btn" >Validate OTP And Login</Button>
                </div>
            </div>
        </div>
    )
}

export default AuthenticatorHOC(ValidateOtp);
