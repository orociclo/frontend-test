import React from 'react';
import './App.css';

import PeopleList from "./Containers/peopleList/PeopleList";

function App() {

  // let url = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

  // fetch(url)
  // .then(res => res.json())
  // .then((out) => {
  //   console.log('Checkout this JSON! ', out);
  // })
  // .catch(err => { throw err });

  return (
    <div className="App">
     <h1>Hi, I'm a React App!</h1>
     <PeopleList />
    </div>
  );
}

export default App;
