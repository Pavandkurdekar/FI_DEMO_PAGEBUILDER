import React, { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import {

    FormOutlined, // Added FormOutlined for Form Settings
    SecurityScanOutlined,

} from '@ant-design/icons';
import Settings from '../Settings/FormSettings'; // Assuming FormSettings component is correctly imported
import Crm from '../Settings/CrmSettings'; // Import the Crm component

// Import the CRM logo image (Update the path to your logo)
import IntegrateLogo from '../../Integrate-logo.png'; // Use actual path for your logo
import CaptchaSettings from '../Settings/CaptchaSettings';

const { Sider, Content } = Layout;
const { Title,} = Typography;

const SetupPage = () => {
    const [selectedKey, setSelectedKey] = useState('general'); // Keep track of the selected menu item

    // Function to handle menu selection
    const handleMenuClick = (e) => {
        setSelectedKey(e.key); // Update the selected section
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>

            <Sider width={200} className="site-layout-background" theme="light">
                <Title level={2} style={{ color: '#3169BE', marginLeft: '10px' }}>Setup</Title>
                <Menu
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    onClick={handleMenuClick}
                    style={{ height: '100%', borderRight: 0 }}
                    theme="light"
                >
                    <Menu.Item
                        key="general"
                        icon={<img src={IntegrateLogo} alt="CRM Logo" style={{ width: '20px', marginRight: '-2px' }} />}
                        style={{
                            fontWeight: selectedKey === 'general' ? 'bold' : 'normal',
                            backgroundColor: selectedKey === 'general' ? '#f0f0f0' : 'transparent',
                        }}
                    >
                        Zoho CRM Mapping
                    </Menu.Item>
                    <Menu.Item
                        key="security"
                        icon={<FormOutlined />}
                        style={{
                            fontWeight: selectedKey === 'security' ? 'bold' : 'normal',
                            backgroundColor: selectedKey === 'security' ? '' : 'transparent',
                        }}
                    >
                        Form Settings
                    </Menu.Item>
                    <Menu.Item
                        key="process"
                        icon={<SecurityScanOutlined />}
                        style={{
                            fontWeight: selectedKey === 'process' ? 'bold' : 'normal',
                            backgroundColor: selectedKey === 'process' ? '#f0f0f0' : 'transparent',
                        }}
                    >
                        Captcha
                    </Menu.Item>
                </Menu>
            </Sider>

            {/* Main content area */}
            <Layout style={{ padding: '20px 20px 20px' }}>
                <Content
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        background: '#fff',
                        borderRadius: '8px',
                        padding:"35px"
                    }}
                >
                    {/* CRM Integration content */}
                    {selectedKey === 'general' && <Crm />}

                    {/* Form Settings content */}
                    {selectedKey === 'security' && (
                        <>
                            {/* <Title style={{marginTop:"-15px", marginBottom:"-30px"}}  level={4}>Form Settings</Title> */}
                            <Settings />
                        </>
                    )}

                    {/* Other sections */}
                    {selectedKey === 'process' && (
                        <>
                            <h2 style={{marginBottom:"25px"}}>Captcha</h2>
                            <CaptchaSettings/>
                        </>
                    )}
            
                </Content>
            </Layout>
        </Layout>
    );
};

export default SetupPage;
