import React, { Component } from "react";
import { connect } from "react-redux";
import { addtodo } from "../redux/actions"

class AddTodos extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.addTodos = this.addTodos.bind(this);
    }

    addTodos() {

        const { value } = this.state;

        if (value.length > 0) {
            this.props.addtodo(this.state.value);
        }
        this.setState({ value: '' });
    }

    handleInput = (value) => {
        this.setState({
            value
        });
    }

    render() {

        const { value } = this.state;

        return (
            <>
                <input type="text" value={value} onChange={e => { this.handleInput(e.target.value) }} />
                &nbsp;
                <button onClick={this.addTodos} >Add Todo</button>
            </>
        )
    }
}


export default connect(
    null,
    {
        addtodo
    }
)(AddTodos);