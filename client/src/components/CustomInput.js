import React from 'react';

const CustomInput = (props) => {
    const {type,name,placeholder,classname,value,onChange,onBlur} = props;
  return (
    <div>
        <input
            className={`form-control ${classname}`} 
            type={type} 
            name={name} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
    </div>
    );
};

export default CustomInput;