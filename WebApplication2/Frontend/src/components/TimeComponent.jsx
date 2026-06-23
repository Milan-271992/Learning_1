import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const TimePickerComponent = ({label, name, placeholder, labelClass ,inputClass})=> (
    <div>
          <p className={labelClass}>{label}</p>
          <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} style={{width:"100%"}} />
    </div>
  
);
export default TimePickerComponent;