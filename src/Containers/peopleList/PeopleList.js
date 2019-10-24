import React, { Component } from "react";

import "./PeopleList.css";

import Person from "../../Components/Person/Person"

class PeopleList extends Component {
    state = {
        people: [],
        selectedPeopleId: null,
        error: false
    }

    componentDidMount () {

        // Data to fetch
        let url = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

        fetch(url)
        .then(res => res.json())
        .then((data) => {
            // console.log('Checkout this JSON! ', people);
            const people = data.Brastlewark;
            this.setState({ people });
        })
        .catch(err => { 
            this.setState({error: true});
            throw err;
         });

    }

    peopleSelectedHandler = (id) => {
        this.setState({selectedPeopleId: id});
    }

    render () {
        let people = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            console.log(this.state.people);
            people = this.state.people.map(person => {
                return <Person 
                    key={person.id} 
                    name={person.name} 
                    // author={person.author}
                    clicked={() => this.postSelectedHandler(person.id)} />;
            });
        }
        return (
            <div>
            <section className="People">
                {people}
            </section>
            {/* <section>
                <FullPost id={this.state.selectedPostId} />
            </section>
            <section>
                <NewPost />
            </section> */}
            </div>);
        }
}

export default PeopleList;