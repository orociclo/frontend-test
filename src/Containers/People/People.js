import React, { Component } from "react";

import "./People.css";

import Person from "../../Components/Person/Person";
import FullPerson from "../../Components/FullPerson/FullPerson";


class People extends Component {
  state = {
    people: [ { id: 0, name: "Feaching people. Please Wait..." } ],
    selectedPersonData: null,
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
    const [fullPersonData] = this.state.people.filter(person => person.id === id);
    this.setState({selectedPersonData: fullPersonData});
  }

  render () {
    const { state } = this;
    let people = <p style={{textAlign: 'center'}}>Feching People went wrong!</p>;
    if (!this.state.error && typeof(state.people) !== "string" ) {
      people = state.people.map(person => {
        return <Person 
          key={person.id} 
          name={person.name} 
          clicked={() => this.personSelectedHandler(person.id)} />;
      });
    }
    return (
      <div className="divContainer">
      <section className="FullPerson">
          { this.state.selectedPersonData
          ? <FullPerson 
              info={this.state.selectedPersonData}
            />
          : null
          }
      </section>
      <section className="sectionPeople">     
          { this.state.people.length < 2
          ? <label className="Fetching">
              Feaching people. Please Wait...
            </label>
          : <div className="People">
              {people}
            </div>
           
          } 
      </section>
      </div>);
    }
}

export default People;