import React from "react";
import { Layout, theme } from "antd";  // Import theme from antd

const HeaderComponent = () => {
  const { Header } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();  // Access theme token

  return (
    <Header style={{ padding: 0, background: colorBgContainer }} >

      </Header>
  );
};

export default HeaderComponent;
