import { InputNumber, Select, Checkbox, Button, Input } from "antd";
import AuthenticatorHOC from "../HOC/AuthenticatorHoc"
import "./styles.less";
const SignIn = () => {
    const { Option } = Select;

    return (
        <div className="signIn__container">
            <span className="signIn__heading">
                Welcome Back!
            </span>
            <div className="signIn__fields">
                <div className="signIn__location">
                    <label className="label_name">Country Code</label>
                    <Select
                        suffixIcon={<img src="src/assets/location.svg" />}
                        defaultValue={1}
                        className="location_dropdpwn"
                    >
                        <Option value={1}>India(+91)</Option>
                        <Option value={2}>Russia</Option>
                    </Select>
                </div>
                <div className="signIn__mobileNumber">
                    <label className="label_name">Phone number</label>
                    <InputNumber
                        size="large"
                        className="mobile_number"
                        prefix={<img src="src/assets/user-outline.svg" />} />
                </div>
                <div className="signIn__password">
                    <label className="label_name">Password</label>
                    <Input
                        className="password"
                        prefix={<img src="src/assets/round-password.svg" />} />
                </div>
                <div className="signIn__remember_forget">
                    <div className="remember_checkbox">
                        <Checkbox className="rememberMe_checkbox" onChange={() => { }}><span className="rememberMe_text">Remember Me</span></Checkbox>
                    </div>
                    <div className="forget_password">
                        <img className="forget_password_icon" src="src/assets/password-outline.svg" />
                        <label className="forget_password_text">Forget Password?</label>
                    </div>
                </div>
                <Button className="signIn__button" >Login</Button>
            </div>
        </div>
    )
}

export default AuthenticatorHOC(SignIn);
