function Profile( props) {
    return(
        <div style={{backgroundColor : "Violet", padding:"20px"}} >
            <h2> It's from Profile.jsx with props 😉</h2>
            <p> Name : {props.name}</p>
            <p> Age : {props.age}</p>
            <p> Skills : {props.skills}</p>
        </div>
    );
}

function Welcome({name, age}){
    return(
        <div >
            <h2> It's from Welcome.jsx with direct keys 😉</h2>
            <p style={{color:"white"}}> Hey, {name} . You turned {age} now.</p>
        </div>
    )
}

export {Welcome , Profile};

/*in App.jsx 
import {Profile, Welcome} from "./Profile";

function App(){
  return (
    <div style={{backgroundColor : "purple"}} >
      <h2 style={{color : "white"}}> My first React Component 😘</h2>
      <Profile name= "Nilakshi" age={20} skills={["React", "JavaScript"]}/>
      <Welcome name="Nilakshi" age={20} />
    </div>
  );
}
export default App; */