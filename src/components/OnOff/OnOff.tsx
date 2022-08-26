type PropsType = {
    on: boolean
    setStatus: (value: boolean) => void
}

export const OnOff = (props: PropsType) => {
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
        backgroundColor: props.on ? "green" : "white"
    }
    const OffStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        margin: "2px",
        backgroundColor: !props.on ? "red" : "white"

    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        margin: "2px",
        backgroundColor: props.on ? "green" : "red"
    }

    const onClicked = () => {
        props.setStatus(true)
    }

    const offClicked = () => {
        props.setStatus(false)
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