import React, {ChangeEvent, useState} from 'react';

const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setParentValue(e.currentTarget.value)
    }

    return (
        <div>
            <input type="text"
                   value={parentValue}
                   onChange={changeInputHandler}
            />
            Current value: {parentValue}
        </div>
    );
};

export default ControlledInput;