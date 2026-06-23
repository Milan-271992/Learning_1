import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import * as Icons from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState([]);
  const [allMenus, setAllMenus] = useState([]);

  // Convert icon name string to actual AntD icon component
  const getIcon = (iconName) => {
    const AntIcon = Icons[iconName];
    return AntIcon ? <AntIcon /> : null;
  };

  useEffect(() => {
    // Fetch main (parent) menus and all menus
    const fetchMenus = async () => {
      try {
        const [mainRes, allRes] = await Promise.all([
          axios.get("https://localhost:7016/api/Menu/GetMainMenus"),
          axios.get("https://localhost:7016/api/Menu/GetAllMenus"),
        ]);

        if (mainRes.data.isSuccess && allRes.data.isSuccess) {
          const parents = mainRes.data.data;
          const all = allRes.data.data;
          setAllMenus(all);

          // Build nested structure
          const structuredMenu = parents.map((parent) => {
            const children = all
              .filter((menu) => menu.parentId === parent.id && menu.isActive === 1)
              .sort((a, b) => a.order - b.order)
              .map((child) => ({
                key: child.id.toString(),
                label: child.name,
                icon: getIcon(child.iconCss),
                path: child.url,
              }));

            return {
              key: parent.id.toString(),
              label: parent.name,
              icon: getIcon(children[0]?.iconCss), // Use first child's icon
              children,
            };
          });

          setMenuData(structuredMenu);
        }
      } catch (err) {
        console.error("Menu fetch failed:", err);
      }
    };

    fetchMenus();
  }, []);

  // Navigate on click
  const handleClick = ({ key }) => {
    const selectedItem = allMenus.find((item) => item.id.toString() === key);
    if (selectedItem && selectedItem.url) {
      navigate(selectedItem.url);
    }
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        items={[
          {
            key: "dashboad",
            label: "Dashboard",
            icon: <Icons.DashboardOutlined />,
          },
          ...menuData,
        ]}
        onClick={({ key }) => {
          if (key === "dashboad") {
            navigate("/dashboad");
          } else {
            handleClick({ key });
          }
        }}
      />
    </Sider>
  );
  
};

export default Sidebar;
