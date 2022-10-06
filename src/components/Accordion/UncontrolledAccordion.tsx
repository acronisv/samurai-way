import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./Reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("According rendering")

    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const setCollapsedCallback = () => {
        dispatch({type: TOGGLE_CONSTANT})
    }

    return <div>
        <UncontrolledAccordionTitle title={props.titleValue} setCollapsedCallback={setCollapsedCallback}/>
        {!state.collapsed && <UncontrolledAccordionBody/>}

    </div>
}

type UncontrolledAccordionTitlePropsType = {
    title: string,
    setCollapsedCallback: () => void
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.setCollapsedCallback()
        }}>{props.title}</h3>
    )
}

function UncontrolledAccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;