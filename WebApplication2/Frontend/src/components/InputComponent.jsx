import { Input } from 'antd';

const InputComponent = ({label, name, placeholder, labelClass ,inputClass}) =>
{
    return (
        <div>
            <p className={labelClass}>{label}</p>
            <Input className={inputClass} label={label} name={name} placeholder={placeholder} />
        </div>



    )
}

export default InputComponent;