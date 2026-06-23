import React from "react";
import { Layout } from "antd";

const ContentComponent = ({ colorBgContainer, borderRadiusLG, ContentPart }) => {
  const { Content } = Layout;

  return (
    <Content style={{ margin: "0 16px"}}>
      <div className="Content-Box"
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          // borderRadius: borderRadiusLG,
          marginTop: "20px",
        }}
      >
    {ContentPart}
      </div>
    </Content>
  );
};

export default ContentComponent;
