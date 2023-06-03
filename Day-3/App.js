import React from "react";
import ReactDOM  from "react-dom/client";

  
// React.createElement => React Element-js (Object)  =>  render method convert it to HTMLElement

const elem = <span>Hello from normal jsx element</span>

//React Element
  const heading =( <h1>
    {elem}
    Hello from react element
  </h1>
  )
  

  //JSX - It is not HTML inside js. It is HTML or XML like syntax
  //JSX -It is transpiled before it reaches the JS and this is done by PARCEL- babel
  //As it is jsx and it is not understood by js engine or browser.
  //JSX  => babel transpiles  to React.createElement => React Element-js (Object)  =>  render method convert it to HTMLElement

  const Title =()=>(
    <h1 className="head">
      Hello Sourav from Title Component
    </h1>
  )

  //React Functional Component
  //React Fragment- Just an empty tag
  const HeadingComponent = () => (
    <>
    <div id="container">
      {Title()}
      <Title />
      <Title></Title>
      {heading}
      <h1 id="heading">React heading using Functional Component</h1>
    </div>
    <div id="container2"></div>
    </>

  )
  

  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<HeadingComponent />);