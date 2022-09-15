import React, {ChangeEvent, useState} from 'react';

const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const changeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value)
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={changeSelectHandler}>
            <option>none</option>
            <option value={'1'}>Spb</option>
            <option value={'2'}>Msk</option>
        </select>
    );
};

export default ControlledSelect;