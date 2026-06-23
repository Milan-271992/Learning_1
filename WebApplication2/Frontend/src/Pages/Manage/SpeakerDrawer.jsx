import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, SearchOutlined } from 'antd';
const { Search } = Input;
const { Option } = Select;
const options = [
    {
        value: 'Twitter',
        label: 'Twitter',
    },
    {
        value: 'facebook',
        label: 'facebook',
    },
    {
        value: 'linkedin',
        label: 'linkedin',
    },
    {
        value: 'instagram',
        label: 'instagram',
    },
    {
        value: 'telegram',
        label: 'telegram',
    },
];
const SpeakerDrawerForm = ({ onClose, open }) => {

    return (
        <>

            <Drawer
                title="Add Speaker"
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
                                name="userName"
                                label="First Name"
                                className='input-label'
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please enter first name',
                            //     },
                            // ]}
                            >
                                <Input className='input-box' name='userName' id='userName' />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="lastName"
                                label="Last Name"
                                className='input-label'
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please enter last name',
                            //     },
                            // ]}
                            >
                                <Input className='input-box' name='lastName' id='lastName' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="emailId"
                                label="Email ID"
                                className='input-label'
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please enter email id',
                            //     },
                            // ]}
                            >
                                <Input className='input-box' name='emailId' id='emailId' />
                            </Form.Item>
                            {/* <Form.Item
                                name="approver"
                                label="Approver"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the approver',
                                    },
                                ]}
                            >
                                <Select placeholder="Please choose the approver">
                                    <Option value="jack">Jack Ma</Option>
                                    <Option value="tom">Tom Liu</Option>
                                </Select>
                            </Form.Item> */}
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="phoneNo"
                                label="Phone No."
                                className='input-label'
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please enter phone no.',
                            //     },
                            // ]}
                            >
                                <Input className='input-box' name='phoneNo' id='phoneNo' />
                            </Form.Item>
                        </Col>


                        {/* <Form.Item
                                name="dateTime"
                                label="DateTime"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the dateTime',
                                    },
                                ]}
                            >
                                <DatePicker.RangePicker
                                    style={{
                                        width: '100%',
                                    }}
                                    getPopupContainer={(trigger) => trigger.parentElement}
                                />
                            </Form.Item> */}

                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="orgName"
                                label="Organization Name"
                                className='input-label'
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please enter organization name',
                            //     },
                            // ]}
                            >
                                <Input className='input-box' name='orgName' id='orgName' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="guestType"
                                label="Guest Type"
                                className='input-label'
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please enter guest type',
                            //     },
                            // ]}
                            >
                                <Input className='input-box' name='guestType' id='guestType' />
                            </Form.Item>
                            {/* dropdown code start */}
                            {/* <Form.Item
                                name="owner"
                                label="Owner"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select an owner',
                                    },
                                ]}
                            >
                                <Select placeholder="Please select an owner">
                                    <Option value="xiao">Xiaoxiao Fu</Option>
                                    <Option value="mao">Maomao Zhou</Option>
                                </Select>
                            </Form.Item> */}
                            {/* end */}
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="country"
                                label="Country"
                                className='input-label'
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please choose the country',
                            //     },
                            // ]}
                            >
                                <Select >
                                    <Option value="jack">India</Option>
                                    <Option value="tom">US</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="state"
                                label="State"
                                className='input-label'
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please choose the state',
                            //     },
                            // ]}
                            >
                                <Select >
                                    <Option value="jack">Bihar</Option>
                                    <Option value="tom">Goa</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>

                        <Col span={12}>
                            <Form.Item
                                name="degination"
                                label="Designation/ Profession"
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
                                name="knownFor"
                                label="Known For"
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
                                label="Social Media Handle">


                                <Space.Compact style={{ width: '100%', }}>
                                    <Select defaultValue="Twitter" options={options} style={{ width: '15rem', }} />
                                    <Input defaultValue="https://www.xyz.com/xyz" />
                                    <Button className='input-box' type="primary">Add</Button>
                                </Space.Compact>
                            </Form.Item>



                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Description"
                                className='input-label'
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'please enter url description',
                            //     },
                            // ]}
                            >
                                <Input.TextArea rows={4} className='input-box' />
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </Drawer>
        </>
    );
};
export default SpeakerDrawerForm;