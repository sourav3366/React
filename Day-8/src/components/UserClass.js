import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log("child constructor")

        this.state ={
            userInfo:{
                name: "Dummy",
                Location: "Dummy Location"
            },
        };
        
    }

    async componentDidMount(){
        
        const data = await fetch("https://api.github.com/users/sourav3366");
        const json =await data.json();

        this.setState({
            userInfo : json,
        });
        console.log("child component did mount")
    }
    componentDidUpdate(){
        console.log("component did update")
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    render(){
        console.log("child render")
        const {name, location, avatar_url} =this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2> Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4> Contact : 8235546737</h4>
            </div>
        )
    }
}

export default UserClass;

/**
 * ---MOUNTING
 * 
 * 
 * Constructor(with dummy values)
 * Render( with dummy values)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 *      <this.setState --> state variable is updated
 * 
 * ---UPDATE PHASE----
 * 
 *      render( API data)
 *      <HTML> with new data
 *
 * componentDidUpdate 
 * compoent will unmount - it will be called when we will switch to different route
 */