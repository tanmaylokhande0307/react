import { useState } from 'react';
import './App.css';
import CardList from "./CardList";
import Form from "./Form";

const testData = [
  {name:"Tanmay",avatar_url:"https://avatars.githubusercontent.com/u/281930?v=4",company:"tanri"}
  ,{name:"Mandar",avatar_url:"https://avatars.githubusercontent.com/u/295848?v=4",company:"meta"}
]

function App(props) {


  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Form />
    </div>
  );
}

export default App;


// const testData = [
//   {name:"mandar",avatar_url:"https://avatars.githubusercontent.com/u/295848?v=4",company:"ms"},
//   {name:"rohit",avatar_url:"https://avatars.githubusercontent.com/u/7758578?v=4",company:"meta"}
// ];
