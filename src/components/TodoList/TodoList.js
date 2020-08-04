import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from '../TodoListItem';
import { toggleTodo, setEditingTodo } from '../../actions';

// import { Container } from './styles';

const TodoList = ({ 
    todos, 
    dispatchToggleTodo, 
    dispatchSetEditingTodo 
}) => (
    <View>
        {todos.map(todo => (
            <TodoListItem 
                key={todo.id} 
                todo={todo}
                onPressTodo={() => dispatchToggleTodo(todo.id)}
                onLongPressTodo={() => dispatchSetEditingTodo(todo)}
            />
        ))}
    </View>
);

const styles = StyleSheet.create({
    //
});

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(
    mapStateToProps,
    { 
        dispatchToggleTodo: toggleTodo, // aqui ele é passado como dispatchToggleTodo
        dispatchSetEditingTodo: setEditingTodo
    } 
)(TodoList);