import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
import {
  Row,
  Form,
  Input,
  InputNumber,
  Table,
  Typography,
  Space,
  Button,
} from "antd";
import axios from "axios";
import AddStudentForm from "./AddStudent";

const { Search } = Input;

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
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[{ required: true, message: `Please input ${title}!` }]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Student = () => {
  const [open, setOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null); // ✅ Correctly declared inside the component
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const showDrawer = () => {
    setEditingStudent(null); // Reset any previous edit state
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    setEditingStudent(null); // Reset edit state on close
  };

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://localhost:7016/api/StudentDetails/GetAllStudents"
      );
      if (response.data.isSuccess) {
        const students = response.data.data.map((student, index) => ({
          key: student.id || index.toString(),
          name: student.userName,
          email: student.emailId,
          mobileNumber: student.mobileNumber,
          salary: student.salary,
        }));
        setDataSource(students);
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("API error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  const handleDelete = async (id) => {
    try {
      const res = await axios.post(`https://localhost:7016/api/StudentDetails/DeleteStudent?id=${id}`);
      if (res.status === 200) {
        message.success("Student deleted successfully");
        setDataSource((prev) => prev.filter((item) => item.key !== id));
      } else {
        message.error("Failed to delete student");
      }
    } catch (error) {
      console.error("Delete error:", error);
      message.error("Error deleting student");
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
    { title: "Email ID", dataIndex: "email", key: "email" },
    { title: "Mobile No.", dataIndex: "mobileNumber", key: "mobileNumber" },
    { title: "Salary", dataIndex: "salary", key: "salary" },
    {
      title: "Action",
      fixed: "right",
      render: (_, record) => (
        <Space>
          <Typography.Link
            onClick={() => {
              setEditingStudent(record); // ✅ Set selected student
              setOpen(true);             // Open drawer
            }}
          >
            Edit
          </Typography.Link>
          <Popconfirm
            title="Are you sure to delete this student?"
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
            <span className="ms-1">Student Details</span>
          </h6>
        </div>
      </div>
      <div className="content">
        <div className="content-body">
          <Row className="tbl-box">
            <div style={{ float: "inline-end" }}>
              <Button
                type="primary"
                onClick={showDrawer}
                icon={<PlusOutlined />}
              >
                Create Student
              </Button>
            </div>

            <div>
              <Search
                placeholder="Search by Name"
                onSearch={onSearch}
                style={{ width: 400 }}
              />
            </div>

            <Table
              id="common-table"
              dataSource={dataSource}
              columns={columns}
              size="small"
              style={{ width: "100%", marginTop: "0.75rem" }}
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              loading={loading}
            />
          </Row>

          {/* Drawer form with edit support */}
          <AddStudentForm
            onClose={onClose}
            open={open}
            fetchStudents={fetchStudents}
            editingStudent={editingStudent} // ✅ Pass editing student
          />
        </div>
      </div>
    </div>
  );
};

export default Student;
