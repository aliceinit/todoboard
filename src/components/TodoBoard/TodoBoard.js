import React, { Component } from 'react';
import styled from 'styled-components';
import { TodoList } from "../TodoList/TodoList"
import { DragDropContext } from "react-beautiful-dnd"


const BoardDiv = styled.div`
    background-color: #ffc760;
    margin: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: space-around;
`;

export class TodoBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listNames: props.listNames,
            lists: props.lists,
            cards: props.cards
        };
    };

    onDragEnd = ({ source, destination, draggableId }) => {
        if (!destination ||
            (source.index === destination.index &&
                source.droppableId === destination.droppableId)) {
            // item wasn't dropped in a valid place OR source === destination
            return
        }
        
        // Remove item from source List
        const sourceList = this.state.lists[source.droppableId];
        const sourceCards = sourceList.cards.slice(0);
        sourceCards.splice(source.index, 1);

        // if source list === destination list
        if (source.droppableId === destination.droppableId) {
            sourceCards.splice(destination.index, 0, draggableId);
            this.setState(
                (prevState) => {
                    return {
                        ...prevState,
                        lists: {
                            ...prevState.lists,
                            [source.droppableId]: {
                                ...sourceList,
                                cards: sourceCards
                            }
                        }
                    }
                });
        } else {
            // Insert items into destination list & update both lists in state
            const destList = this.state.lists[destination.droppableId];
            const destCards = destList.cards.slice(0);
            destCards.splice(destination.index, 0, draggableId);
            this.setState(
                (prevState) => {
                    return {
                        ...prevState,
                        lists: {
                            ...prevState.lists,
                            [source.droppableId]: {
                                ...sourceList,
                                cards: sourceCards
                            },
                            [destination.droppableId]: {
                                ...destCards,
                                cards: destCards
                            }
                        }
                    }
                });
        }
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <BoardDiv>
                    {this.state.listNames.map(name => <TodoList
                        key={name}
                        name={name}
                        cards={this.state.lists[name].cards.map(
                            cardName => this.state.cards[cardName])} />)}
                </BoardDiv>
            </DragDropContext>
        )
    }
}