import { InputNumber, Select, Button, Input } from "antd";
import AuthenticatorHOC from "../HOC/AuthenticatorHoc"
import "./styles.less";
const ProfileFields = () => {
    const { Option } = Select;

    return (
        <div className="profileFields__container">
            <span className="profileFields__heading">
                Welcome Back!
            </span>

            <div className="profileFields__fields">
                <div className="profileFields__userName">
                    <label className="label_name">Your Name</label>
                    <Input
                        className="userName"
                        placeholder="Enter Your Name"
                    />
                </div>
                <div className="profileFields__location">
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
                <div className="profileFields__mobileNumber">
                    <label className="label_name">Phone number</label>
                    <InputNumber
                        size="large"
                        className="mobile_number"
                        prefix={<img src="src/assets/user-outline.svg" />}
                        placeholder="Mobile Number"
                    />
                </div>
                <div className="profileFields__password">
                    <label className="label_name">Enter Password</label>
                    <Input
                        className="password"
                        prefix={<img src="src/assets/round-password.svg" />} />
                </div>
                <div className="profileFields__password">
                    <label className="label_name">Re-enter Password</label>
                    <Input
                        className="password"
                        prefix={<img src="src/assets/round-password.svg" />} />
                </div>
                <div className="profileFields__buttonWrapper">
                    <Button className="verification_btn" >Create Account</Button>
                    <Button className="login_btn" disabled>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default AuthenticatorHOC(ProfileFields);
