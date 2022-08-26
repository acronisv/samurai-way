import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsedHandler: (value:boolean)=>void
}
function Accordion(props: AccordionPropsType) {
    console.log("According rendering")
    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={()=>props.setCollapsedHandler(!props.collapsed)}/>
        {!props.collapsed && <AccordionBody />}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("Accordion.tsx title rendering")
    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("Accordion.tsx body rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;