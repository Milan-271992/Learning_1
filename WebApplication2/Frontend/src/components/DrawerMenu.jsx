import React, { useState } from "react";
import { Menu } from "antd";
import { StepForwardOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';


const DrawerMenu = ({ collapseddrawer, onCollapse, colorBgContainer }) => {
  const [stateOpenKeys, setStateOpenKeys] = useState("2");

  const items = [
    {
      key: "3",
      label: "Dashboard",
      path:"/dashboad"
   
    },
    {
      key: "4",
      label: "Event Info.",
      path:"/event"
      // children: [
      // { key: "12", label: "Sponsor" },
      // ],
    },
    {
      key: "5",
      label: "Speakers",
      path:"/speakers"
   
    },
    {
      key: "6",
      label: "Sessions",
      path:"/schedule"
   
    },
    {
      key: "7",
      label: "Event Gallery",
      path:"/eventgallery"
   
    },
    {
      key: "8",
      label: "Student",
      path:"/student"
   
    },
   
  ];

  

  const onOpenChange = (openKeys) => {
    setStateOpenKeys(openKeys.key)
    {items.map((item) => {
      if (stateOpenKeys === item.key) {
        navigate(item.path);
       
      }
      // return null; 
    })}
    
  };

  const handleMenuClick = (e) => {
    const selectedKey = e.key; // Access the selected item's key
    const selectedItem = items.find((item) => item.key === selectedKey);

    if (selectedItem) {
      navigate(selectedItem.path); // Navigate to the selected item's path
    }
  };
  const navigate = useNavigate();
  return (
    <div>
      {/* Forward Button */}
      <div className="mt-2 Forward-btn">
        <a onClick={onCollapse}>
          <StepForwardOutlined />
        </a>
      </div>

      {/* Drawer Menu */}
      {collapseddrawer && (
        <Menu
          mode="inline"
          defaultSelectedKeys={["231"]}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          style={{ width: 220, background: colorBgContainer }}
          items={items}
          onClick={handleMenuClick} // Properly handle menu clicks
        />
      )}
    </div>
  );
};

export default DrawerMenu;
