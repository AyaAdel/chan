import React from 'react';
import { Layout, Button, Row, Col, Table, Select } from 'antd';
import { MobileOutlined } from '@ant-design/icons';
import MainHeader from '../../components/Header';
import OrganizationSettingsSidebar from '../../components/OrganizationSettingsSidebar';
import OrganizationSidebar from '../../components/OrganizationSidebar';

const { Content } = Layout;

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const runautomationorder = [
  {
    title: 'Name',
    dataIndex: 'servicename',
    key: 'servicename',
    render: (service) => (
      <div>
        <i className="btn-icon">
          <MobileOutlined />
        </i>
        <b>{service}</b>
      </div>
    ),
  },
  {
    title: 'runninginstances',
    dataIndex: 'runninginstances',
    key: 'runninginstances',
    render: (number) => <span className="btn-number">{number}</span>,
  },
  {
    title: '',
    dataIndex: 'viewsessions',
    key: 'viewsessions',
    render: (viewsessions) => <Button type="btn btn-primary">{viewsessions}</Button>,
  },
];

const runautomationorderdata = [
  {
    key: '1',
    servicename: 'Order Credit Report',
    detail: 'This will order credit report',
    runninginstances: '10',
    viewsessions: 'View Sessions',
  },
  {
    key: '2',
    servicename: 'Order Credit Report',
    detail: 'This will order credit report',
    runninginstances: '',
    viewsessions: '',
  },
];

const RunAutomationOrder = () => {
  return (
    <div>
      <MainHeader />
      <Layout>
        <Layout>
          <OrganizationSettingsSidebar />
          <OrganizationSidebar />
          <Content style={{ padding: '90px 20px 0px 20px' }}>
            <Data />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

const Data = () => {
  return (
    <>
      <div className="main-wrapper">
        <h3 style={{ margin: '0 0 30px 0' }}>Select Project to Run</h3>
        <div className="select-input mb-2">
          <label>Select Process</label>
          <Select defaultValue="Process 1" style={{ width: 200 }} onChange={handleChange}>
            <Option value="Process 1">Process 1</Option>
            <Option value="Process 2">Process 2</Option>
          </Select>
        </div>
        <Table
          dataSource={runautomationorderdata}
          columns={runautomationorder}
          pagination={false}
          scroll={{ x: 576 }}
        ></Table>
      </div>
      <Row>
        <Col></Col>
      </Row>
    </>
  );
};
export default RunAutomationOrder;
