import { Input } from 'antd';

const InputComponent = ({label, name, placeholder}) =>
{
    return (
        <div>
            <p>{label}</p>
            <Input label={label} name={name} placeholder={placeholder} />
        </div>



    )
}

export default InputComponent;