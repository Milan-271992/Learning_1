import React, { useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Space, message } from 'antd';
import axios from 'axios';

const AddStudentForm = ({ onClose, open, editingStudent, fetchStudents }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingStudent) {
      form.setFieldsValue({
        userName: editingStudent.name,
        emailId: editingStudent.email,
        phoneNo: editingStudent.mobileNumber,
        salary: editingStudent.salary,
      });
    } else {
      form.resetFields();
    }
  }, [editingStudent, form]);

  const handleSubmit = async (values) => {
    const payload = {
      id: editingStudent ? editingStudent.key : 0, // use key as ID
      userName: values.userName,
      mobileNumber: Number(values.phoneNo),
      emailId: values.emailId,
      salary: values.salary,
    };

    try {
      const url = editingStudent
        ? 'https://localhost:7016/api/StudentDetails/UpdateStudent'
        : 'https://localhost:7016/api/StudentDetails/AddStudent';

      const res = await axios.post(url, payload);

      if (res.status === 200) {
        message.success(`Student ${editingStudent ? 'updated' : 'added'} successfully`);
        form.resetFields();
        onClose();
        fetchStudents(); // refresh data after update
      } else {
        message.error(`Failed to ${editingStudent ? 'update' : 'add'} student`);
      }
    } catch (error) {
      console.error('API error:', error);
      message.error('Error while submitting student data');
    }
  };

  return (
    <Drawer
      title={editingStudent ? 'Edit Student' : 'Add Student'}
      className="drawer-header"
      width={550}
      onClose={onClose}
      open={open}
      styles={{ body: { paddingBottom: 80 } }}
      extra={
        <Space>
          <Button className="input-box" onClick={onClose}>Cancel</Button>
          <Button className="input-box" onClick={() => form.submit()} type="primary">
            Submit
          </Button>
        </Space>
      }
    >
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="userName"
              label="First Name"
              className="input-label"
              rules={[{ required: true, message: 'Please enter first name' }]}
            >
              <Input className="input-box" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="emailId"
              label="Email ID"
              className="input-label"
              rules={[{ required: true, message: 'Please enter email' }]}
            >
              <Input className="input-box" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="phoneNo"
              label="Phone No."
              className="input-label"
              rules={[{ required: true, message: 'Please enter phone number' }]}
            >
              <Input className="input-box" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="salary"
              label="Salary"
              className="input-label"
            >
              <Input className="input-box" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default AddStudentForm;
