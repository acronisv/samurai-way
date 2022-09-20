import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import Input from "./components/Input/Input";
import ControlledInput from "./components/Input/ControlledInput";
import ControlledCheckbox from "./components/Checkbox/ControlledCheckbox";
import ControlledSelect from "./components/Select/ControlledSelect";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)
    const [selectCurrentValue, setSelectCurrentValue] = useState(2)
    const onClickCallback = (value:any)=> {
        console.log(`Item ${value} clicked`)
    }

    return (
        <div className="App">
            <UncontrolledOnOff onClick={setOn}/> {on.toString()}
            <OnOff on={on} setStatus={setOn}/>
            <Accordion titleValue={"Accordion"}
                       collapsed={accordionCollapsed}
                       setCollapsedHandler={setAccordionCollapsed}
                       items={[{title: 'Item1', value: 1}, {title: 'Item2', value: 2}, {title: 'Item3', value: 3}]}
                       onClick={onClickCallback}
            />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <Input/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect
                value={selectCurrentValue}
                onChange={setSelectCurrentValue}
                items={[{title: 'Item1', value: 1}, {title: 'Item2', value: 2}, {title: 'Item3', value: 3}]}/>
        </div>
    );
}


export default App;
