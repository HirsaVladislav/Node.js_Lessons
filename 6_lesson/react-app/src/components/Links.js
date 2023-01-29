import React, { Component } from "react";
import "./Link.css";
import axios from "axios";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
      lastName: "",
      age: 0,
    };
    this.url = `http://localhost:4321/api/users` 

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  createUser(event) {
    const { name, lastName, age } = this.state;
    axios
      .post(this.url, { name, lastName, age })
      .then((res) => {
        const data = res.data;
        console.log(data);
        const { name, lastName, age } = data;
        this.setState({ data: [{name, lastName, age}] });
      })
      .catch(console.error);
    event.preventDefault();
  }

  getAllUsers() {
    axios.get(this.url).then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  };

  response = null;

  render() {
    return (
      <>
        <ul>
          <li className="link" onClick={() => this.getAllUsers()}>
            Get all
          </li>

          {/* Create User  */}
          <li>
            <div className="link"> Create User </div>
            <form onSubmit={this.createUser}>
              {" "}
              <label>
                Name:
                <input
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />{" "}
              </label>

              <label>
                Last Name:
                <input
                  name="lastName"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                />{" "}
              </label>
              
              <label>
                Age:
                <input
                  name="age"
                  type="number"
                  min="0"
                  max="120"
                  value={this.state.age}
                  onChange={this.handleInputChange}
                />{" "}
              </label>
              <input type="submit" value="Submit" />
            </form>
          </li>
        </ul>

        {/* Received Data  */}
        <h2 className="mt-5 ml-2"> Received Data </h2>
        <ul>
          {this.state.data.map((obj) => (
            <li key={obj._id}>
              <p> Name: {obj.name} </p>
              <p> LastName: {obj.lastName} </p>
              <p> age: {obj.age} </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Links;
