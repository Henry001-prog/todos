import React from 'react';
import { StyleSheet} from 'react-native';
import { TextInput } from './styles';

const Input = ({ onChangeText, value }) => (
    <TextInput 
        //style={styles.input}
        onChangeText={onChangeText}
        value={value} 
        underlineColorAndroid="transparent" />
);

/*const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        paddingBottom: 4,
        marginBottom: 10,
        borderBottomColor: '#000',
        borderWidth: 2,
        borderColor: 'transparent',
    }
});*/

export default Input;