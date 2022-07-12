import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {
    console.log("According rendering")
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    } else
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody />
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("Accordion.tsx title rendering")
    return (
        <h3>{props.title}</h3>
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