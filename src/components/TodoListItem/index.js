import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Line, LineText } from './styles';


const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) => (
        <TouchableOpacity 
            onPress={onPressTodo}
            onLongPress={onLongPressTodo}>
            <Line>
                <LineText done={todo.done}>   
                    { todo.text }
                </LineText>
            </Line>
        </TouchableOpacity>
    );

/*const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
    lineThrough: {
        textDecorationLine: 'line-through'
    },
})*/

export default TodoListItem;