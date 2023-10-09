import { Menu } from 'antd'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { DashboardOutlined, HomeOutlined, PoweroffOutlined, ProfileOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { useState } from 'react'
import GuestPage from './presentation/GuestPage'
import GuestHeader from './presentation/GuestHeader'
import SignIn from './presentation/SignIn'
import SignUp from './presentation/SignUp'
import LoginWithOtp from './presentation/LoginWithOtp'
import ValidateOtp from './presentation/ValidateOtp'
import ProfileDetails from './presentation/ProfileDetails'

function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(true);
  return (
    <div className='app_container'>
      {!isAuthenticate && <GuestHeader />}
      {isAuthenticate && <div className='app_main_content'>
        <SideMenu />
        <Content />
      </div>}
      {!isAuthenticate && <div className='app_main_content'>
        <GuestContent />
      </div>}
      <Footer />
    </div>

  )
}

function Header() {
  return (
    <div className='app_header'> Header</div>
  )
}

function SideMenu() {
  const navigate = useNavigate();
  const onClickMenuItem = (menuKey: string) => {
    navigate(menuKey)
  }
  return (
    <Menu
      mode="inline"
      className='app_sideMenu'
      defaultSelectedKeys={[window.location.pathname]}
      onClick={({ key }) => onClickMenuItem(key)}
      items={[{ label: "Home", icon: <HomeOutlined />, key: "/home" },
      { label: "Dashboard", icon: <DashboardOutlined />, key: "/dashboard" },
      {
        label: "Users", icon: <UnorderedListOutlined />, key: "/usersList",
        children: [
          { label: 'Active Users', key: "/activeUsers" },
          { label: 'Pending Users', key: "/pendingUsers" },
          { label: 'In Active Users', key: "/inactiveUsers" },
        ]
      },
      { label: "Profile", icon: <ProfileOutlined />, key: "/profile" },
      { label: "Signout", icon: <PoweroffOutlined />, danger: true, key: 'signout' }
      ]}
    ></Menu>
  )
}

function Content() {
  return <div>
    <Routes>
      <Route path="/home" element={<div>Home</div>}></Route>
      <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
      <Route path="/activeUsers" element={<div>Active UserList</div>}></Route>
      <Route path="/pendingUsers" element={<div>Pending UserList</div>}></Route>
      <Route path="/inactiveUsers" element={<div>In Active UserList</div>}></Route>
      <Route path="/profile" element={<div>Profile</div>}></Route>
    </Routes>
  </div>
}

function GuestContent() {

  return <div>
    <Routes>
      <Route path="/" element={<GuestPage />}></Route>
      <Route path="/singup" element={<SignUp/>}></Route>
      <Route path="/singnin" element={<SignIn/>}></Route>
      <Route path="/loginwithotp" element={<LoginWithOtp/>}></Route>
      <Route path="/otpverification" element={<ValidateOtp/>}></Route>
      <Route path="/profiledetails" element={<ProfileDetails/>}></Route>
      <Route path="/pendingUsers" element={<div>Pending UserList</div>}></Route>
      <Route path="/inactiveUsers" element={<div>In Active UserList</div>}></Route>
      <Route path="/profile" element={<div>Profile</div>}></Route>
    </Routes>
  </div>
}

function Footer() {
  return (
    <div className='app_footer'>&copy; All Rights Reserve to MR Groups @2023</div>
  )
}


export default App
