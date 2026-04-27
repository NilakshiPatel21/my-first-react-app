function Profile({ name, age, skills }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>👤 {name}</h2>
      <p>Age: {age}</p>

      <p>Skills:</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    margin: "15px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },
  name: {
    color: "purple"
  }
};

export default Profile;