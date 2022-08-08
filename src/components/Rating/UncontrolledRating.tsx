import React, {useState} from "react";

export function UncontrolledRating() {

    const [value, setValue] = useState(0)

    const setValueCallback = (val:number) => {
        console.log(val)
        setValue(val)
    }

    return (
        <div>
            <Star selected={value > 0} setValueCallback={()=>setValueCallback(1)}/>
            <Star selected={value > 1} setValueCallback={()=>setValueCallback(2)}/>
            <Star selected={value > 2} setValueCallback={()=>setValueCallback(3)}/>
            <Star selected={value > 3} setValueCallback={()=>setValueCallback(4)}/>
            <Star selected={value > 4} setValueCallback={()=>setValueCallback(5)}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean,
    setValueCallback: ()=>void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={()=> {props.setValueCallback()}}>
            {props.selected ? <b>star </b>: <>star </>}
        </span>
    )
}

