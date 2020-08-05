import React, { Component } from 'react'

class NewTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            titleInput: '',
            typeInput: ''
        }
    }

    //method handles inputs from Title input
    handleTitleInput = (e) => {
        this.setState({ 
            titleInput: e.target.value
        })
    }
    //method handles inputs from Type input
    handleTypeInput = (e) => {
        this.setState({
            typeInput: e.target.value
        })
    }

    handleAddButtonClick = (e)=>{
        e.preventDefault()
        var data = {
            title: this.state.titleInput,
            type: this.state.typeInput
        }
        this.props.addTodo(data)
        this.setState({
            titleInput:'',
            typeInput:''
        })
    }

    render() {
        return (
            <form className="note-container">
                <div className="col-12 heading-title">
                    Create new To-do
                  </div>
                <input type="text" className="col-12 input-title" placeholder="To-do title" value={this.state.titleInput} onChange={this.handleTitleInput}></input>
                <div className="line-container">
                    <div className="line"></div>
                </div>
                <input type="text" className="col-12 input-type" placeholder="Priority type" value={this.state.typeInput} onChange={this.handleTypeInput}></input>
                <div className="col-12 button-container">
                    <button type="submit" className="button button-confirm" onClick={this.handleAddButtonClick}>
                        Confirm
                  </button>
                    <button className="button button-cancel">
                        Cancel
                  </button>
                </div>
            </form>
        )
    }
}

export default NewTodo