import React, { useRef } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import '../index.css'

const { Header, Content, Footer } = Layout;

const items = [
    {
        key: '/',
        label: 'Home',
    },
    {
        key: '/tech',
        label: 'Tech',
    },
    {
        key: '/sport',
        label: 'Sport',
    }
]

type Click = {
    key : string
}
const Dashboard: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const pathRef = useRef([location.pathname])
    const handleClick = (e : Click) => {
        pathRef.current = [e.key]
        navigate(e.key)
    }
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={pathRef.current}
                    items={items}
                    style={{ flex: 1, minWidth: 0}}
                    onClick={handleClick}
                />
            </Header>
            <Content style={{ padding: '0 15%' }}>
                <div
                    style={{
                        padding: 10,
                        minHeight: "100vh",
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default Dashboard;