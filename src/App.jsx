/*import Profile from "./Profile";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Profile Cards 😎</h1>

      <div style={styles.wrapper}>
        <Profile
          name="Nilakshi"
          age={20}
          skills={["React", "JavaScript", "Node.js"]}
        />

        <Profile
          name="Rahul"
          age={22}
          skills={["Python", "AI", "ML"]}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    padding: "20px"
  },
  title: {
    color: "purple"
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

export default App; */

import Test from "./Test";

function App(){
  return(
    <div>
      <Test name="Nilakshi" age="20" isTop={true} />
       <Test name="Riya" age="21" isTop={false} />
    </div>
  )
}

