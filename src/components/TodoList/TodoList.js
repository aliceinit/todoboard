import React, { Component } from 'react';
import styled from 'styled-components'
import { TodoCard } from '../TodoItem/TodoItem';
import { Droppable } from "react-beautiful-dnd"


const ListTitle = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: "#008e5b";
    background-color: #eb4200;
    border-radius: .5rem; 
    padding: .5rem;
    margin: 1rem 4rem;
`;

const ListDiv = styled.div`
    background-color: #7e1d00;
    color: white;
    border-radius: 1rem;
    flex-basis: 30%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: space-around;
    padding: .5rem;
`;

const CardArea = styled.div`
    border: 2px white dotted;
`;
export class TodoList extends Component {

    render() {
        return (
            <ListDiv>
                <ListTitle>{this.props.name}</ListTitle>
                <Droppable droppableId={this.props.name}>
                    {provided => (
                        <CardArea
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            innterRef={provided.innerRef}>
                            {this.props.cards.map((card, index) => <TodoCard
                                key={card.id}
                                index={index}
                                card={card} />)}
                            {provided.placeholder}
                        </CardArea>
                    )}
                </Droppable>
            </ListDiv >
        )
    };
}
