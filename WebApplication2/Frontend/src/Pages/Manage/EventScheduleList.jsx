import React, { useState } from "react";
import InputComponent from "../../components/InputComponent";
import TableListData from "../../components/TableList";
// import { Row, Col, Button, Flex } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ScheduleDrawerForm from "./EventScheduleDrawer";
import {Row, Col, Form, Input, InputNumber, Popconfirm, Table, Typography, Space, Button, Flex } from 'antd';
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
// serch bar
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
//

const EventSchedule = () => {

  const [open, setOpen] = useState(false);
  const showDrawer = () => { setOpen(true); };
  const onClose = () => { setOpen(false); };
  const dataSource = [
    {
      key: '1',
      name: 'kunal Jain',
      type: "Motivation",
      phone: '+910254845',
      speaker: 'Shubham Shah',
      date: '03-02-2025',
    },
    {
      key: '2',
      name: 'kunal Jain',
      type: "Business Leaders",
      phone: '+910254845',
      speaker: 'Shubham Shah',
      date: '03-02-2025',
    },

  ];
  
  const columns = [
    {
      title: 'Session Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Session Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Speaker',
      dataIndex: 'speaker',
      key: 'speaker',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Action',
      // width: 150,
      fixed: 'right',
      render: () => (
        <Space>
          <Typography.Link>Edit</Typography.Link>
        </Space>
      ),
    },
    
  ];

  return (
    <>
      <div className="p-2 EventAdd">
        <div className="p-2 row">
          <div className="header-section px-2 py-2">
            <h6><span className="ms-1">Event Schedule</span></h6>
          </div>

        </div>
        <div className="content">
          <div className="content-body">

            <Row className="tbl-box">
              <div style={{ float: 'inline-end' }}>
                <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>Create Schedule</Button>
              </div>
              {/* <TableListData /> */}
              <div>
        <Search placeholder="Search by Name" onSearch={onSearch} style={{ width: 400, }} />
      </div>
              <Table id='common-table'  dataSource={dataSource} columns={columns} size="small"  style={{ width: "100%" ,marginTop:"0.75rem"}}
              components={{
                body: {
                  cell: EditableCell,
                },
              }} 
              />
            </Row>

            <ScheduleDrawerForm onClose={onClose} open={open}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSchedule;
