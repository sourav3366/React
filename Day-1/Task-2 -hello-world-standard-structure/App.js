{
    /* <div id='parent'>
            <div id='child'>
                <h1> I'm h1 tag</h1>
                <h2> I'm h2 tag</h2>
            </div>
      </div> */
  }
  
  const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [ 
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
      ]
    )
  );
  
  // It will return the javascript object
  console.log(parent)
  
  // const heading = React.createElement(
  //   "h1",
  //   { id: "heading" },
  //   "hello world from react"
  // );
  
  console.log(parent)
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // This will convert js object to h1 tag and put it inside the root element that we created earlier.
  // ReactElement(object) => HTML (Browser Understands)
  root.render(parent); 