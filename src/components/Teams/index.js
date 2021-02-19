import React, { useState } from 'react';
import { Tabs, Card, Button, Table, Space } from 'antd';

import './style.css';

const { TabPane } = Tabs;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '50%',
  },
  {
    title: 'Members',
    dataIndex: 'member',
    key: 'member',
  },
];

const data = [
  {
    key: '1',
    name: 'Administrators',
    member: 2,
  },
];

const administratorsColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '25%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: '25%',
  },
  {
    title: 'Data Assigned',
    dataIndex: 'dataAssigned',
    key: 'dataAssigned',
    render: () => (
      <Space size="middle">
        <span>12/01/2020</span>
        <Button type="primary" className="teams-delete">
          Delete
        </Button>
      </Space>
    ),
  },
];

const administratorsData = [
  {
    key: '1',
    name: 'Aya Adel',
    email: 'abc@gmail.com',
  },
];

function Teams() {
  const [activeKey, setActiveKey] = useState('1');

  const callback = (key) => setActiveKey(key);

  return (
    <div>
      <div className="main-wrapper teams">
        <h3>Teams</h3>
        <Tabs activeKey={activeKey} onChange={callback}>
          <TabPane tab="Teams" key="1">
            <Card
              title={
                <>
                  <span className="title">Total</span>
                  <span className="count-team">1</span>
                </>
              }
              extra={<Button type="primary">New Team</Button>}
            >
              <Table
                size="middle"
                onRow={() => ({ onClick: () => setActiveKey('2') })}
                columns={columns}
                dataSource={data}
                bordered={true}
                pagination={false}
                className="teams-total"
                scroll={{ x: '250px' }}
              />
            </Card>
          </TabPane>
          <TabPane tab="Team Members" key="2">
            <Card
              title={
                <>
                  <span className="title">Administrators</span>
                  <span className="count-team">1</span>
                </>
              }
              extra={<Button type="primary">Asign Member</Button>}
            >
              <Table
                size="middle"
                columns={administratorsColumns}
                dataSource={administratorsData}
                bordered={true}
                pagination={false}
                className="teams-adminstrators"
                scroll={{ x: '430px' }}
              />
            </Card>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Teams;
