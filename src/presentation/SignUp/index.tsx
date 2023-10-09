import { InputNumber, Select, Button, Input } from "antd";
import AuthenticatorHOC from "../HOC/AuthenticatorHoc"
import "./styles.less";
const SignUp = () => {
    const { Option } = Select;

    return (
        <div className="signUp__container">
            <span className="signUp__heading">
                SignUp
            </span>

            <div className="signUp__fields">
                <div className="signUp__userName">
                    <label className="label_name">Your Name</label>
                    <Input
                        className="userName"
                        placeholder="Enter Your Name"
                    />
                </div>
                <div className="signUp__location">
                    <label className="label_name">Country Code</label>
                    <Select
                        suffixIcon={<img src="src/assets/location.svg" />}
                        defaultValue={1}
                        className="location_dropdpwn"
                        placeholder="Select Country Code"
                    >
                        <Option value={1}>India(+91)</Option>
                        <Option value={2}>Russia</Option>
                    </Select>
                </div>
                <div className="signUp__mobileNumber">
                    <label className="label_name">Phone number</label>
                    <InputNumber
                        size="large"
                        className="mobile_number"
                        prefix={<img src="src/assets/user-outline.svg" />}
                        placeholder="Mobile Number"
                    />
                </div>
                <div className="signUp__captchaBox" >Captcha Box</div>
                <div className="signUp__buttonWrapper">
                    <Button className="verification_btn" >Get Verification Code</Button>
                    <Button className="login_btn" disabled>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default AuthenticatorHOC(SignUp);
