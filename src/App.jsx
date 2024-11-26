import React from "react";

function App() {
  return (
    // console.log("Hello React"),
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      <Card
        title="Flutter"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolores?"
        source="https://img.icons8.com/?size=350&id=PmGdjRbnOudE&format=png"
      />
      <Card
        title="React"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolores?"
        source="https://img.icons8.com/?size=300&id=Vra58PN2KmI5&format=png"
      />
    </div>
  );
}

// const title= {props.title}
// const description= {props.description}

function Card({ title, description, source }) {
  //   const { title, description } = props;

  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        backgroundColor: "red",
        textAlign : "center",
      }}
    >
      <h1>{title}</h1>
      <img
        src={source}
        alt="React"
        style={{ width: "100px", height: "100px" }}
      />
      <p>{description}</p>
    </div>
  );
}

export default App;
