import React, { Component } from 'react';
import './App.css';
import { TodoBoard } from "./components/TodoBoard/TodoBoard"

const initial = [
  {
    name: "TODO",
    cards: [
      {
        id: "todo-1",
        title: "Sample Task 1",
        description: "The First Sample Task"
      },
      {
        id: "todo-2",
        title: "Sample Task 2",
        description: "The Second Sample Task"
      }
    ]
  },
  {
    name: "IN-PROGRESS",
    cards: [{
      id: "todo-3",
      title: "Sample Task 3",
      description: "The Third Sample Task"
    }]
  },
  {
    name: "DONE",
    cards: [{
      id: "todo-4",
      title: "Sample Task 4",
      description: "The Fourth Sample Task"
    },
    {
      id: "todo-5",
      title: "Sample Task 5",
      description: "The Fifth Sample Task"
    },
    {
      id: "todo-6",
      title: "Sample Task 6",
      description: "The Sixth Sample Task"
    }]
  }
]

class App extends Component {

  render() {
    const listNames = initial.map(todoList => todoList.name);
    const lists = initial.reduce((acc, todoList) => {
      acc[todoList.name] = { cards: todoList.cards.map(item => item.id) };
      return acc;
    }, {});
    const cards = initial.map(todoList => todoList.cards)
      .flat()
      .reduce((acc, card) => {
        acc[card.id] = card;
        return acc;
      }, {});
    return (
      <div className="App">
        <header className="App-header">
          <h1>TodoBoard</h1>
          <nav>
            <ul>
              <li><a href="/">Today</a></li>
              <li><a href="/">This Cycle</a></li>
              <li><a href="/">All-Time</a></li>
            </ul>
          </nav>
        </header>
        <section>
          <TodoBoard
            listNames={listNames}
            lists={lists}
            cards={cards} />
        </section>
        <footer>
          <p>other links here</p>
        </footer>
      </div>
    )
  };
}

export default App;