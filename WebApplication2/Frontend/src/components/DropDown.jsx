import React from 'react';
import { Select } from 'antd';


const DropDownSelect = ({ label, name, placeholder, labelClass, options }) => {
    return (
        <div>
            <p className={labelClass}>{label}</p>
            <Select 
          
                showSearch
                style={{
                    width: "100%",
                }}
                // placeholder="Search to Select"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={options}
            />
        </div>



    )
}

export default DropDownSelect;