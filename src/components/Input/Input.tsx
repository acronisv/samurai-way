import React, {ChangeEvent, useRef, useState} from 'react';

const Input = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const changeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const saveButtonHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
        console.log(el.value)
    }
    return (
        <div>
            <input type="text"
                   value={value}
                   onChange={changeInputHandler}
                   ref={inputRef}
            />
            <button onClick={saveButtonHandler}>Save</button>
            Current value: {value}
        </div>
    );
};

export default Input;