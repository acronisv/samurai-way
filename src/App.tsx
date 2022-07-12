import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating";

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <PageTitle title={"This is app component"}/>
            <PageTitle title={"Title"}/>
            Article 1
            <Rating value={3} />
            <Accordion title={"First accordion"}/>
            <Accordion title={"Second accordion"}/>
            Article 2
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    );
}

function PageTitle(props: any) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}

function hello() {
    //debugger
    alert('Hi there')
}

//hello()

export default App;
