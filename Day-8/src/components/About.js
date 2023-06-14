import User from "./User";
import UserClass from "./UserClass";

const About =()=>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is the About Page</h2>
            {/* <User name={"Sourav kumar (functional)"} location ={"Delhi functional"}/> */}

            <UserClass name={"Sourav kumar (class)"} location ={"Delhi class"}/>
        </div>
    );
};

export default About;