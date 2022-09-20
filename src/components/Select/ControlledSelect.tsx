import React, {useState} from 'react';
import s from './Select.module.css'

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

type ItemType = {
    title: string
    value: any
}

const ControlledSelect = (props: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectClickHandler = () => {
        setCollapsed(!collapsed)
    }

    const itemClickHandler = (el: any) => {
        props.onChange(el.value)
        selectClickHandler()
    }

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

    return (
        <div className={s.select}>
            <div className={s.selectValue}
                 onClick={selectClickHandler}>
                {selectedItem && selectedItem.title}</div>
            <div className={s.items}>
                {!collapsed && props.items.map(el => <div
                    className={s.item + ' ' + (hoveredItem === el ? s.selected : '')}
                    onMouseEnter={() => setHoveredElementValue(el.value)}
                    onClick={() => itemClickHandler(el)}
                    key={el.value}>{el.title}</div>)
                }
            </div>

        </div>
    );
};

export default ControlledSelect;

/*
const ControlledSelect = (props: SelectPropsType) => {
    let selectedItem = props.items.find(el => el.value === props.value)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [selectCurrentValue, setSelectCurrentValue] = useState(selectedItem && selectedItem.title)

    const selectClickHandler = () => {
        setCollapsed(!collapsed)
    }

    const itemClickHandler = (el:any) => {
        setSelectCurrentValue(el.title)
        selectClickHandler()
    }



    return (
        <div>
            <div onClick={selectClickHandler}>{selectCurrentValue}</div>
            {!collapsed
                ? props.items.map(el => <div onClick={()=>itemClickHandler(el)} key={el.value}>{el.title}</div>)
                : <></>}
        </div>
    );
};
 */