import React, { Component } from 'react'
import posed from 'react-pose'
import uniqid from 'uniqid';
import { Consumer } from 'react';
import UserConsumer from '../context';

const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    }
});

class AddUser extends Component {
    state = {
        visible: false,
        name: "",
        surname: "",
        age: ""
    }
    changeVisiblity = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addUsers = (dispatch, e) => {
        e.preventDefault();
        const { name, surname, age } = this.state;

        const newUser = {
            id: uniqid(),
            name,
            surname,
            age
        }
        dispatch({ type: "ADD_USER", payload: newUser })
    }
    render() {
        const { visible, name, surname, age } = this.state;
        return <UserConsumer>{
            value => {
                const {dispatch} = value

                return (
                    <div className='col-md-8 mb-4 d-flex flex-column'>
                        <button onClick={this.changeVisiblity} className='btn btn-dark mb-2'>{visible ? "Hide Form" : "Show Form"}</button>
                        <Animation pose={visible ? "visible" : "hidden"}>
                            <div className='card'>
                                <div className='card-header'>
                                    <h4>AddUser Form</h4>
                                </div>
                                <div className='card-body'>

                                    <form onSubmit={this.addUsers.bind(this, dispatch)} className='d-flex flex-column'>
                                        <div className='form-group'>
                                            <label htmlFor='name'>Name</label>
                                            <input type={"text"} name={"name"} id={"id"} placeholder={"Enter Name"} className={"form-control"} value={name} onChange={this.changeInput}>
                                            </input>
                                        </div>

                                        <div className='form-group'>
                                            <label htmlFor='surname'>Surname</label>
                                            <input type={"text"} name={"surname"} id={"surname"} placeholder={"Enter Surname"} className={"form-control"} value={surname} onChange={this.changeInput}>
                                            </input>
                                        </div>

                                        <div className='form-group'>
                                            <label htmlFor='age'>Age</label>
                                            <input type={"text"} name={"age"} id={"age"} placeholder={"Enter Age"} className={"form-control"} value={age} onChange={this.changeInput}>
                                            </input>
                                        </div>

                                        <button className='btn btn-danger mt-2 ' type='submit'>Add</button>
                                    </form>
                                </div>
                            </div>
                        </Animation>

                    </div>
                )
            }

        }
        </UserConsumer>
    }
}

export default AddUser;
