import React, { Component } from 'react'

const UserContext = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.playload !== user.id)
            }

        case "ADD_USER":
            return{
                ...state,
                users: [...state.users, action.playload]
            }    
        default:
            return state
    }
}
export class UserProvider extends Component {
    state = {

        users: [
            {
                id: 1,
                name: "Emil",
                surname: "Gasarayev",
                age: 25
            },
            {
                id: 2,
                name: "zz",
                surname: '"qwertyuiasdfghj"',
                age: 55
            },
            {
                id: 3,
                name: "bnmhjkl",
                surname: "tyuiop,mnbvcxzkjhgf",
                age: 10
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
