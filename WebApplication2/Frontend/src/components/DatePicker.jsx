import React from 'react';
import { DatePicker, Space, theme } from 'antd';
const DatePickerBox = ({label, name, placeholder, labelClass ,inputClass}) => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div>
            <p className={labelClass}>{label}</p>
            <DatePicker  onChange={onChange} style={{width:"100%"}} />

        </div>
    );
};





export default DatePickerBox;