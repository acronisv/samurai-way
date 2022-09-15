import React, {ChangeEvent, useState} from 'react';

const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)

    const changeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setParentValue(!parentValue)
    }

    return (
        <div>
            <input type="checkbox"
                   checked={parentValue}
                   onChange={changeCheckboxHandler}
            />
        </div>
    );
};

export default ControlledCheckbox;