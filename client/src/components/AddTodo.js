import React, { Component, Fragment } from "react";

class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            description: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({ description: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // tells the server to parse data in JSON format
                body: JSON.stringify({ description: this.state.description })
            })
            window.location = "/"; // refreshes the page so component can re-render and list new to-do
        }
        catch (err) {
            console.error(err);
        }
    }


    render() {
        return (
            <Fragment>
                <form className="m-5 text-center d-flex" onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" placeholder="Enter a new task here to display it in the to-do list below" value={this.state.description} onChange={this.handleInputChange} />
                    <button type="submit" className="btn btn-success">Add To-do</button>
                </form>
            </Fragment>
        )
    }
}

export default AddTodo;