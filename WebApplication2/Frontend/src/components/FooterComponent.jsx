import React from "react";
import { Layout,Row,Col } from "antd";

const FooterComponent = () => {
  const { Footer } = Layout;

  return (
    <Footer style={{backgroundColor:"aliceblue"  }}>
      <div className="container-fluid">
<Row>
<Col span={19}  labelAlign="left">2025 @ Event Mangment</Col>
<Col span={5} labelAlign="right">Designed & Developed by E-connect</Col>
  {/* <div className="col-sm-6 footertext">
  2025
  </div>
  <div className="col-sm-6 footertext footerend ">
  Designed & Developed by E-connect
  </div> */}
</Row>
      </div>
      {/* Designed & Developed by E-connect */}
    </Footer>
  );
};

export default FooterComponent;
