import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";

const CardDiv = styled.div`
    background-color: #ffe9c2;
    border-radius: .5rem;
    color: black;
    margin: .25rem;
    padding: .5rem;
    border: 1px #f3c370 solid;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    &:hover, &:active {
        background-color:#f3c370;
        cursor: grab;
    }
    &:active {
        border-bottom: 4px solid #eb4200;
        border-right: 4px solid #eb4200;
        color: #eb4200;
    }
`;

const CardTitle = styled.h1`
    font-size: 1.5rem;
    text-align: left;
    padding: 0;
    margin: 0 0 .5rem 0;
`;

const CardDescription = styled.p`
    font-size: 1rem;
    text-align: left;
    padding: 0;
    margin: 0;
`;

export class TodoCard extends Component {
    render() {
        // Todo - add some kind of layout with checkbox...
        return (
            <Draggable draggableId={this.props.card.id} index={this.props.index}>
                {provided => (
                    <CardDiv
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}>
                        <CardTitle>{this.props.card.title}</CardTitle>
                        <CardDescription>{this.props.card.description}</CardDescription>
                    </CardDiv>
                )}
            </Draggable>
        )
    }
}