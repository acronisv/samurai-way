import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("According rendering")

    const [collapsed, setCollapsed] = useState(false)


    return <div>
        <UncontrolledAccordionTitle title={props.titleValue}/>
        <button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>
        {!collapsed && <UncontrolledAccordionBody />}

    </div>
}

type UncontrolledAccordionTitlePropsType = {
    title: string
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    console.log("UncontrolledAccordion.tsx title rendering")
    return (
        <h3>{props.title}</h3>
    )
}

function UncontrolledAccordionBody() {
    console.log("UncontrolledAccordion.tsx body rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;