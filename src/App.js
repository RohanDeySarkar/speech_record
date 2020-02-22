import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import uuid from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Submit from './components/Submit';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      item: '',
      head: '',
      id: uuid(),
      editItem: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
      head: this.state.head
    }
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      head: '',
      id: uuid(),
      editItem: false
    })
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => 
      item.id !== id
    )
    this.setState({
      items: filteredItems
    })
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => 
      item.id !== id
    )
    const selectItem = this.state.items.filter(item => 
      item.id === id
    )
    this.setState({
      items: filteredItems,
      item: selectItem.title,
      head: selectItem.head,
      editItem: true,
      id: id 
    })
  };

  deleteAll = () => {
    this.setState({
      items: []
    })
  }

  render() {
    console.log(this.state.items)
    return (
      <div>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={() => 
              <Home 
                items={this.state.items}
                deleteAll={this.deleteAll}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            } />
            <Route exact path="/submit" component={() => 
              <Submit 
                item={this.state.item}
                head={this.state.head}
                editItem={this.state.editItem}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
