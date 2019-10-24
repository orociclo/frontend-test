import React, { Component } from "react";

import "./People.css";

import Person from "../../Components/Person/Person"

class PeopleList extends Component {
  state = {
    people: [ { id: 0, name: "Feaching people. Please Wait..." } ],
    selectedPersonId: null,
    error: false
  }

  componentDidMount () {

    // Data to fetch
    let url = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

    fetch(url)
    .then(res => res.json())
    .then((data) => {
      const people = data.Brastlewark;
      this.setState({ people });
    })
    .catch(err => { 
      this.setState({error: true});
      throw err;
    });

  }

  personSelectedHandler = (id) => {
      // this.setState({selectedPersonId: id});
      console.log(id);
  }

  render () {
    const { state,  } = this;
    let people = <p style={{textAlign: 'center'}}>Feching People went wrong!</p>;
    if (!this.state.error && typeof(state.people) !== "string" ) {
      console.log(state.people);
      people = state.people.map(person => {
        return <Person 
          key={person.id} 
          name={person.name} 
          // author={person.author}
          clicked={() => this.personSelectedHandler(person.id)} />;
      });
    }
    return (
      <div>
      <section>
        FullPerson
        {/* <FullPerson id={this.state.selectedPostId} /> */}
      </section>
      <section className="People">
        {people}
      </section>
      </div>);
    }
}

export default PeopleList;