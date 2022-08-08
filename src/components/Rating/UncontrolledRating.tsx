import React, {useState} from "react";

export function UncontrolledRating() {

    const [value, setValue] = useState(0)

    const setRating = (val:number) => {
        setValue(val)
    }

    return (
        <div>
            <Star selected={value > 0}/> <button onClick={()=>setRating(1)}>1</button>
            <Star selected={value > 1}/> <button onClick={()=>setRating(2)}>2</button>
            <Star selected={value > 2}/> <button onClick={()=>setRating(3)}>3</button>
            <Star selected={value > 3}/> <button onClick={()=>setRating(4)}>4</button>
            <Star selected={value > 4}/> <button onClick={()=>setRating(5)}>5</button>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else
        return <span>star </span>
}