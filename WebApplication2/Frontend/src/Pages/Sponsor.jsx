import React from "react";
import InputComponent from "../components/InputComponent";
import { Row, Col } from "antd";

const Sponsor = () => {
  return (
    <div>
      <div className="header">
        <label>Sponsor</label>
      </div>
      <div className="content">
        <div className="content-header">
          <label>General Details</label>
        </div>
        <div className="content-body">
          <Row>
            <Col md={6}>
              <InputComponent
                label="Sponsor Name"
                name="sponsorName"
                placeholder="Enter Sponsor Name"
              />
            </Col>
            <Col md={6}>
              <InputComponent
                label="Sponsor ID"
                name="sponsorId"
                placeholder="Enter Sponsor ID"
              />
            </Col>
            <Col md={6}>
              <InputComponent
                label="Sponsor Email"
                name="sponsorEmail"
                placeholder="Enter Sponsor Email"
              />
            </Col>
            <Col md={6}>
              <InputComponent
                label="Sponsor Phone"
                name="sponsorPhone"
                placeholder="Enter Sponsor Phone"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
