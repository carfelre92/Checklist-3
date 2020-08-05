import React, { Component } from 'react';
import Todo from './Todo'
import NewToDo from './NewToDo'
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          id: 1,
          title: 'title input',
          type: 'typeinput',
        }
      ],
      titleInput: '',
      typeInput: '',
    }
  }


  addTodo = (data) => {

      var newTodo = {
        id: Date.now(),
        ...data
      }
  
      var newList = [newTodo, ...this.state.todos]
      this.setState({
        todos: newList
      })

  }

  removeTodo = (id)=>{
    var todos = this.state.todos

    var filtered = todos.filter((todo)=>{
      return todo.id != id
    })

    this.setState({
      todos: filtered
    })
  }

    render() {
      return (
        <div className="wrap">
          <section className="section1">
            <div className="container-lg container-todo-list">
              <div className="heading">
                <h1>My tasks</h1>
              </div>

              <div className="row todo-list">
                {
                  this.state.todos.map((todo)=>{

                    var todoProps = {
                      key: todo.id,
                      removeTodo: this.removeTodo,
                      //updateTodo: this.updateTodo,
                      ...todo
                    }
                    return (
                      <Todo {...todoProps}/>
                    )
                  })
                }
              </div>
            </div>
          </section>

          <section className="section2">
            <div className="container-lg form-note">
              <div className="row">
                <NewToDo addTodo={this.addTodo}/>
              </div>
            </div>
          </section>
        </div>

      );
    }

  }

export default App;
