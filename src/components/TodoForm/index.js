import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux';

import Input from '../Input';
import { addTodo, setTodoText, updateTodo } from '../../actions';

import { FormContainer, InputContainer, ButtonContainer } from './styles';

class TodoForm extends React.Component {
    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }

    onPress() {
        const { todo } = this.props;
        if (todo.id)
            return this.props.dispatchUpdateTodo(todo);
        
        const { text } = todo;
        this.props.dispatchAddTodo(text);
    }

    render() {
        const { text, id } = this.props.todo;
        return (
            <FormContainer>
                <InputContainer>
                    <Input
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                </InputContainer>
                <ButtonContainer>
                    <Button 
                        onPress={() => this.onPress()}
                        title={id ? "save" : "add"}
                    />
                </ButtonContainer>
            </FormContainer>
        );
    }
}

/*const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    inputContainer: {
        flex: 4,  
    },
    buttonContainer: {
        flex: 1,
    },
});*/

//const mapDispatchToProps = dispatch => {
//    return {
//        dispatchAddTodo: text => dispatch(addTodo(text))
//    }
//}

//const mapDispatchToProps = { // pode ser desse jeito
//    dispatchAddTodo: addTodo
//}

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

export default connect(
    mapStateToProps,
    {
        dispatchAddTodo: addTodo, // forma mais enchuta
        dispatchSetTodoText: setTodoText,
        dispatchUpdateTodo: updateTodo
    }
)(TodoForm);