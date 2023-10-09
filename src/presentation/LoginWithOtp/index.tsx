import { InputNumber, Select, Button } from "antd";
import AuthenticatorHOC from "../HOC/AuthenticatorHoc"
import "./styles.less";
const LoginWithOtp = () => {
    const { Option } = Select;

    return (
        <div className="loginWithOtp__container">
            <span className="loginWithOtp__heading">
                Welcome Back!
            </span>

            <div className="loginWithOtp__fields">
                <div className="loginWithOtp__location">
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
                <div className="loginWithOtp__mobileNumber">
                    <label className="label_name">Phone number</label>
                    <InputNumber
                        size="large"
                        className="mobile_number"
                        prefix={<img src="src/assets/user-outline.svg" />}
                        placeholder="Mobile Number"
                    />
                </div>
                <div className="loginWithOtp__buttonWrapper">
                    <Button className="verification_btn" >Get Verification Code</Button>
                </div>
            </div>
        </div>
    )
}

export default AuthenticatorHOC(LoginWithOtp);
