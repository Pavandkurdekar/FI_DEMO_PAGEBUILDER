import React, { useState, useEffect } from 'react';
import { List, Modal, Button, Card, Spin, Typography } from 'antd';
import axios from 'axios';

const { Title, Text } = Typography;

const LayoutSelector = ({ onSelectLayout }) => {
  const [layouts, setLayouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchLayouts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/server/verification/crm/meta/layouts');
        if (response.data.layouts) {
          setLayouts(response.data.layouts);
        } else {
          console.error("No layouts found in API response.");
        }
      } catch (error) {
        console.error('Error fetching layouts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLayouts();
  }, []);

  return (
    <>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Select Layout
      </Button>
      <Modal
        title={<Title level={4}>Select a Layout</Title>}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        bodyStyle={{ padding: '20px', maxHeight: '600px', overflowY: 'auto' }}
        style={{ maxWidth: 900 }}
      >
        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px 0' }}>
            <Spin size="large" />
            <Text>Loading layouts...</Text>
          </div>
        ) : (
          <List
            grid={{
              gutter: 24,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
            }}
            dataSource={layouts}
            renderItem={(layout) => (
              <List.Item>
                <Card
                  hoverable
                  onClick={() => {
                    onSelectLayout(layout);
                    setIsModalVisible(false);
                  }}
                  style={{
                    borderRadius: '10px',
                    textAlign: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    border: 'none',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                  }}
                  bodyStyle={{
                    padding: '20px',
                  }}
                  cover={
                    <div
                      style={{
                        height: '150px',
                        background: 'linear-gradient(135deg,rgb(235, 229, 231), #3169BE)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                      }}
                    >
                      <span style={{ color: '#fff', fontSize: '48px' }}>
                        {layout.icon || '🔧'}
                      </span>
                    </div>
                  }
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 8px 116px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                  }}
                >
                  <Title level={5} style={{ margin: '10px 0' }}>
                    {layout.name}
                  </Title>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    {layout.description || 'No description available'}
                  </Text>
                </Card>
              </List.Item>
            )}
          />
        )}
      </Modal>
    </>
  );
};

export default LayoutSelector;
