import React, { useState } from "react";
import InputComponent from "../../components/InputComponent";
import TableListData from "../../components/TableList";

import { PlusOutlined } from "@ant-design/icons";
import SpeakerDrawerForm from "./SpeakerDrawer";
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
const Speakers = () => {

  const [open, setOpen] = useState(false);
  const showDrawer = () => { setOpen(true); };
  const onClose = () => { setOpen(false); };

  const dataSource = [
    {
      key: '1',
      name: 'Shubham Shah',
      email: "xyz@gmail.com",
      Phone: '+910254845',
      country: 'India',
      state: 'Bihar',
    },
    {
      key: '2',
      name: 'kunal Jain',
      email: "xyz@gmail.com",
      Phone: '+910254845',
      country: 'India',
      state: 'Bihar',
    },

  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email ID',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone No.',
      dataIndex: 'Phone',
      key: 'Phone',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
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
            <h6><span className="ms-1">Guest & Speaker</span></h6>
          </div>

        </div>
        <div className="content">
          <div className="content-body">

            <Row className="tbl-box">
              <div style={{ float: 'inline-end' }}>
                <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>Create Speaker</Button>
              </div>
              {/* <TableListData columns={columns} /> */}
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

            <SpeakerDrawerForm onClose={onClose} open={open}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speakers;
