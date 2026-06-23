
import React from "react";
import { Row, Col, DatePicker, Space, Select, Form, Card, Button, Avatar, Input, Dropdown } from "antd";
import { 
  IdcardOutlined, 
  DeploymentUnitOutlined, 
  FileProtectOutlined, 
  FormOutlined, 
  FieldTimeOutlined, 
  PlayCircleOutlined, 
  SoundOutlined, 
  UsergroupAddOutlined, 
  StarOutlined, 
  PictureOutlined,
  DownOutlined,
  SearchOutlined
} from "@ant-design/icons";
import "../../dashboard.css";

// Dropdown items
const items = [
  {
    label: (
      <span href="#" target="_blank" rel="noopener noreferrer">
        Date Created
      </span>
    ),
    key: '0',
  },
  {
    label: (
      <span href="#" target="_blank" rel="noopener noreferrer">
        Name
      </span>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
];

// Search bar
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

// Card meta
const { Meta } = Card;
const { RangePicker } = DatePicker;

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
          <p className="dashboard-subtitle">Welcome to your event management dashboard</p>
        </div>
        <div className="dashboard-actions">
          <Search
            placeholder="Search..."
            onSearch={onSearch}
            className="dashboard-search"
            prefix={<SearchOutlined />}
          />
          <Dropdown
            menu={{ items }}
            trigger={['click']}
            className="dashboard-dropdown"
          >
            <Button className="sort-button">
              Sort by <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>

      {/* Stats Cards */}
      <Row gutter={[24, 24]} className="stats-row">
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card stat-card-blue">
            <Meta
              avatar={<IdcardOutlined className="stat-icon stat-icon-blue" />}
              title="Total Occupancies"
              description="100"
              className="stat-meta"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card stat-card-green">
            <Meta
              avatar={<FileProtectOutlined className="stat-icon stat-icon-green" />}
              title="Accepted & Registered"
              description="20"
              className="stat-meta"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card stat-card-purple">
            <Meta
              avatar={<FormOutlined className="stat-icon stat-icon-purple" />}
              title="Invitation Sent"
              description="80"
              className="stat-meta"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card stat-card-orange">
            <Meta
              avatar={<FieldTimeOutlined className="stat-icon stat-icon-orange" />}
              title="Pending"
              description="60"
              className="stat-meta"
            />
          </Card>
        </Col>
      </Row>

      {/* Charts and Links Section */}
      <Row gutter={[24, 24]} className="content-row">
        {/* Registration Trend */}
        <Col xs={24} lg={8}>
          <Card className="content-card trend-card">
            <Meta
              avatar={<FileProtectOutlined className="content-icon content-icon-green" />}
              title="Registration Trend"
              className="content-meta"
            />
            <div className="trend-content">
              <DeploymentUnitOutlined className="trend-chart-icon" />
              <p className="trend-placeholder">Registration Trend Chart</p>
            </div>
          </Card>
        </Col>

        {/* Important Links */}
        <Col xs={24} lg={16}>
          <Card className="content-card links-card">
            <Meta
              avatar={<FormOutlined className="content-icon content-icon-purple" />}
              title="Important Nos and Links"
              className="content-meta"
            />
            
            {/* First row of links */}
            <div className="links-grid">
              <div className="service-link">
                <div className="service-icon-wrapper">
                  <PlayCircleOutlined className="service-icon" />
                </div>
                <span>Sessions</span>
              </div>
              <div className="service-link">
                <div className="service-icon-wrapper">
                  <SoundOutlined className="service-icon" />
                </div>
                <span>Speakers</span>
              </div>
              <div className="service-link">
                <div className="service-icon-wrapper">
                  <UsergroupAddOutlined className="service-icon" />
                </div>
                <span>Special Guest</span>
              </div>
              <div className="service-link">
                <div className="service-icon-wrapper">
                  <StarOutlined className="service-icon" />
                </div>
                <span>Feedbacks</span>
              </div>
              <div className="service-link">
                <div className="service-icon-wrapper">
                  <PictureOutlined className="service-icon" />
                </div>
                <span>Gallery</span>
              </div>
            </div>
            
            {/* Second row of links */}
            <div className="links-grid">
              <div className="service-link">
                <div className="service-icon-wrapper">
                  <PlayCircleOutlined className="service-icon" />
                </div>
                <span>Sessions</span>
              </div>
              <div className="service-link">
                <div className="service-icon-wrapper">
                  <SoundOutlined className="service-icon" />
                </div>
                <span>Speakers</span>
              </div>
              <div className="service-link">
                <div className="service-icon-wrapper">
                  <UsergroupAddOutlined className="service-icon" />
                </div>
                <span>Special Guest</span>
              </div>
              <div className="service-link">
                <div className="service-icon-wrapper">
                  <StarOutlined className="service-icon" />
                </div>
                <span>Feedbacks</span>
              </div>
              <div className="service-link">
                <div className="service-icon-wrapper">
                  <PictureOutlined className="service-icon" />
                </div>
                <span>Gallery</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
