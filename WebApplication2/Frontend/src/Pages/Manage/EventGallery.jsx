import React from "react";
import InputComponent from "../../components/InputComponent";
import { Row, Col, DatePicker, Space, Select, Form, Card, Button, Avatar ,Input,Dropdown,} from "antd";
import FormItem from "antd/es/form/FormItem";
import { GlobalOutlined,CaretDownOutlined , XOutlined, LinkedinOutlined, FacebookOutlined, YoutubeOutlined, InstagramOutlined, SettingOutlined, EditOutlined, EllipsisOutlined, } from "@ant-design/icons";

import DropDownSelect from "../../components/DropDown";
import DatePickerBox from "../../components/DatePicker";
import UploadComponents from "../../components/uploadComponent";
import TimePickerComponent from "../../components/TimeComponent";
import GalleryUploadPage from "../../components/GalleryUpload";

// dropdown

const items = [
    {
      label: (
        <span href="#" target="_blank" rel="noopener noreferrer">
         Date Created
        </span>
      ),
      key: '0',
    },
    {
      label: (
        <span href="#" target="_blank" rel="noopener noreferrer">
         Name
        </span>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
   
  ];

  const items1 = [
    {
      label: (
        <span  target="_blank" rel="noopener noreferrer">
         Ascending
        </span>
      ),
      key: '0',
    },
    {
      label: (
        <a  target="_blank" rel="noopener noreferrer">
       Descending
        </a>
      ),
      key: '1',
    },
    {
      type: '',
    },
   
  ];

  const items2 = [
    {
      label: (
        <a  target="_blank" rel="noopener noreferrer">
         JPG
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a  target="_blank" rel="noopener noreferrer">
        All Image Types

        </a>
      ),
      key: '1',
    },
    {
      type: '',
    },
   
  ];
  
// 
// serch bar
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
// 
const { Meta } = Card;
const { RangePicker } = DatePicker;

const EventGalleryPage = () => {
    return (
        <>
            <div className="p-2 EventAdd">
                <div className="p-2 row">
                    <div className="header-section px-2 py-2">
                        <h6><span className="ms-1">Event Gallery</span></h6>
                    </div>

                </div>
                <div className="content">
                    <div className="content-body">
                        <Row>
                            {/* <GalleryUploadPage/> */}
                            {/* <Col span={6} className="col-padding">
                                <Card
                                    title="Caption" description=""
                                    hoverable style={{ width: 240 }}
                                    cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjrGrjCIUfZiCyARidrHsPdcNqF4o8DlxR0Q&s" />}
                                >
                                    <Meta title=" Uploaded by Kunal Jain" description="on 12 Dec 2024" />
                                </Card>


                            </Col>
                            <Col span={6}>
                                <Card
                                    title="Caption" description=""
                                    hoverable style={{ width: 240 }}
                                    cover={<img alt="example" src="https://cdn.pixabay.com/photo/2016/11/22/21/26/notebook-1850613_640.jpg" />}
                                >
                                    <Meta title=" Uploaded by Kunal Jain" description="on 12 Dec 2024" />
                                </Card>
                            </Col>

                            <Col span={6}>
                                <Card
                                    title="Caption" description=""
                                    hoverable style={{ width: 240 }}
                                    cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGPBoxnTAMZSHnr8rVc6C1XdQ57boULlbrg&s" />}
                                >
                                    <Meta title=" Uploaded by Kunal Jain" description="on 12 Dec 2024" />
                                </Card>
                                </Col> */}
        <Search placeholder="Search " onSearch={onSearch} style={{ width: 300,margin:"0.5rem" }} />

        <Dropdown
        className="date-create"
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <span onClick={(e) => e.preventDefault()}>
      <Space>
      Date Created
        <CaretDownOutlined className="icon-bold" />
      </Space>
    </span>
  </Dropdown>
  

  {/* <Dropdown
        className="date-create"
    menu={{
      items1,
    }}
    trigger={['click']}
  >
    <span onClick={(e) => e.preventDefault()}>
      <Space>
      Descending
        <CaretDownOutlined className="icon-bold" />
      </Space>
    </span>
  </Dropdown> */}

  {/* <Dropdown
        className="date-create"
    menu={{
      items2,
    }}
    trigger={['click']}
  >
    <span onClick={(e) => e.preventDefault()}>
      <Space>
      All Image Types
        <CaretDownOutlined className="icon-bold" />
      </Space>
    </span>
  </Dropdown> */}

                                
                            <Col span={24} className="col-padding">
                                <InputComponent

                                    label="Caption"
                                    name=""
                                    //   placeholder="Enter Event Slogan"
                                    labelClass="uploading-label"
                                    inputClass="input-box"
                                />
                            </Col>
                        </Row>

                        <Row style={{ marginTop: "0.3rem" }}>
                            <Col span={24} className="col-padding">
                                <GalleryUploadPage />
                            </Col>
                        </Row>
                        <Row style={{marginTop:"0.3rem"}}>
                          <Col span={24} className="col-padding">
                            <Card className="card-box"style={{ width: "100%"}}>
                              <div class="event-block">
                                <div class="event-block-div-left">
                                  <div>
                                    <div class="public-font">
                                    Uploaded by Kunal Jain</div>
                                    <div class="text-small">on 12 Dec 2024</div>
                                  </div>
                                </div>
                            
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

export default EventGalleryPage;
