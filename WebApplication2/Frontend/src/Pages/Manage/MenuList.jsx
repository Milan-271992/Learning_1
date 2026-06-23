import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
import { Row,Form,Input,InputNumber,Table,Typography,Space,Button,} from "antd";
import axios from "axios";
import AddMenuForm from "./AddMenu";

const { Search } = Input;

const EditableCell = ({editing,dataIndex,title,inputType,record,index,children,...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item name={dataIndex} style={{ margin: 0 }} rules={[{ required: true, message: `Please input ${title}!` }]} > {inputNode} </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [editingMenu, setEditingMenu] = useState(null); // ✅ Correctly declared inside the component
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const showDrawer = () => {
    setEditingMenu(null); // Reset any previous edit state
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    setEditingMenu(null); // Reset edit state on close
  };

  const fetchMenus = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://localhost:7016/api/Menu/GetAllMenus");
      if (response.data.isSuccess) {
        const menus = response.data.data.map((menu, index) => ({
          key: menu.id || index.toString(),
          name: menu.name,
          component: menu.component,
          menuType: menu.menuType,
          url: menu.url,
          pagePath: menu.pagePath,
          iconCss: menu.iconCss,
          order: menu.order,
          isActive: menu.isActive,
        }));
        setDataSource(menus);
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("API error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMenus();
  }, []);
  const handleDelete = async (id) => {
    try {
      debugger;
      const res = await axios.post(`https://localhost:7016/api/Menu/DeleteMenu?id=${id}`);
      if (res.status === 200) {
        message.success("Menu deleted successfully");
        setDataSource((prev) => prev.filter((item) => item.key !== id));
      } else {
        message.error("Failed to delete menu");
      }
    } catch (error) {
      console.error("Delete error:", error);
      message.error("Error deleting menu");
    }
  };
  const onSearch = (value) => {
    const filtered = dataSource.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setDataSource(filtered);
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Component", dataIndex: "component", key: "component" },
    { title: "Menu Type", dataIndex: "menuType", key: "menuType" },
    { title: "Url", dataIndex: "url", key: "url" },
    { title: "Page Path", dataIndex: "pagePath", key: "pagePath" },
    { title: "Icon Css", dataIndex: "iconCss", key: "iconCss" },
    { title: "Order", dataIndex: "order", key: "order" },
    { title: "Is Active", dataIndex: "isActive", key: "isActive" },
    {
      title: "Action",
      fixed: "right",
      render: (_, record) => (
        <Space>
          <Typography.Link
            onClick={() => {
              setEditingMenu(record); // ✅ Set selected menu
              setOpen(true);             // Open drawer
            }}
          >
            Edit
          </Typography.Link>
          <Popconfirm
            title="Are you sure to delete this menu?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Typography.Link type="danger">Delete</Typography.Link>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-2 EventAdd">
      <div className="p-2 row">
        <div className="header-section px-2 py-2">
          <h6>
            <span className="ms-1">Menu List</span>
          </h6>
        </div>
      </div>
      <div className="content">
        <div className="content-body">
          <Row className="tbl-box">
            <div style={{ float: "inline-end" }}><Button type="primary" onClick={showDrawer} icon={<PlusOutlined />} >Create Menu</Button></div>
            <div><Search placeholder="Search by Name" onSearch={onSearch} style={{ width: 400 }} /></div>

              <Table id="common-table" dataSource={dataSource} columns={columns} size="small" style={{ width: "100%", marginTop: "0.75rem" }} 
                  components={{ body: { cell: EditableCell, }, }} loading={loading} />
          </Row>

          {/* Drawer form with edit support */}
          <AddMenuForm onClose={onClose} open={open} fetchMenus={fetchMenus} editingMenu={editingMenu} 
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
