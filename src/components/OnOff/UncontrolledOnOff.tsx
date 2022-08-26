import {useState} from "react";

type PropsType = {
    onClick: (val:boolean)=>void
}

export const UncontrolledOnOff = (props:PropsType) => {
    console.log("UncontrolledOnOff rendering")
    let [on, setOn] = useState(false)

    console.log("on:" + on)

    const wrapper = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        margin: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const OffStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        margin: "2px",
        backgroundColor: !on ? "red" : "white"

    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        margin: "2px",
        backgroundColor: on? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onClick(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onClick(false)
    }
    return (
        <div>
            <div style={wrapper}>
                <div onClick={onClicked} style={onStyle}>On</div>
                <div onClick={offClicked} style={OffStyle}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
        </div>
    )
}