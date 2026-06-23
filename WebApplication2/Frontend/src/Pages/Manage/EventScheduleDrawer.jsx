import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, SearchOutlined } from 'antd';
import DatePickerBox from "../../components/DatePicker";
import TimePickerComponent from "../../components/TimeComponent";

const option = [];
for (let i = 10; i < 36; i++) {
    option.push({
        label: i.toString(36) + i,
        value: i.toString(36) + i,
    });
}
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const { Search } = Input;
const { Option } = Select;
const options = [
    {
        value: 'Motivational ',
        label: 'Motivational',
    },
    {
        value: 'BusinessLeaders',
        label: 'Business Leaders',
    },
    {
        value: 'IndustryExperts ',
        label: 'Industry Experts ',
    },
    {
        value: 'Health',
        label: 'Health and Fitness Experts',
    },

];
const ScheduleDrawerForm = ({ onClose, open }) => {

    return (
        <>

            <Drawer
                title="Add Schedule"
                className='drawer-header'
                width={550}
                onClose={onClose}
                open={open}
                styles={{ body: { paddingBottom: 80, }, }}
                extra={
                    <Space>
                        <Button className='input-box' onClick={onClose}>Cancel</Button>
                        <Button className='input-box' onClick={onClose} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical" >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="sessiontype"
                                label="Session Type"
                                className='input-label'
                            >
                                <Input className='input-box' name='sessiontype' id='sessiontype' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="sessionName"
                                label="Session Name"
                                className='input-label'
                            >
                                <Input className='input-box' name='sessionName' id='sessionName' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>

                        <Col span={24}>
                            <Form.Item
                                name="aboutSession"
                                label="About Session"
                                className='input-label'
                            >
                                <Input className='input-box' name='aboutSession' id='aboutSession' />
                            </Form.Item>
                        </Col>

                     
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="speaker"
                                label="Speaker"
                                className='input-label'
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please enter organization name',
                            //     },
                            // ]}
                            >
                                {/* <Input className='input-box' name='speaker' id='speaker' /> */}
                                <Select
                                    mode="multiple"
                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    //   placeholder="Please select"
                                    //   defaultValue={['a10', 'c12']}
                                    onChange={handleChange}
                                    options={options}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="chiefGuest"
                                label="Chief Guest"
                                className='input-label'
                            >
                                {/* <Input className='input-box' name='chiefGuest' id='chiefGuest' /> */}
                                <Select
                                    mode="multiple"
                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    //   placeholder="Please select"
                                    //   defaultValue={['a10', 'c12']}
                                    onChange={handleChange}
                                    options={option}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12} className="col-padding">

                            <DatePickerBox
                                label="Date"
                                name="date"
                                //   placeholder="Enter To Date"
                                labelClass="input-label"
                            />
                        </Col>
                        <Col span={12} className="col-padding">
                            <TimePickerComponent
                                className="date-box"
                                label="Start - End Time"
                                name=""
                                // placeholder="Enter To Time"
                                labelClass="input-label"
                            />
                        </Col>
                    </Row>
                    <Row gutter={16}>

                        <Col span={12}>
                            <Form.Item
                                name="areaRoom"
                                label="Area/ Room"
                                className='input-label'
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please enter designation/profession',
                            //     },
                            // ]}
                            >
                                <Input className='input-box' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="contactInfo"
                                label="Contact Info"
                                className='input-label'
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please enter designation/profession',
                            //     },
                            // ]}
                            >
                                <Input className='input-box' />
                            </Form.Item>
                        </Col>
                        {/* <Col span={12}>
                        
                            <Form.Item
                                name="type"
                                label="Type"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the type',
                                    },
                                ]}
                            >
                                <Select placeholder="Please choose the type">
                                    <Option value="private">Private</Option>
                                    <Option value="public">Public</Option>
                                </Select>
                            </Form.Item>
                        </Col> */}
                    </Row>

                                       
                    <Row gutter={16}>
                    <Col span={24}>

<Form.Item
    className='input-label'
    name="socialHanle"
    label="Social Media Feeds">
    <Space.Compact style={{ width: '100%', }}>
        <Select defaultValue="Twitter" options={options} style={{ width: '15rem', }} />
        <Input defaultValue="https://www.xyz.com/xyz" />
        <Button className='input-box' type="primary">Add</Button>
    </Space.Compact>
</Form.Item>



</Col>

                    </Row>

                </Form>
                
            </Drawer>
        </>
    );
};
export default ScheduleDrawerForm;