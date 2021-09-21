import React from "react";

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>hello~</h1>
      <Food 
        fav="kimchi"
        name="SMJ"
        something="[1,2,3,4]"
      />
      <Food fav="potato"/>
      <Food fav="apple"/>
      <Food fav="foodies"/>      
    </div>
  );
}

export default App;
