import React from "react";
import InputComponent from "../components/InputComponent";
import { Row, Col, DatePicker, Space, Select, Form, Card, Button } from "antd";
import FormItem from "antd/es/form/FormItem";
import { GlobalOutlined, XOutlined, LinkedinOutlined, FacebookOutlined, YoutubeOutlined, InstagramOutlined ,SettingOutlined} from "@ant-design/icons";

import DropDownSelect from "../components/DropDown";
import DatePickerBox from "../components/DatePicker";
import UploadComponents from "../components/uploadComponent";
import TimePickerComponent from "../components/TimeComponent";

const { RangePicker } = DatePicker;

const EventForm = () => {
  return (
    <>
      <div className="p-2 EventAdd">
        <div className="p-2 row">
          <div className="header-section px-2 py-2">
            <h6><span className="ms-1">Event Details</span></h6>
          </div>

        </div>
        <div className="content">
          <div className="content-body">
            <div className="header-sub-section">
              <h3><span className="sub-heading">General Details</span></h3>
            </div>
            <Row>

              <Col span={6} className="col-padding">

                <InputComponent
                  label="Event Name"
                  name="eventName"
                  placeholder="Enter Event Name"
                  labelClass="input-label"
                  inputClass="input-box"
                />
              </Col>
              <Col span={6} className="col-padding">
                <InputComponent
                  label="Name of the event"
                  name="nameOfTheEvent"
                  placeholder="Enter Name of the event"
                  labelClass="input-label"
                  inputClass="input-box"
                />
              </Col>
              <Col span={6} className="col-padding">

                <DropDownSelect
                  label="Event Type"
                  name="eventType"
                  placeholder="Enter Event Type"
                  labelClass="input-label"
                  inputClass="input-box"
                  options={[
                    {
                      value: '1',
                      label: 'Seminar',
                    },
                    {
                      value: '2',
                      label: 'Conference',
                    },
                    {
                      value: '3',
                      label: 'Social Event',
                    },

                  ]} />

              </Col>

              <Col span={6} className="col-padding">
                <InputComponent
                  label="Type of event"
                  name="Typeofevent"
                  placeholder="Enter Type of event"
                  labelClass="input-label"
                  inputClass="input-box"
                />
              </Col>



            </Row>
            {/* 2nd time section */}
            <div className="header-sub-section">
              <h3><span className="sub-heading">Date and Time</span></h3>
            </div>
            <Row>

              <Col span={5} className="col-padding">

                <DatePickerBox
                  className="date-box"
                  label="From Date and Time "
                  name=""
                  placeholder="Enter From Date and Time "
                  labelClass="input-label"
                />
              </Col>

              <Col span={5} className="col-padding">

<TimePickerComponent
  className="date-box"
  label="From Time Format "
  name=""
  placeholder="Enter From Time Format "
  labelClass="input-label"
/>
</Col>
              <Col span={5} className="col-padding">

                <DatePickerBox
                  label="To Date and Time "
                  name=""
                  placeholder="Enter To Date and Time  "
                  labelClass="input-label"
                />
              </Col>
              <Col span={5} className="col-padding">

<TimePickerComponent
  className="date-box"
  label="To Time Format "
  name=""
  placeholder="Enter To Time Format"
  labelClass="input-label"
/>
</Col>
            </Row>

            {/* 3rd section */}
            <div className="header-sub-section">
              <h3><span className="sub-heading">Event Website Access</span></h3>
            </div>
            <Row style={{marginTop:"0.3rem"}}>
              <Col span={24} className="col-padding">
                <Card className="card-box"style={{ width: "100%"}}>
                  <div class="event-block">
                    <div class="event-block-div-left">
                    <GlobalOutlined className="glob-icon" />
                      <div>
                        <div class="public-font">
                          Public</div>
                        <div class="text-small">Any visitor can access this event website</div>
                      </div>
                    </div>
                    <div class="event-block-div-right">
                     <Button className="card-link-btn" type="link" block><SettingOutlined />
                        Manage Access
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>



            </Row>
            {/* 4 section */}
            <div className="header-sub-section">
              <h3><span className="sub-heading">Event thumbnail</span></h3>
            </div>
            <Row style={{marginTop:"0.3rem"}}>
              <Col span={24} className="col-padding">
                <Card className="event-card"style={{ width: "100%", }}            >
                  <div style={{ display: "flex" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ backgroundImage: "url(https://static.zohocdn.com/backstage/v1.0/images/themes/stargaze-bg-cf46f138b62b4aba75afd1032974087c.png)" }}
                        class="uls-image huge-size bordered bg-cover"></div>

                      <div>
                        <UploadComponents uploadBtn="upload-btn" />
                        <div style={{ fontWeight: "600", fontSize: "17px" }}>
                          File size: Up to 5MB</div>
                        <div class="text-small">Optimal dimensions: 600x280px</div>
                        <div class="text-small">Supported file types: JPG, JPEG, PNG, GIF, WEBP</div>
                      </div>
                    </div>

                  </div>
                </Card>
              </Col>
            </Row>
            {/* 5 section */}
            <div className="header-sub-section">
              <h3><span className="sub-heading">Location & Time Zone</span></h3>
            </div>

            {/* <div style={{ paddingLeft: "1rem" }}>
          <h4><span>Location</span></h4>
        </div> */}
            <Row style={{marginTop:"0.3rem"}}>
              <Col span={24} className="col-padding">
                <Card  className="map-card"style={{ width: "50%", }}            >
                  <div style={{ display: "flex" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ backgroundImage: "url(https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg)" }}
                        class="uls-image huge-size bordered bg-cover upload-img-card"></div>
                    </div>

                  </div>
                </Card>
              </Col>
            </Row>

            {/* 6 Additional Details section */}
            <div className="header-sub-section">
              <h3><span className="sub-heading">Additional Details</span></h3>
            </div>
            <Row>

              <Col span={24} className="col-padding">

                <InputComponent
                  label="Event Slogan"
                  name=""
                  placeholder="Enter Event Slogan"
                  labelClass="input-label"
                  inputClass="input-box"
                />
              </Col>
            </Row>
            <Row>
              <Col span={24} className="col-padding">
                <InputComponent
                  label="Event Description"
                  name=""
                  placeholder="Enter Event Description"
                  labelClass="input-label"
                  inputClass="input-box"
                />
              </Col>
            </Row>
            <Row>
              <Col span={24} className="col-padding">
                <InputComponent
                  label="Event Summary"
                  name=""
                  placeholder="Enter Event Summary"
                  labelClass="input-label"
                  inputClass="input-box"
                />
              </Col>
            </Row>

            {/* 7 Sponser Config section */}
            <div className="header-sub-section">
              <h3><span className="sub-heading">Sponser Config</span></h3>
            </div>
            <Row>

              <Col span={6} className="col-padding">

                <InputComponent
                  label="Sponser Type"
                  name=""
                  placeholder="Enter Sponser Type"
                  labelClass="input-label"
                  inputClass="input-box"
                />
              </Col>
              <Col span={6} className="col-padding">
                <InputComponent
                  label="Sponsership Amount"
                  name=""
                  placeholder="Enter Sponsership Amount"
                  labelClass="input-label"
                  inputClass="input-box"
                />
              </Col>


              <Col span={6} className="col-padding">
                <InputComponent
                  label="Currency"
                  name=""
                  placeholder="Enter Currency"
                  labelClass="input-label"
                  inputClass="input-box"
                />
              </Col>

              <Col span={6} className="col-padding">
                <InputComponent
                  label="Sponser"
                  name=""
                  placeholder="Enter Sponser"
                  labelClass="input-label"
                  inputClass="input-box"
                />
              </Col>
            </Row>

            {/* socail media detail */}
            <div className="header-sub-section">
              <h3><span className="sub-heading">Social Media</span></h3>
            </div>
            <Row style={{marginTop:"0.3rem"}}>
              <Col span={24} className="col-padding">
                <Card className="social-card" style={{ width: "100%", }}            >
                  <div style={{ display: "flex" }}>
                    <div style={{ display: "flex" }}>
                      {/* <a>
                  <TwitterOutlined  className="social-icon"/>
                  </a> */}

                      <div className="social-media-label">
                        <div style={{ fontWeight: "600", fontSize: "17px" }} >

                          <XOutlined className="social-icon twitter-bg-color" /> Twitter</div>
                        <div style={{ fontWeight: "600", fontSize: "17px" }}>  <FacebookOutlined className="social-icon facebook-bg-color" /> Facebook</div>
                        <div style={{ fontWeight: "600", fontSize: "17px" }}>  <LinkedinOutlined className="social-icon linkedin-bg-color" /> LinkedIn</div>
                        <div style={{ fontWeight: "600", fontSize: "17px" }}> <YoutubeOutlined className="social-icon youtube-bg-color" /> YouTube</div>
                        <div style={{ fontWeight: "600", fontSize: "17px" }}><InstagramOutlined className="social-icon insta-bg-color" /> Instagram</div>
                        {/* <div className="social-icon"  style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lEkz65jJryiC8JHq4znQVrAXFqISSAYilg&s)"}}
                class="uls-image huge-size bordered bg-cover upload-img-card"></div> */}
                      </div>
                    </div>
                    {/* <div >
                  <Button className="card-link-btn" type="link" block>
                    Manage Access
                  </Button>
                </div> */}
                  </div>
                </Card>
              </Col>



            </Row>

          </div>
        </div>

      </div>
    </>
  );
};

export default EventForm;
