import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordeonCollapsed, setAccordeonCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)

    return (
        <div className="App">
            {/*<PageTitle title={"This is app component"}/>*/}
            {/*<PageTitle title={"Title"}/>*/}
            {/*Article 1*/}
            {/*<Accordion titleValue={"First accordion"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Second accordion"} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0} />*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
            <UncontrolledOnOff onClick={setOn}/> {on.toString()}
            <OnOff on={on} setStatus={setOn}/>
            <Accordion titleValue={"Accordion"}
                       collapsed={accordeonCollapsed}
                       setCollapsedHandler={setAccordeonCollapsed}/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
        </div>
    );
}


export default App;
