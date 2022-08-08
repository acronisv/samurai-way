import {useState} from "react";

type PropsType = {
    on: boolean
}

export const OnOff = () => {
    console.log("OnOff rendering")
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

    return (
        <div>
            <div style={wrapper}>
                <div onClick={()=>{setOn(true)}} style={onStyle}>On</div>
                <div onClick={()=>{setOn(false)}} style={OffStyle}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
        </div>
    )
}