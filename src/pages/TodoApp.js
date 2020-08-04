import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList/TodoList';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../reducers';

import devToolsEnhancer from 'remote-redux-devtools';

import { Div } from './styles';

const store = createStore(rootReducer);

export default class TodoApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Div>
                    <TodoForm />
                    <TodoList />
                </Div>
            </Provider>
        );
    }
}

/*const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
});*/