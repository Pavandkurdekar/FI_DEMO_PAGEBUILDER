import React, { useEffect } from 'react';
import { Card, Typography, Avatar, Row, Col, Divider, Space } from 'antd';
import { UserOutlined, MailOutlined, GlobalOutlined, CalendarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Profile = ({ userDetails }) => {
  useEffect(() => {
    //console.log('Got User Details In Profile', userDetails);
  }, []);

  if (!userDetails) {
    return <Text>No user details available.</Text>;
  }

  const cardStyle = {
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    padding: '32px',
    background: 'linear-gradient(135deg, #3169be, #103557)',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const avatarStyle = {
    backgroundColor: '#3169be',
    fontSize: '48px',
    marginBottom: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const infoTextStyle = {
    color: '#103557',
    fontSize: '16px',
  };

  const roleBadgeStyle = {
    backgroundColor: '#3169be',
    color: '#fff',
    padding: '6px 16px',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '14px',
    display: 'inline-block',
    marginTop: '10px',
    marginBottom: '20px',
  };

  const iconStyle = {
    color: '#3169be',
    fontSize: '20px',
  };

  const dividerStyle = {
    margin: '20px 0',
    borderColor: '#3169be',
  };

  const lighterBackgroundStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '12px 16px',
    margin: '8px 0',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <Card style={cardStyle}>
      <Avatar size={120} style={avatarStyle} icon={<UserOutlined />} />
      <Title level={3} style={{ marginBottom: '8px', color: '#fff' }}>
        {userDetails.firstName} {userDetails.lastName}
      </Title>
      <div style={roleBadgeStyle}>{userDetails.role || 'User'}</div>
      <Divider style={dividerStyle} />
      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <div style={lighterBackgroundStyle}>
            <Space>
              <MailOutlined style={iconStyle} />
              <Text style={infoTextStyle}>{userDetails.mailid}</Text>
            </Space>
          </div>
        </Col>
        <Col span={24}>
          <div style={lighterBackgroundStyle}>
            <Space>
              <GlobalOutlined style={iconStyle} />
              <Text style={infoTextStyle}>Time Zone: {userDetails.timeZone}</Text>
            </Space>
          </div>
        </Col>
        <Col span={24}>
          <div style={lighterBackgroundStyle}>
            <Space>
              <CalendarOutlined style={iconStyle} />
              <Text style={infoTextStyle}>
                Joined: {new Date(userDetails.createdTime).toLocaleDateString()}
              </Text>
            </Space>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Profile;
