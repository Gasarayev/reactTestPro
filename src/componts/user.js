import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import UserConsumer from '../context'


class User extends Component {

    state = {
        isVisible: false
    }

    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser = (dispatch, e) => {
        const {id} = this.props;
        // Cosnumer Dispatch
        dispatch ({type : "DELETE_USER", payload:id});
    }

    render() {
        const { name, surname, age } = this.props;
        const { isVisible } = this.state

        return (<UserConsumer>

            {
                value => {
                    const {dispatch} = value;

                    return (
                        <div className='col-md-8 mb-4'>
                            <div className='card'>
                                <div className='card-header d-flex-justify-content-between align-item-center'>
                                    <h4 className='d-inline' onClick={this.onClickEvent}>{name} {"  "}</h4>
                                    <i onClick={this.onDeleteUser.bind(this, dispatch)} style={{ cursor: " pointer" }}><FontAwesomeIcon icon={faTrash} /></i>
                                </div>

                                {
                                    isVisible ? <div className='card-body'>
                                        <p className='card-text'>Surname: {surname}</p>
                                        <p className='card-text'>Age: {age}</p>
                                    </div> : null
                                }


                            </div>

                        </div>
                    )
                }
            }

        </UserConsumer>)

        // return (
        //     <div className='col-md-8 mb-4'>
        //         <div className='card'>
        //             <div className='card-header d-flex-justify-content-between align-item-center'>
        //                 <h4 className='d-inline' onClick={this.onClickEvent}>{name} {"  "}</h4>
        //                 <i style={{ cursor: " pointer" }}><FontAwesomeIcon icon={faTrash} /></i>
        //             </div>

        //             {
        //                 isVisible ? <div className='card-body'>
        //                     <p className='card-text'>Surname: {surname}</p>
        //                     <p className='card-text'>Age: {age}</p>
        //                 </div> : null
        //             }


        //         </div>

        //     </div>
        // )
    }
}

// User.propTypes = {
    // name: PropTypes.string.isRequired,
    // surname: PropTypes.string.isRequired,
    // age: PropTypes.string.isRequired,
    // id : PropTypes.number.isRequired
// }

export default User;