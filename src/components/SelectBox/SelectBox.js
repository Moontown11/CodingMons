import React from 'react';

const OPTIONS = [
    { value: "option1", name : "행정동_A"  },
    { value: "option2", name : "행정동_B"  },
    { value: "option3", name : "행정동_C"  },
  ];
  
  const SelectBox = (props) =>{
    return (
          <select>
              {props.options.map((option) => (
                  <option
                      value={option.value}
                      defaultValue={props.defaultValue === option.value}
                  >
                      {option.name}
                  </option>
              ))}
          </select>
      );
  };

  export default SelectBox;