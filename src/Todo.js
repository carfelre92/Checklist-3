import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"

library.add(farStar, fasStar)

const StarIcon = ({ filled, onClick }) => {
    return (
        <div onClick={onClick} >
            <FontAwesomeIcon icon={filled ? farStar : fasStar} />
        </div>
    );
};

class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {

            isContentUpdating: false,
            isPriorityUpdating: false,
            contentInput: this.props.content,
            priorityInput: this.props.priority,
        }
    }

    handleRemoveClick = (e) => {
        var id = this.props.id
        this.props.removeTodo(id)
    }

    state = { filled: false };

    handleClick = () => {
        this.setState({ filled: !this.state.filled });
    };


    render() {
        return (
            <div className="col-sm-12 col-md-10 col-lg-3">
                <div className="todo-container">
                    <div className="todo-star">
                        <div className="star-five">
                            <i className="fas fa-star"></i>
                            <StarIcon filled={this.state.filled} onClick={this.handleClick} />
                        </div>
                    </div>
                    <div className="todo-texts">
                        <div className="text-container">
                            <h2>{this.props.title}</h2>
                            <h3>{this.props.type}</h3>
                        </div>
                    </div>
                    <div className="checkbox" onClick = {this.handleRemoveClick}>
                        <div id={this.props.id} className="box" onClick={this.deleteNote}></div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Todo