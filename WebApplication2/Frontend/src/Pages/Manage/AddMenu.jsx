import React, { useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Space, message } from 'antd';
import axios from 'axios';

const AddMenuForm = ({ onClose, open, editingMenu, fetchMenus }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingMenu) {
      form.setFieldsValue({
        name: editingMenu.name,
        component: editingMenu.component,
        menuType: editingMenu.menuType,
        url: editingMenu.url,
        pagePath: editingMenu.pagePath,
        iconCss: editingMenu.iconCss,
        order: editingMenu.order,
        isActive: editingMenu.isActive,
      });
    } else {
      form.resetFields();
    }
  }, [editingMenu, form]);

  const handleSubmit = async (menu) => {
    const payload = {
          id: editingMenu ? editingMenu.key : 0, // use key as ID
      name: menu.name,
      component: menu.component,
      menuType: menu.menuType,
      url: menu.url,
      pagePath: menu.pagePath,
      iconCss: menu.iconCss,
      order: menu.order,
      isActive: menu.isActive,
    };

    debugger;

    try {
      const url = editingMenu
        ? 'https://localhost:7016/api/Menu/UpdateMenu'
        : 'https://localhost:7016/api/Menu/AddMenu';

      const res = await axios.post(url, payload);



      if (res.status === 200) {
        message.success(`Menu ${editingMenu ? 'updated' : 'added'} successfully`);
        form.resetFields();
        onClose();
        fetchMenus(); // refresh data after update
      } else {
        message.error(`Failed to ${editingMenu ? 'update' : 'add'} menu`);
      }
    } catch (error) {
      console.error('API error:', error);
      message.error('Error while submitting student data');
    }
  };

  return (
    <Drawer
      title={editingMenu ? 'Edit Menu' : 'Add Menu'}
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
              name="name"
              label="Menu Name"
              className="input-label"
              rules={[{ required: true, message: 'Please enter menu name' }]}
            >
              <Input className="input-box" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="component"
              label="Component"
              className="input-label"
              rules={[{ required: true, message: 'Please enter component' }]}
            >
              <Input className="input-box" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="url"
              label="Url"
              className="input-label"
              rules={[{ required: true, message: 'Please enter url' }]}
            >
              <Input className="input-box" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="pagePath"
              label="Page Path"
              className="input-label"
            >
              <Input className="input-box" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="iconCss"
              label="Icon Css"
              className="input-label"
            >
              <Input className="input-box" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="order"
              label="order "
              className="input-label"
            >
              <Input className="input-box" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="isActive"
              label="is Active"
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

export default AddMenuForm;
