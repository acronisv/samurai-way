import React from "react";

function Accordion(props: any) {
    console.log("According rendering")
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody />
    </div>
}

function AccordionTitle(props: any) {
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