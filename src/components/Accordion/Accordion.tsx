import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsedHandler: (value:boolean)=>void
    items: ItemType[]
    onClick: (value: any)=>void
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any)=>void
}

function Accordion(props: AccordionPropsType) {
    console.log("According rendering")
    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={()=>props.setCollapsedHandler(!props.collapsed)}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
    )
}

function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((el,i)=><li onClick={()=>{props.onClick(el.value)}} key={i}>{el.title}</li>)}
        </ul>
    )
}

export default Accordion;