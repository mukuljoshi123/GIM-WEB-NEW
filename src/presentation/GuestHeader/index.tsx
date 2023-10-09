import { Drawer, Menu } from "antd";
import "./styles.less";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
const GuestHeader = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className="guestHeader__container">
            <div className="guestHeader__hamburger">
                <MenuOutlined className="hamburger_icon" onClick={() => setOpenMenu(true)} />
            </div>
            <span className="header_menu">
                <GuestHeaderMenu />
            </span>
            <Drawer
                placement="left"
                closable
                open={openMenu}
                onClose={() => { setOpenMenu(false) }}
                className="guestHeade__drawer">
                <GuestHeaderMenu isInline />
            </Drawer>
        </div>
    )
}

function GuestHeaderMenu({ isInline = false }) {
    return (
        <Menu
            className="guestHeader__menuItem"
            mode={isInline ? "inline" : "horizontal"}
            items={[
                {
                    label: "Home",
                    key: "home"
                },
                {
                    label: "Request For Demo",
                    key: "requestDemo"
                },
                {
                    label: "Contact Us",
                    key: "contactUs"
                },
                {
                    label: "SignIn",
                    key: "signin"
                }

            ]}
        >

        </Menu>
    )
}

export default GuestHeader;