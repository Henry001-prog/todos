import styled from 'styled-components/native';

export const Line = styled.View`
    height: 60px;
    border-bottom-width: 1px;
    border-bottom-color: #bbb;
    align-items: center;
    flex-direction: row;
`;

export const LineText = styled.Text`
    font-size: 20px;
    padding-left: 15px;
    flex: 7;
    text-decoration-line: ${props => (props.done ? 'line-through' : 'none')};
`;

// 