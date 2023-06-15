import User from "./User";
import UserClass from "./UserClass";
import React  from "react";

class About extends React.Component {
  constructor(props){
        super(props);

        console.log("Parent constructor")
    }

  componentDidMount(){
    console.log("Parent  componentDidMount called")
    }
  render() {
    console.log("Parent render")
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is the About Page</h2>
        <UserClass name={"Sourav kumar (class)"} location={"Delhi class"} />
      </div>
    );
    }
}

export default About;
