import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating";

function App(props: any) {
    console.log("App rendering")
    return (
        <div className="App">
            <PageTitle title={"This is app component"}/>
            <PageTitle title={"Title"}/>
            Article 1
            <Rating value={3} />
            <Accordion titleValue={"First accordion"} collapsed={true}/>
            <Accordion titleValue={"Second accordion"} collapsed={false}/>
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

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}

function hello() {
    //debugger
    alert('Hi there')
}

//hello()

export default App;
